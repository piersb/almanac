import React from 'react'
import { compose, withHandlers, withProps } from 'recompact'
import BlockLayout from '../collection/block-layout'
import Icon from '../visual/icon'
import { withCampaignData } from '../data/campaign'
import { assertAmOwner } from '../data/owner'
import { MenuLink } from '../visual/menu'
import { withExtraNavItems } from './layout'

const withDashboardActions = withHandlers({
	launchDashboard: ({ campaign }) => ev => {
		ev.preventDefault()

		window.open(
			`/${campaign._id}/dashboard`,
			campaign._id,
			'width=600,height=400',
		)
	},
})

const LaunchLink = ({ campaign, launchDashboard }) => (
	<MenuLink href={`/${campaign._id}/dashboard`} onClick={launchDashboard}>
		<Icon icon='scroll-unfurled' />
		Launch Dashboard
	</MenuLink>
)

const connectDashboardControl = compose(
	withCampaignData,
	assertAmOwner('campaign'),
	withDashboardActions,
	withExtraNavItems(LaunchLink),
	withProps({ which: 'control' }),
)

export default connectDashboardControl(BlockLayout)
