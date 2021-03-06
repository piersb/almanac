import React from 'react'
import styled, { css } from 'styled-components'

import Link from '../control/link'
import withImage from '../data/image'
import { SplashBackground, Hero, HeroTitle } from '../visual/splash'
import { Card as CardPrimitive } from '../visual/primitives'
import Markdown from './markdown'

const CardHeader = withImage(({ card }) => card.cover)(SplashBackground.extend`
	margin: -1rem -1rem 0;
	padding-top: 0.5rem;
	transition: filter 0.2s;
	will-change: filter;
	border-top-left-radius: 2px;
	border-top-right-radius: 2px;

	${({ image }) =>
		image &&
		css`
			height: 6rem;
		`}

	a:hover & {
		filter: contrast(120%) brightness(95%) saturate(110%);
	}

	&:last-child {
		margin-bottom: -1rem;
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
	}
`)

const CardLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	${({ card }) =>
		card &&
		css`
			grid-row: span ${3 + Boolean(card.cover) + Boolean(card.text)};
		`};

	${CardPrimitive} {
		height: 100%;
	}
`

const ListImage = withImage(({ card }) => card.cover)(SplashBackground.extend`
	min-height: 2rem;
	padding: 0.5rem;
	font-family: 'Libre Baskerville', serif;
	font-size: 0.8em;

	a:hover & {
		filter: contrast(120%) brightness(95%) saturate(110%);
	}
`)

export const CardListItem = ({ card, onClick }) => (
	<li>
		<CardLink
			href={card._id ? `/${card.campaignId}/${card._id}` : null}
			onClick={onClick}
		>
			<ListImage card={card}>{card.title}</ListImage>
		</CardLink>
	</li>
)

export default ({ card }) => (
	<CardLink
		card={card}
		href={card._id ? `/${card.campaignId}/${card._id}` : null}
	>
		<CardPrimitive>
			<CardHeader card={card}>
				<Hero>
					<HeroTitle>{card.title}</HeroTitle>
				</Hero>
			</CardHeader>

			<Markdown excerpt source={card.text || ''} />
		</CardPrimitive>
	</CardLink>
)
