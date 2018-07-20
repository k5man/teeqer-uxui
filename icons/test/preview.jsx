import { Icon } from '../index';

export default {
	title: 'Icons',
	blocks: [
		{
			title: 'Icon example',
			text:
`<Icon name="add" />
<Icon name="zoom_in" />
`,
			component: () => {
				return (
					<div>
						<Icon name="add" />
						<Icon name="zoom_in" />
					</div>
				);
			},
		},
	],
};

