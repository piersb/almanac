import React from 'react'
import formJson from '@quarterto/form-json'
import styled from 'styled-components'
import { compose, withHandlers, withProps } from 'recompact'
import Ornamented from '../visual/ornamented'
import Icon from '../visual/icon'
import { withCampaign } from '../data/campaign'
import { Button } from '../visual/primitives'
import withCards from '../data/card'
import { Card } from '../../shared/methods'
import access from '../../shared/access'

const relationshipLabel = {
	'-2': 'Hostile',
	'-1': 'Unfriendly',
	0: 'Neutral',
	1: 'Friendly',
	2: 'Allied',
}

const relationshipIcon = {
	'-2': 'crossed-swords',
	'-1': 'cracked-shield',
	0: 'castle-emblem',
	1: 'beer',
	2: 'two-hearts',
}

const Right = styled.span`
	float: right;
`

const connectModRelationship = withHandlers({
	modRelationship: ({ amount, faction }) => () => {
		const relationship = (faction.relationship || 0) + amount

		if (
			amount + faction.relationship < 3 &&
			amount + faction.relationship > -3
		) {
			Card.update(faction, { relationship })
		}
	},
})

const ModRelationship = connectModRelationship(
	({ amount, faction, modRelationship }) => (
		<Button
			disabled={amount * faction.relationship >= 2}
			onClick={modRelationship}
		>
			{amount > 0 ? '+' : '-'}
		</Button>
	),
)

const Relationship = ({ control, faction }) => (
	<Right>
		{relationshipLabel[faction.relationship || 0]}{' '}
		<Icon icon={relationshipIcon[faction.relationship || 0]} />
		{control && (
			<span>
				<ModRelationship faction={faction} amount={+1} />
				<ModRelationship faction={faction} amount={-1} />
			</span>
		)}
	</Right>
)

const withFactionActions = withHandlers({
	onCreate: ({ campaignId }) => ev => {
		ev.preventDefault()
		const data = formJson(ev.target)
		ev.target.reset()

		Card.create({
			...data,
			relationship: 0,
			type: 'faction',
			campaignId,
			access: {view: access.CAMPAIGN, edit: access.PRIVATE},
		})
	},
})

const connectRemoveButton = withHandlers({
	remove: ({ faction }) => () => {
		Card.delete(faction)
	},
})

const Remove = connectRemoveButton(({ remove }) => (
	<Button onClick={remove}>×</Button>
))

const withFactionData = withCards('factions', { type: 'faction' })

const connectFactions = compose(
	withCampaign,
	withFactionData,
	withFactionActions,
)

const ShowFactions = connectFactions(
	({ factions, onCreate, control = false }) => (
		<div>
			<Ornamented ornament='x'>Factions</Ornamented>

			<ul>
				{factions.map(faction => (
					<li key={faction._id}>
						{faction.title}
						<Relationship control={control} faction={faction} />
						{control && <Remove faction={faction} />}
					</li>
				))}

				{control && (
					<form onSubmit={onCreate}>
						<input placeholder='Faction' name='title' />
						<Button>➕</Button>
					</form>
				)}
			</ul>
		</div>
	),
)

const FactionsControl = withProps({ control: true })(ShowFactions)

export { ShowFactions as display, FactionsControl as control }
