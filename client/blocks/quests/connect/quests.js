import {withHandlers} from 'recompact';
import formJson from '@quarterto/form-json';
import generateSlug from '../../../../shared/utils/generate-slug';
import {createCard} from '../../../../shared/methods';

const questsActions = withHandlers({
	onCreateQuest: ({campaignId, campaignSession}) => ev => {
		ev.preventDefault();
		const data = formJson(ev.target);
		ev.target.reset();

		createCard({
			...data,
			type: 'quest',
			campaignId,
		});

		campaignSession.set('splashQuest', {
			action: 'startQuest',
			quest: data,
		});
	},
});

export default questsActions;
