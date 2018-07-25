import BaseComponent from '../base/component';
import './style.less';

export default class Teeq extends BaseComponent {

	drawLoader() {
		return (
			<div className="teeq-preloader ">
				<div className={`progress ${this.props.size}`}>
					<div className="indeterminate" />
				</div>
			</div>
		);
	}

	render() {
		return (
			<div
				className={`teeq-block ${this.props.view} ${this.getClassName()}`}
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
	view: PropTypes.string,
};

Teeq.defaultProps = {
	className: '',
	showLoader: false,
	view: 'expanded',
};

