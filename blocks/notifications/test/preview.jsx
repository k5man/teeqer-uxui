import { Card } from '../../../card';
import { TextNotificationBlock } from '../index';
import { BonusCodeInput } from '../../bonuses/index';

export default {
	title: 'Notifications Blocks',
	blocks: [
		{
			title: 'Text Notification connected to Card',
			text:
				`<TextNotificationBlock
					text="Some text notificaiton"
				/>`,
			component: () => {
				return (
					<Card>
						<TextNotificationBlock
							text="Some text notificaiton"
						/>
						<BonusCodeInput
							counter="0"
							actiontext="Enter the Code"
						/>
					</Card>
				);
			},
		},
	],
};

