import { Card, CardHeader } from '../../../card';
import { HeaderBlock } from '../index';
import { BlockImage } from '../../images';
import image from './logo.png';
import image2 from './g-1.jpg';

export default {
	title: 'Header Blocks',
	blocks: [
		{
			title: 'Icon Header without icon',
			text:
				`<HeaderBlock
					title="Main title"
					subtitle="Subtitle"
				/>`,
			component: () => {
				return (
					<Card>
						<CardHeader>
							<HeaderBlock
								title="Main title"
								subtitle="Subtitle"
							/>
						</CardHeader>
					</Card>
				);
			},
		},
		{
			title: 'Icon Header with icon',
			text:
				`<HeaderBlock
					image={image}
					title="Main title"
					subtitle="Subtitle"
				/>`,
			component: () => {
				return (
					<Card>
						<CardHeader>
							<HeaderBlock
								image={image}
								title="Main title"
								subtitle="Subtitle"
							/>
						</CardHeader>
					</Card>
				);
			},
		},
		{
			title: 'Icon Header with Rounded Icon',
			text:
				`<HeaderBlock
					image={image}
					title="Main title"
					subtitleGray="Subtitle"
				/>`,
			component: () => {
				return (
					<Card>
						<CardHeader>
							<HeaderBlock
								image={image}
								title="Main title"
								subtitle="Subtitle"
								rounded="true"
							/>
						</CardHeader>
					</Card>
				);
			},
		},
		{
			title: 'Image Header on Top',
			text:
				`<HeaderBlock
					image={image}
					title="Main title"
					subtitleGray="Subtitle"
				/>`,
			component: () => {
				return (
					<Card>
						<BlockImage
							image={image2}
							description="Some image"
							className="top_block"
						/>
						<CardHeader>
							<HeaderBlock
								title="Main title"
								subtitle="Subtitle"
							/>
						</CardHeader>
					</Card>
				);
			},
		},
	],
};

