import BaseComponent from '../../base/component';
import { RaisedButton } from '../../buttons';
import './style.less';

export default class BlockTwoColumns extends BaseComponent {

	render() {
		return (
			<div className={`block-with-columns ${this.props.className}`}>
				<div className="block-left-column">
					<h3>{this.props.counter}</h3>
				</div>
				<div className="block-right-column">
					{this.props.children}
				</div>
			</div>
		);
	}

}

BlockTwoColumns.propTypes = {
	className: PropTypes.string,
	counter: PropTypes.number.isRequired,
	actiontext: PropTypes.string.isRequired,
};

BlockTwoColumns.defaultProps = {
	className: '',
};
