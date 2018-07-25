import BaseComponent from '../base/component';
import './style.less';

export default class Teeq extends BaseComponent {

	drawLoader() {
		return (
			<div className="teeq-preloader ">
				<div className={`progress ${this.props.size} ${this.props.active} ${this.props.className}`}>
					<div className="indeterminate" />
				</div>
			</div>
		);
	}

	render() {
		return (
			<div
				className={`teeq-block ${this.props.expanded ? 'teeq-expanded' : 'teeq-collapsed'} ${this.getClassName()}`}
				{...this.getCustomProps()}
			>
				{this.props.showLoader && this.drawLoader()}
				{this.props.children}
			</div>
		);
	}

}

Teeq.propTypes = {
	className: PropTypes.string,
	showLoader: PropTypes.bool,
	expanded: PropTypes.bool,
};

Teeq.defaultProps = {
	className: '',
	showLoader: false,
	expanded: true,
};

