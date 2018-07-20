import { Card, CardContent } from '../../card/index';

export default {
	title: 'Base styles',
	blocks: [
		{
			title: 'Typography',
			text:
`<Card>
	<CardContent>
		<h1>Heading h1</h1>
		<h2>Heading h2</h2>
		<h3>Heading h3</h3>
		<h4>Heading h4</h4>
		<h5>Heading h5</h5>
		<h6>Heading h6</h6>
		<blockquote>
			This is an example quotation that uses the blockquote tag.
		</blockquote>
		<p className="flow-text">I am Flow Text. To see Flow Text in action, slowly resize your browser and watch the size of this text body change! Use the button above to toggle off/on flow-text to see the difference!</p>
		<ul>
			<li>List item 1</li>
			<li>List item 2</li>
			<li>List item 3</li>
		</ul>
		<ol>
			<li>List item 1</li>
			<li>List item 2</li>
			<li>List item 3</li>
		</ol>
	</CardContent>
</Card>`,
			component: () => {
				return (
					<Card>
						<CardContent>
							<h1>Heading h1</h1>
							<h2>Heading h2</h2>
							<h3>Heading h3</h3>
							<h4>Heading h4</h4>
							<h5>Heading h5</h5>
							<h6>Heading h6</h6>
							<blockquote>
								This is an example quotation that uses the blockquote tag.
							</blockquote>
							<p className="flow-text">I am Flow Text. To see Flow Text in action, slowly resize your browser and watch the size of this text body change! Use the button above to toggle off/on flow-text to see the difference!</p>
							<p className="info">I am info Text. To see Flow Text in action, slowly resize your browser and watch the size of this text body change! Use the button above to toggle off/on flow-text to see the difference!</p>
							<ul>
								<li>List item 1</li>
								<li>List item 2</li>
								<li>List item 3</li>
							</ul>
							<ol>
								<li>List item 1</li>
								<li>List item 2</li>
								<li>List item 3</li>
							</ol>
						</CardContent>
					</Card>
				);
			},
		},
		{
			title: 'Helpers',
			text:
`<Card>
	<CardContent>
		<h4 className="truncate">This is an extremely long title that will be truncated</h4>
		<ul className="browser-default">
			<li>List item 1</li>
			<li>List item 2</li>
			<li>List item 3</li>
		</ul>
	</CardContent>
</Card>`,
			component: () => {
				return (
					<Card>
						<CardContent>
							<h4 className="truncate">This is an extremely long title that will be truncated</h4>
							<ul className="browser-default">
								<li>List item 1</li>
								<li>List item 2</li>
								<li>List item 3</li>
							</ul>
						</CardContent>
					</Card>
				);
			},
		},
	],
};

