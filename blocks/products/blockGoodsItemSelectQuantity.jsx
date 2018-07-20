import BaseComponent from '../../base/component';
import { FlatButton, RaisedButton } from '../../buttons';
import './style.less';
import '../../assets/css/materialize.less';

/**
 * BlockGoodsItemSelectQuantity
 *
 * 0.3.0
 */
export default class BlockGoodsItemSelectQuantity extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = {
			current: this.getCurrent(this.props),
			productId: this.props.productId,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.current !== nextProps.current) {
			this.setState({ current: this.getCurrent(nextProps) });
		}
	}

	getCurrent(props) {
		return (Number.isNaN(props.current) ? 0 : props.current);
	}

	setValue(newValue) {
		this.props.onChange(newValue);
		this.setState({ current: newValue });
	}

	renderButtons(totalBtns, curValue, selectedClass, unselectedClass) {
		const r = [];
		for (let i = 0; i < totalBtns; i++) {
			if (i === curValue) {
				r.push(<RaisedButton className={selectedClass} onClick={() => (this.setValue(i))}>{i}</RaisedButton>);
			} else {
				r.push(<FlatButton className={unselectedClass} onClick={() => (this.setValue(i))}>{i}</FlatButton>);
			}
		}
		return r;
	}

	render() {
		return (
			<div className={`block-goods ${this.props.className}`}>
				{this.renderButtons(this.props.max + 1, this.state.current, this.props.selectedClass, this.props.unselectedClass)}
			</div>
		);
	}

}

BlockGoodsItemSelectQuantity.propTypes = {
	onChange: PropTypes.function,
	max: PropTypes.number,
	current: PropTypes.number,
	selectedClass: PropTypes.string,
	unselectedClass: PropTypes.string,
};

BlockGoodsItemSelectQuantity.defaultProps = {
	onChange: () => {},
	max: 4,
	current: 0,
	selectedClass: '',
	unselectedClass: '',
};
