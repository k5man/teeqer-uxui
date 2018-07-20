import BaseComponent from '../base/component';
import { Preloader } from '../blocks/preloader/index';
import './style.less';

export default class Card extends BaseComponent {

	drawLoader() {
		return (
			<div className="card-preloader">
				<Preloader colorClass="card-preloader__color" />
			</div>
		);
	}

	render() {
		return (
			<div className={`card ${this.getClassName()}`} {...this.getCustomProps()}>
				{this.props.children}
				{this.props.showLoader && this.drawLoader()}
			</div>
		);
	}

}

Card.propTypes = {
	className: PropTypes.string,
	showLoader: PropTypes.bool,
};

Card.defaultProps = {
	className: '',
	showLoader: false,
};

