import '../../assets/css/materialize.less';
import './style.less';
import Teeq from '../../teeq/test/preview';
// import Typography from '../../typography/test/preview';
// import Buttons from '../../buttons/test/preview';
// import Cards from '../../card/test/preview';
// import Forms from '../../form/test/preview';
// import Icons from '../../icons/test/preview';
// import HeaderBlocks from '../../blocks/headers/test/preview';
// import ProductBlocks from '../../blocks/products/test/preview';
// import ImageBlocks from '../../blocks/images/test/preview';
// import SnackbarBlocks from '../../blocks/snackbar/test/preview';
// import Preloader from '../../blocks/preloader/test/preview';
// import Notifications from '../../blocks/notifications/test/preview';
// import Collection from '../../collection/test/preview';
// import Tabs from '../../blocks/tabs/test/preview';

const previews = [
	Teeq,
	/* Cards,
	Blocks,
	Typography,
	Buttons,
	Forms,
	Icons,
	Collection,
	HeaderBlocks,
	ProductBlocks,
	ImageBlocks,
	SnackbarBlocks,
	Preloader,
	Notifications,
	Tabs, */
];

class App extends React.Component {

	static submenu(blocks) {
		return (
			<div className="inner">
				<ul>
					{blocks.map(item => {
						if (!item.variants) {
							return (
								<li><a href={`#${App.escapeId(item.title)}`}>{`${item.title}`}</a></li>
							);
						}
						return (
							<li>
								<a href={`#${App.escapeId(item.title)}`}>{`${item.title}`}</a>
								<ul className="subItems">
									{
										item.variants.map(subItem => {
											return <li><a href={`#${App.escapeId(subItem.title)}`}>{`${subItem.title}`}</a></li>;
										})
									}
								</ul>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	static escapeId(id) {
		return id.replace(/ /g, '_');
	}

	static prepareTemplateText(template, text, i) {
		if (i === 0) {
			return template.replace('**replacement**', text);
		}
		return `******
${text}
******`;
	}

	static drawTemplateBlock(subBlock) {
		return (
			<div id={App.escapeId(subBlock.title)} className="previewBlocks scrollspy">
				<h4>{subBlock.title}</h4>
				{
					subBlock.variants.map((block, i) => (
						<div id={App.escapeId(block.title)} className="previewBlocks scrollspy">
							<h5 >{block.title}</h5>
							<div className="previewBlock">
								<div className="previewExample">
									{subBlock.template.component(block.component())}
								</div>
								<div className="previewCode">
									<pre>
										<code className="language-markup">{App.prepareTemplateText(subBlock.template.text, block.text, i)}</code>
									</pre>
								</div>
							</div>
						</div>
					))
				}
			</div>
		);
	}

	static drawBlock(block) {
		return (
			<div id={App.escapeId(block.title)} className="previewBlocks scrollspy">
				<h4>{block.title}</h4>
				<div className="previewBlock">
					<div className="previewExample">
						{block.component()}
					</div>
					<div className="previewCode">
						<pre>
							<code className="language-markup">{block.text}</code>
						</pre>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		$(document).ready(() => {
			$('.collapsible').collapsible();
			$('.scrollspy').scrollSpy();
		});
	}

	render() {
		return (
			<div className="previewContainer">
				<ul className="previewNavigation side-nav fixed">
					<li>
						<ul className="collapsible collapsible-accordion table-of-contents">
							{previews.map(item => {
								return (
									<li className="bold">
										<a href={`#${item.title}`} className="collapsible-header waves-effect waves-teal">
											{item.title}
										</a>
										{item.blocks && App.submenu(item.blocks)}
									</li>
								);
							})}
						</ul>
					</li>
				</ul>
				<main className="previewContent">
					{previews.map(item => {
						return (
							<div className="previewBlocksWrap" id={item.title}>
								<h2>{item.title}</h2>
								{item.blocks && item.blocks.map(block => {
									return block.template ? App.drawTemplateBlock(block) : App.drawBlock(block);
								})}
							</div>
						);
					})}
				</main>
			</div>
		);
	}

}

export default App;
