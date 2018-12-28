import { compose, withHandlers } from 'recompact'
import { withCampaignData } from '../data/campaign'
import CampaignSettings from '../document/campaign-settings'
import { Campaign } from '../../shared/methods'
import { go } from '../utils/router'
import { assertAmOwner } from '../data/owner'

const withCampaignActions = withHandlers({
	onSubmit: ({ campaign }) => data => {
		Campaign.update(campaign, data)
		go(`/${campaign._id}`)
	}
})

const connectCampaignSettings = compose(
	withCampaignData,
	assertAmOwner('campaign'),
	withCampaignActions
)

export default connectCampaignSettings(CampaignSettings)
