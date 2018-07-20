import { Card, CardHeader, CardContent, CardActions, CardImage, CardTitle } from '../index';
import { Icon } from '../../icons/index';
import { RaisedButton, FlatButton } from '../../buttons/index';
import image from './img.png';

export default {
	title: 'Card',
	blocks: [
		{
			title: 'Card Example',
			text:
`<Card>
	<CardHeader>
		Header
	</CardHeader>
	<CardImage src={image} title="Title test" />
	<CardContent>
		<h2>Header h2</h2>
		<h3>Header h3</h3>
		<h4>Header h4</h4>
		<p>
			Ill be in your neighborhood doing errands this weekend if you want to meet up for bunch. Let me know.
		</p>
		<p>
			And little bit more...
		</p>
		<hr />
		<p>
			Some text for test card section.
		</p>
		<hr />
			Some text for test card section. Again.
	</CardContent>
	<CardActions>
		<RaisedButton>Link 1</RaisedButton>
		<FlatButton>Link 2</FlatButton>
	</CardActions>
</Card>`,
			component: () => {
				return (
					<Card>
						<CardHeader>
							Header
						</CardHeader>
						<CardImage src={image} title="Title test" />
						<CardContent>
							<h2>Header h2</h2>
							<h3>Header h3</h3>
							<h4>Header h4</h4>
							<h5>Header h5</h5>
							<h6>Header h6</h6>
							<p>
								Ill be in your neighborhood doing errands this weekend if you want to meet up for bunch. Let me know.
							</p>
							<p>
								And little bit more...
							</p>
							<hr />
							<p>
								Some text for test card section.
							</p>
							<hr />
								Some text for test card section. Again.
						</CardContent>
						<CardActions>
							<RaisedButton>Link 1</RaisedButton>
							<FlatButton>Link 2</FlatButton>
						</CardActions>
					</Card>
				);
			},
		},
		{
			title: 'Card title',
			template: {
				text:
`<Card>
	<CardHeader>
		**replacement**
	</CardHeader>
	<CardContent>
		<h3>Text title</h3>
		<p>
			And little bit more...
		</p>
	</CardContent>
	<CardActions>
		<a href="">Link 1</a>
	</CardActions>
</Card>`,
				component: (replacement) => {
					return (
						<Card>
							<CardHeader>
								{replacement}
							</CardHeader>
							<CardContent>
								<h3>Text title</h3>
								<p>
									And little bit more...
								</p>
							</CardContent>
							<CardActions>
								<a href="#/">Link 1</a>
							</CardActions>
						</Card>
					);
				},
			},
			variants: [
				{
					title: 'Card title',
					text: `<CardTitle title="Card title" />`,
					component: () => {
						return <CardTitle title="Card title" />;
					},
				},
				{
					title: 'Card title with icon',
					text:
`<CardTitle
	icon={<Icon name="person_pin" />}
	title="Card title"
/>`,
					component: () => {
						return (<CardTitle
							icon={<Icon name="person_pin" />}
							title="Card title"
						/>);
					},
				},
				{
					title: 'Card title with icon and sideheader',
					text:
`<CardTitle
	icon={<Icon name="person_pin" />}
	title="Card title"
	sideTitle="Step 1 from 3"
/>`,
					component: () => {
						return (<CardTitle
							icon={<Icon name="person_pin" />}
							title="Card title"
							sideTitle="Step 1 from 3"
						/>);
					},
				},
			],
		},
	],
};

