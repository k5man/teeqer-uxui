import { Teeq } from '../index';

export default {
	title: 'Teeq',
	blocks: [
		{
			title: 'Teeq Collapsed',
			text:
`<Teeq>
</Teeq>`,
			component: () => {
				return (
					<Teeq expanded="true" />
				);
			},
		},
		{
			title: 'Teeq Expanded with Preloader',
			text:
`<Teeq
	showLoader="true"
>
</Teeq>`,
			component: () => {
				return (
					<Teeq showLoader="true" />
				);
			},
		},
		{
			title: 'Teeq Expanded',
			text:
`<Teeq>
</Teeq>`,
			component: () => {
				return (
					<Teeq />
				);
			},
		},
	],
};

