import BaseComponent from '../../base/component';
import './style.less';

export default class ImageBlock extends BaseComponent {

	imagePart() {
		if (!this.props.image) {
			return null;
		}
		return (<img
			src={this.props.image}
			alt={this.props.description || ''}
		/>);
	}

	render() {
		return (
			<div className={`block-image ${this.props.className}`}>
				{this.imagePart()}
			</div>
		);
	}

}

ImageBlock.propTypes = {
	className: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.any,
};

ImageBlock.defaultProps = {
	className: '',
	description: '',
};
