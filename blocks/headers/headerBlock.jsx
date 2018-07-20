import BaseComponent from '../../base/component';
import './style.less';

export default class HeaderBlock extends BaseComponent {

	imagePart() {
		if (!this.props.image) {
			return null;
		}
		return (<img
			src={this.props.image}
			className={`title-block__icon ${this.props.rounded ? 'title-block__icon-rounded' : ''} `}
			alt={this.props.title || this.props.subtitle || ''}
		/>);
	}

	render() {
		return (
			<div className={`title-block ${this.props.className}`}>
				{this.imagePart()}
				<div className="title-block__text">
					{this.props.title && <h3 className="subheading">{this.props.title}</h3>}
					{this.props.subtitle && <span className="subheading-gray">{this.props.subtitle}</span>}
				</div>
			</div>
		);
	}

}

HeaderBlock.propTypes = {
	className: PropTypes.string,
	image: PropTypes.any,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	rounded: PropTypes.bool,
};

HeaderBlock.defaultProps = {
	className: '',
};
