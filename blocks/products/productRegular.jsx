import BaseComponent from '../../base/component';
import { BlockImage } from '../images';
import { CardContent } from '../../card';
import './style.less';

export default class ProductRegularBlock extends BaseComponent {

	imagePart() {
		if (!this.props.image) {
			return null;
		}
		return (
			<BlockImage
				image={this.props.image}
				className="product-block__image"
				description={this.props.name || this.props.description || ''}
			/>
		);
	}

	render() {
		return (
			<div className={`product-block-regular ${this.props.className}`}>
				{this.imagePart()}
				<CardContent>
					{this.props.name && <p className="title">{this.props.name}</p>}
					{this.props.price && <p className="subheading-gray">{this.props.price}</p>}
					{this.props.description && <p>{this.props.description}</p>}
				</CardContent>
			</div>
		);
	}

}

ProductRegularBlock.propTypes = {
	className: PropTypes.string,
	image: PropTypes.any,
	name: PropTypes.string,
	description: PropTypes.string,
};

ProductRegularBlock.defaultProps = {
	className: '',
};
