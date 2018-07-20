import { Preloader } from '../index';

export default {
	title: 'Preloader',
	blocks: [
		{
			title: 'Preloader',
			text:
				`<Preloader size="big" />
<Preloader />
<Preloader size="small" />
<Preloader color="#ff11ff" />`,
			component: () => {
				return (
					<div>
						<Preloader size="big" />
						<Preloader />
						<Preloader size="small" />
						<Preloader color="#ff11ff" />
					</div>
				);
			},
		},
	],
};

