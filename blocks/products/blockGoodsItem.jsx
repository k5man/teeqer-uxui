import BaseComponent from '../base/component';
import './style.less';

export default class BlockGoodsItem extends BaseComponent {

	render() {
		return (
			<div className={`block-goods ${this.props.className}`}>
				<div className={`product-1 ${this.props.className}`}>
					<img src={this.props.productimage} alt={this.props.producttitle} className="product-image " />
					<p className="headline">{`${this.props.producttitle}`}</p>
					<p className="subheading-gray">
						{`${this.props.productsubtitle}`}
					</p>
				</div>
			</div>
		);
	}

}

BlockGoodsItem.propTypes = {
	productimage: PropTypes.string.isRequired,
	producttitle: PropTypes.string,
	productsubtitle: PropTypes.string,
};

BlockGoodsItem.defaultProps = {
	productimage: '',
	producttitle: '',
	productsubtitle: '',
};
