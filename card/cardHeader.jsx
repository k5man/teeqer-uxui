import BaseComponent from '../base/component';
import './style.less';

export default class CardHeader extends BaseComponent {

	render() {
		return (
			<div className={`card-header ${this.getClassName()}`}>
				{this.props.children}
			</div>
		);
	}

}

CardHeader.propTypes = {
	className: PropTypes.string,
};

CardHeader.defaultProps = {
	className: '',
};

