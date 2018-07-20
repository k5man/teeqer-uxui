import BaseComponent from '../base/component';

export default class CardTitle extends BaseComponent {

	getContextClasses() {
		let classes = '';
		classes += this.props.sideTitle ? 'has-sideTitle ' : '';
		classes += this.props.title ? 'has-title ' : '';
		classes += this.props.icon ? 'has-icon ' : '';
		return classes;
	}

	render() {
		return (
			<div className={`card-title ${this.props.className} ${this.getContextClasses()}`}>
				{this.props.icon}
				{this.props.title && <span className="title-left">{this.props.title}</span>}
				{this.props.sideTitle && <span className="title-right">{this.props.sideTitle}</span>}
			</div>
		);
	}

}

CardTitle.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.string,
	title: PropTypes.string,
	sideTitle: PropTypes.string,
};

CardTitle.defaultProps = {
	className: '',
};
