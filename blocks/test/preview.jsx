import { Card } from '../../card';
import { BlockTwoColumns, BonusCodeInput } from '../index';

export default {
	title: 'Blocks',
	blocks: [
		{
			title: 'Two Columns Block',
			text:
				`<BlockTwoColumns
	buttontext="Product name"
/>`,
			component: () => {
				return (
					<Card>
						<BlockTwoColumns
							counter="1"
							intro="Activate your code"
						>
							<h6>FF</h6>
							ddd
						</BlockTwoColumns>
					</Card>
				);
			},
		},
		{
			title: 'Bonus Block',
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

