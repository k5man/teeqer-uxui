import BaseComponent from '../../base/component';
import './style.less';

export default class HeaderBlock extends BaseComponent {

	render() {
		return (
			<div className={`text-notification-block ${this.props.className}`}>
				{this.props.text && <p className="message">{this.props.text}</p>}
			</div>
		);
	}

}

HeaderBlock.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	rounded: PropTypes.bool,
};

HeaderBlock.defaultProps = {
	className: '',
};
