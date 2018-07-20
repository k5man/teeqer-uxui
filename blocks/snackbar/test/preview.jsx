import { Snackbar } from '../index';

export default {
	title: 'Snackbar',
	blocks: [
		{
			title: 'Simple snackbar',
			text:
				`<Snackbar
					message="Simple message"
				/>`,
			component: () => {
				return (
					<Snackbar
						message="Simple message"
						open
					/>
				);
			},
		},
	],
};

