import { Card, CardContent } from '../../card/index';
import { Collection, AvatarItem } from '../index';
import image from './g-1.jpg';

export default {
	title: 'Collection',
	blocks: [
		{
			title: 'Collection',
			text:
				`<Collection>
	<AvatarItem
		title="Title"
		description="Content"
		image={image}
	/>
	<AvatarItem
		title="Title 2"
		description="Content 2"
		image={image}
	/>
</Collection>`,
			component: () => {
				return (
					<Card>
						<CardContent>
							<span />
							<Collection>
								<AvatarItem
									title="Title"
									description="Content"
									image={image}
								/>
								<AvatarItem
									title="Title 2"
									description="Content 2"
									image={image}
								/>
							</Collection>
						</CardContent>
					</Card>
				);
			},
		},
	],
};

