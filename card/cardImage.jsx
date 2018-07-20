import BaseComponent from '../base/component';

export default class CardImage extends BaseComponent {

	render() {
		return (
			<div className={`card-image ${this.props.className}`}>
				<img src={this.props.src} alt={this.props.title} />
				{this.props.title && <span className="card-title" >{this.props.title}</span>}
			</div>
		);
	}

}

CardImage.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string.isRequired,
	title: PropTypes.string,
};

CardImage.defaultProps = {
	className: '',
};
