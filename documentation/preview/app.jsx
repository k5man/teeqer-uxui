import '../../assets/css/materialize.less';
import './style.less';
import Blocks from '../../blocks/test/preview';
import Typography from '../../typography/test/preview';
import Buttons from '../../buttons/test/preview';
import Cards from '../../card/test/preview';
import Forms from '../../form/test/preview';
import Icons from '../../icons/test/preview';
import HeaderBlocks from '../../blocks/headers/test/preview';
import ProductBlocks from '../../blocks/products/test/preview';
import ImageBlocks from '../../blocks/images/test/preview';
import SnackbarBlocks from '../../blocks/snackbar/test/preview';
import Preloader from '../../blocks/preloader/test/preview';
import Notifications from '../../blocks/notifications/test/preview';
import Collection from '../../collection/test/preview';
import Tabs from '../../blocks/tabs/test/preview';

const previews = [
	Blocks,
	Typography,
	Buttons,
	Forms,
	Icons,
	Cards,
	Collection,
	HeaderBlocks,
	ProductBlocks,
	ImageBlocks,
	SnackbarBlocks,
	Preloader,
	Notifications,
	Tabs,
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
			// $('.collapsible').collapsible();
			$('.scrollspy').scrollSpy();
		});
	}

	render() {
		return (
			<div className="previewContainer">
				<ul className="previewNavigation side-nav fixed">
					<li>
						<ul className="collapsible collapsible-accordion table-of-contents">
							<li className="bold">
								<a href="#colorsBlock" className="collapsible-header waves-effect waves-teal">
									Colors
								</a>
							</li>
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
					<div className="previewBlocksWrap" id="colorsBlock">
						<h2>Colors</h2>
						<div className="row dynamic-color">
							<div className="col s12 m6 l4">
								<div className="red lighten-5">#ffebee red lighten-5</div>
								<div className="red lighten-4">#ffcdd2 red lighten-4</div>
								<div className="red lighten-3">#ef9a9a red lighten-3</div>
								<div className="red lighten-2">#e57373 red lighten-2</div>
								<div className="red lighten-1">#ef5350 red lighten-1</div>
								<div className="red">#f44336 red</div>
								<div className="red darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#e53935 red darken-1</div>
								<div className="red darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#d32f2f red darken-2</div>
								<div className="red darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#c62828 red darken-3</div>
								<div className="red darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#b71c1c red darken-4</div>
								<div className="red accent-1">#ff8a80 red accent-1</div>
								<div className="red accent-2">#ff5252 red accent-2</div>
								<div className="red accent-3">#ff1744 red accent-3</div>
								<div className="red accent-4">#d50000 red accent-4</div>
							</div>

							<div className="col s12 m6 l4">
								<div className="pink lighten-5">#fce4ec pink lighten-5</div>
								<div className="pink lighten-4">#f8bbd0 pink lighten-4</div>
								<div className="pink lighten-3">#f48fb1 pink lighten-3</div>
								<div className="pink lighten-2">#f06292 pink lighten-2</div>
								<div className="pink lighten-1">#ec407a pink lighten-1</div>
								<div className="pink">#e91e63 pink</div>
								<div className="pink darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#d81b60 pink darken-1</div>
								<div className="pink darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#c2185b pink darken-2</div>
								<div className="pink darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#ad1457 pink darken-3</div>
								<div className="pink darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#880e4f pink darken-4</div>
								<div className="pink accent-1">#ff80ab pink accent-1</div>
								<div className="pink accent-2">#ff4081 pink accent-2</div>
								<div className="pink accent-3">#f50057 pink accent-3</div>
								<div className="pink accent-4">#c51162 pink accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="purple lighten-5">#f3e5f5 purple lighten-5</div>
								<div className="purple lighten-4">#e1bee7 purple lighten-4</div>
								<div className="purple lighten-3">#ce93d8 purple lighten-3</div>
								<div className="purple lighten-2">#ba68c8 purple lighten-2</div>
								<div className="purple lighten-1">#ab47bc purple lighten-1</div>
								<div className="purple">#9c27b0 purple</div>
								<div className="purple darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#8e24aa purple darken-1</div>
								<div className="purple darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#7b1fa2 purple darken-2</div>
								<div className="purple darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#6a1b9a purple darken-3</div>
								<div className="purple darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#4a148c purple darken-4</div>
								<div className="purple accent-1">#ea80fc purple accent-1</div>
								<div className="purple accent-2">#e040fb purple accent-2</div>
								<div className="purple accent-3">#d500f9 purple accent-3</div>
								<div className="purple accent-4">#aa00ff purple accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="deep-purple lighten-5">#ede7f6 deep-purple lighten-5</div>
								<div className="deep-purple lighten-4">#d1c4e9 deep-purple lighten-4</div>
								<div className="deep-purple lighten-3">#b39ddb deep-purple lighten-3</div>
								<div className="deep-purple lighten-2">#9575cd deep-purple lighten-2</div>
								<div className="deep-purple lighten-1">#7e57c2 deep-purple lighten-1</div>
								<div className="deep-purple">#673ab7 deep-purple</div>
								<div className="deep-purple darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#5e35b1 deep-purple darken-1</div>
								<div className="deep-purple darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#512da8 deep-purple darken-2</div>
								<div className="deep-purple darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#4527a0 deep-purple darken-3</div>
								<div className="deep-purple darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#311b92 deep-purple darken-4</div>
								<div className="deep-purple accent-1">#b388ff deep-purple accent-1</div>
								<div className="deep-purple accent-2">#7c4dff deep-purple accent-2</div>
								<div className="deep-purple accent-3">#651fff deep-purple accent-3</div>
								<div className="deep-purple accent-4">#6200ea deep-purple accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="indigo lighten-5">#e8eaf6 indigo lighten-5</div>
								<div className="indigo lighten-4">#c5cae9 indigo lighten-4</div>
								<div className="indigo lighten-3">#9fa8da indigo lighten-3</div>
								<div className="indigo lighten-2">#7986cb indigo lighten-2</div>
								<div className="indigo lighten-1">#5c6bc0 indigo lighten-1</div>
								<div className="indigo">#3f51b5 indigo</div>
								<div className="indigo darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#3949ab indigo darken-1</div>
								<div className="indigo darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#303f9f indigo darken-2</div>
								<div className="indigo darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#283593 indigo darken-3</div>
								<div className="indigo darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#1a237e indigo darken-4</div>
								<div className="indigo accent-1">#8c9eff indigo accent-1</div>
								<div className="indigo accent-2">#536dfe indigo accent-2</div>
								<div className="indigo accent-3">#3d5afe indigo accent-3</div>
								<div className="indigo accent-4">#304ffe indigo accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="blue lighten-5">#e3f2fd blue lighten-5</div>
								<div className="blue lighten-4">#bbdefb blue lighten-4</div>
								<div className="blue lighten-3">#90caf9 blue lighten-3</div>
								<div className="blue lighten-2">#64b5f6 blue lighten-2</div>
								<div className="blue lighten-1">#42a5f5 blue lighten-1</div>
								<div className="blue">#2196f3 blue</div>
								<div className="blue darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#1e88e5 blue darken-1</div>
								<div className="blue darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#1976d2 blue darken-2</div>
								<div className="blue darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#1565c0 blue darken-3</div>
								<div className="blue darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#0d47a1 blue darken-4</div>
								<div className="blue accent-1">#82b1ff blue accent-1</div>
								<div className="blue accent-2">#448aff blue accent-2</div>
								<div className="blue accent-3">#2979ff blue accent-3</div>
								<div className="blue accent-4">#2962ff blue accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="light-blue lighten-5">#e1f5fe light-blue lighten-5</div>
								<div className="light-blue lighten-4">#b3e5fc light-blue lighten-4</div>
								<div className="light-blue lighten-3">#81d4fa light-blue lighten-3</div>
								<div className="light-blue lighten-2">#4fc3f7 light-blue lighten-2</div>
								<div className="light-blue lighten-1">#29b6f6 light-blue lighten-1</div>
								<div className="light-blue">#03a9f4 light-blue</div>
								<div className="light-blue darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#039be5 light-blue darken-1</div>
								<div className="light-blue darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#0288d1 light-blue darken-2</div>
								<div className="light-blue darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#0277bd light-blue darken-3</div>
								<div className="light-blue darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#01579b light-blue darken-4</div>
								<div className="light-blue accent-1">#80d8ff light-blue accent-1</div>
								<div className="light-blue accent-2">#40c4ff light-blue accent-2</div>
								<div className="light-blue accent-3">#00b0ff light-blue accent-3</div>
								<div className="light-blue accent-4">#0091ea light-blue accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="cyan lighten-5">#e0f7fa cyan lighten-5</div>
								<div className="cyan lighten-4">#b2ebf2 cyan lighten-4</div>
								<div className="cyan lighten-3">#80deea cyan lighten-3</div>
								<div className="cyan lighten-2">#4dd0e1 cyan lighten-2</div>
								<div className="cyan lighten-1">#26c6da cyan lighten-1</div>
								<div className="cyan">#00bcd4 cyan</div>
								<div className="cyan darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#00acc1 cyan darken-1</div>
								<div className="cyan darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#0097a7 cyan darken-2</div>
								<div className="cyan darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#00838f cyan darken-3</div>
								<div className="cyan darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#006064 cyan darken-4</div>
								<div className="cyan accent-1">#84ffff cyan accent-1</div>
								<div className="cyan accent-2">#18ffff cyan accent-2</div>
								<div className="cyan accent-3">#00e5ff cyan accent-3</div>
								<div className="cyan accent-4">#00b8d4 cyan accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="teal lighten-5">#e0f2f1 teal lighten-5</div>
								<div className="teal lighten-4">#b2dfdb teal lighten-4</div>
								<div className="teal lighten-3">#80cbc4 teal lighten-3</div>
								<div className="teal lighten-2">#4db6ac teal lighten-2</div>
								<div className="teal lighten-1">#26a69a teal lighten-1</div>
								<div className="teal">#009688 teal</div>
								<div className="teal darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#00897b teal darken-1</div>
								<div className="teal darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#00796b teal darken-2</div>
								<div className="teal darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#00695c teal darken-3</div>
								<div className="teal darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#004d40 teal darken-4</div>
								<div className="teal accent-1">#a7ffeb teal accent-1</div>
								<div className="teal accent-2">#64ffda teal accent-2</div>
								<div className="teal accent-3">#1de9b6 teal accent-3</div>
								<div className="teal accent-4">#00bfa5 teal accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="green lighten-5">#e8f5e9 green lighten-5</div>
								<div className="green lighten-4">#c8e6c9 green lighten-4</div>
								<div className="green lighten-3">#a5d6a7 green lighten-3</div>
								<div className="green lighten-2">#81c784 green lighten-2</div>
								<div className="green lighten-1">#66bb6a green lighten-1</div>
								<div className="green">#4caf50 green</div>
								<div className="green darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#43a047 green darken-1</div>
								<div className="green darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#388e3c green darken-2</div>
								<div className="green darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#2e7d32 green darken-3</div>
								<div className="green darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#1b5e20 green darken-4</div>
								<div className="green accent-1">#b9f6ca green accent-1</div>
								<div className="green accent-2">#69f0ae green accent-2</div>
								<div className="green accent-3">#00e676 green accent-3</div>
								<div className="green accent-4">#00c853 green accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="light-green lighten-5">#f1f8e9 light-green lighten-5</div>
								<div className="light-green lighten-4">#dcedc8 light-green lighten-4</div>
								<div className="light-green lighten-3">#c5e1a5 light-green lighten-3</div>
								<div className="light-green lighten-2">#aed581 light-green lighten-2</div>
								<div className="light-green lighten-1">#9ccc65 light-green lighten-1</div>
								<div className="light-green">#8bc34a light-green</div>
								<div className="light-green darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#7cb342 light-green darken-1</div>
								<div className="light-green darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#689f38 light-green darken-2</div>
								<div className="light-green darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#558b2f light-green darken-3</div>
								<div className="light-green darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#33691e light-green darken-4</div>
								<div className="light-green accent-1">#ccff90 light-green accent-1</div>
								<div className="light-green accent-2">#b2ff59 light-green accent-2</div>
								<div className="light-green accent-3">#76ff03 light-green accent-3</div>
								<div className="light-green accent-4">#64dd17 light-green accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="lime lighten-5">#f9fbe7 lime lighten-5</div>
								<div className="lime lighten-4">#f0f4c3 lime lighten-4</div>
								<div className="lime lighten-3">#e6ee9c lime lighten-3</div>
								<div className="lime lighten-2">#dce775 lime lighten-2</div>
								<div className="lime lighten-1">#d4e157 lime lighten-1</div>
								<div className="lime">#cddc39 lime</div>
								<div className="lime darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#c0ca33 lime darken-1</div>
								<div className="lime darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#afb42b lime darken-2</div>
								<div className="lime darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#9e9d24 lime darken-3</div>
								<div className="lime darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#827717 lime darken-4</div>
								<div className="lime accent-1">#f4ff81 lime accent-1</div>
								<div className="lime accent-2">#eeff41 lime accent-2</div>
								<div className="lime accent-3">#c6ff00 lime accent-3</div>
								<div className="lime accent-4">#aeea00 lime accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="yellow lighten-5">#fffde7 yellow lighten-5</div>
								<div className="yellow lighten-4">#fff9c4 yellow lighten-4</div>
								<div className="yellow lighten-3">#fff59d yellow lighten-3</div>
								<div className="yellow lighten-2">#fff176 yellow lighten-2</div>
								<div className="yellow lighten-1">#ffee58 yellow lighten-1</div>
								<div className="yellow">#ffeb3b yellow</div>
								<div className="yellow darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#fdd835 yellow darken-1</div>
								<div className="yellow darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#fbc02d yellow darken-2</div>
								<div className="yellow darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#f9a825 yellow darken-3</div>
								<div className="yellow darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#f57f17 yellow darken-4</div>
								<div className="yellow accent-1">#ffff8d yellow accent-1</div>
								<div className="yellow accent-2">#ffff00 yellow accent-2</div>
								<div className="yellow accent-3">#ffea00 yellow accent-3</div>
								<div className="yellow accent-4">#ffd600 yellow accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="amber lighten-5">#fff8e1 amber lighten-5</div>
								<div className="amber lighten-4">#ffecb3 amber lighten-4</div>
								<div className="amber lighten-3">#ffe082 amber lighten-3</div>
								<div className="amber lighten-2">#ffd54f amber lighten-2</div>
								<div className="amber lighten-1">#ffca28 amber lighten-1</div>
								<div className="amber">#ffc107 amber</div>
								<div className="amber darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#ffb300 amber darken-1</div>
								<div className="amber darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#ffa000 amber darken-2</div>
								<div className="amber darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#ff8f00 amber darken-3</div>
								<div className="amber darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#ff6f00 amber darken-4</div>
								<div className="amber accent-1">#ffe57f amber accent-1</div>
								<div className="amber accent-2">#ffd740 amber accent-2</div>
								<div className="amber accent-3">#ffc400 amber accent-3</div>
								<div className="amber accent-4">#ffab00 amber accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="orange lighten-5">#fff3e0 orange lighten-5</div>
								<div className="orange lighten-4">#ffe0b2 orange lighten-4</div>
								<div className="orange lighten-3">#ffcc80 orange lighten-3</div>
								<div className="orange lighten-2">#ffb74d orange lighten-2</div>
								<div className="orange lighten-1">#ffa726 orange lighten-1</div>
								<div className="orange">#ff9800 orange</div>
								<div className="orange darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#fb8c00 orange darken-1</div>
								<div className="orange darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#f57c00 orange darken-2</div>
								<div className="orange darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#ef6c00 orange darken-3</div>
								<div className="orange darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#e65100 orange darken-4</div>
								<div className="orange accent-1">#ffd180 orange accent-1</div>
								<div className="orange accent-2">#ffab40 orange accent-2</div>
								<div className="orange accent-3">#ff9100 orange accent-3</div>
								<div className="orange accent-4">#ff6d00 orange accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="deep-orange lighten-5">#fbe9e7 deep-orange lighten-5</div>
								<div className="deep-orange lighten-4">#ffccbc deep-orange lighten-4</div>
								<div className="deep-orange lighten-3">#ffab91 deep-orange lighten-3</div>
								<div className="deep-orange lighten-2">#ff8a65 deep-orange lighten-2</div>
								<div className="deep-orange lighten-1">#ff7043 deep-orange lighten-1</div>
								<div className="deep-orange">#ff5722 deep-orange</div>
								<div className="deep-orange darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#f4511e deep-orange darken-1</div>
								<div className="deep-orange darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#e64a19 deep-orange darken-2</div>
								<div className="deep-orange darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#d84315 deep-orange darken-3</div>
								<div className="deep-orange darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#bf360c deep-orange darken-4</div>
								<div className="deep-orange accent-1">#ff9e80 deep-orange accent-1</div>
								<div className="deep-orange accent-2">#ff6e40 deep-orange accent-2</div>
								<div className="deep-orange accent-3">#ff3d00 deep-orange accent-3</div>
								<div className="deep-orange accent-4">#dd2c00 deep-orange accent-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="brown lighten-5">#efebe9 brown lighten-5</div>
								<div className="brown lighten-4">#d7ccc8 brown lighten-4</div>
								<div className="brown lighten-3">#bcaaa4 brown lighten-3</div>
								<div className="brown lighten-2">#a1887f brown lighten-2</div>
								<div className="brown lighten-1">#8d6e63 brown lighten-1</div>
								<div className="brown">#795548 brown</div>
								<div className="brown darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#6d4c41 brown darken-1</div>
								<div className="brown darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#5d4037 brown darken-2</div>
								<div className="brown darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#4e342e brown darken-3</div>
								<div className="brown darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#3e2723 brown darken-4</div>
							</div>
							<div className="col s12 m6 l4">
								<div className="grey lighten-5">#fafafa grey lighten-5</div>
								<div className="grey lighten-4">#f5f5f5 grey lighten-4</div>
								<div className="grey lighten-3">#eeeeee grey lighten-3</div>
								<div className="grey lighten-2">#e0e0e0 grey lighten-2</div>
								<div className="grey lighten-1">#bdbdbd grey lighten-1</div>
								<div className="grey">#9e9e9e grey</div>
								<div className="grey darken-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#757575 grey darken-1</div>
								<div className="grey darken-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#616161 grey darken-2</div>
								<div className="grey darken-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#424242 grey darken-3</div>
								<div className="grey darken-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>#212121 grey darken-4</div>
							</div>
						</div>
					</div>					
				</main>
			</div>
		);
	}

}

export default App;
