import { Carousel } from 'react-responsive-carousel';
import BaseComponent from '../../base/component';
import './style.less';

/**
 *
 * BlockImages
 *
 * v 0.2.0
 * using react-responsive-carousel
 * Note: styles are included with style in index.ejs
 */
export default class BlockImages extends BaseComponent {

	renderImages() {
		let idx = 0;
		const r = this.props.images.map((x) => (
			<div>
				<img src={x.img} alt="" key={idx++} />
			</div>
		));
		return r;
	}

	render() {
		return (
			<div className={`block-image ${this.props.className}`}>
				<Carousel
					showIndicators
					showArrows={false}
					showThumbs={false}
					showStatus={false}
					onClickItem={
						() => {
							this.props.onClickItem();
						}
					}
				>
					{this.renderImages()}
				</Carousel>
			</div>
		);
	}

}

BlockImages.propTypes = {
	onClickItem: PropTypes.func,
	images: PropTypes.array,
};

BlockImages.defaultProps = {
	onClickItem: () => {},
	images: [],
};
