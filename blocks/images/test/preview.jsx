import { Card, CardContent } from '../../../card';
import { BlockImage, BlockImages } from '../index';
import image from './g-1.jpg';

const images = [
	{
		img: image,
	},
	{
		img: image,
	},
];

export default {
	title: 'Image Blocks',
	blocks: [
		{
			title: 'Wide Image Block',
			text:
				`<BlockImage
			image={image}
			description="Some image"
/>`,
			component: () => {
				return (
					<Card>
						<CardContent>
							Some content
						</CardContent>
						<BlockImage
							image={image}
							description="Some image"
						/>
						<CardContent>
							Some content
						</CardContent>
					</Card>
				);
			},
		},
		{
			title: 'Images Block',
			text:
				`const images = [
	{
		img: image,
	},
	{
		img: image,
	},
];
...
	<BlockImages
			image={images}
/>`,
			component: () => {
				return (
					<Card>
						<CardContent>
							Some content
						</CardContent>
						<BlockImages
							images={images}
						/>
						<CardContent>
							Some content
						</CardContent>
					</Card>
				);
			},
		},
	],
};

