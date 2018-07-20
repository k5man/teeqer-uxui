import BaseComponent from '../../base/component';
import './style.less';

export default class Preloader extends BaseComponent {

	render() {
		const colorStyle = {};
		if (this.props.color) {
			colorStyle['border-color'] = this.props.color;
		}
		return (
			<div className={`preloader-wrapper ${this.props.size} ${this.props.active} ${this.props.className}`}>
				<div className={`spinner-layer ${this.props.colorClass}`} style={colorStyle}>
					<div className="circle-clipper left"><div className="circle" /></div>
					<div className="gap-patch"><div className="circle" /></div>
					<div className="circle-clipper right"><div className="circle" /></div>
				</div>
			</div>
		);
	}

}

Preloader.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string,
	active: PropTypes.string,
	color: PropTypes.string,
	colorClass: PropTypes.string,
};

Preloader.defaultProps = {
	className: '',
	size: '',
	active: 'active',
	colorClass: '',
	color: null,
};
