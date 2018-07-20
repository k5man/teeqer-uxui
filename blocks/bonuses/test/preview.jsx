import { Card } from '../../../card';
import { BonusCodeInput } from '../index';

export default {
	title: 'Bonuses',
	blocks: [
		{
			title: 'Enter the Promo Code Block',
			text:
				`<BonusCodeInput
	buttontext="Product name"
/>`,
			component: () => {
				return (
					<Card>
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

