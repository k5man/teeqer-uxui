import Phone from 'react-phone-number-input';
import 'react-phone-number-input/rrui.css';
import 'react-phone-number-input/style.css';
import BaseInput from './baseInput';
import './phone-input.less';

class PhoneInputField extends BaseInput {

	constructor(props) {
		super(props);
		this.state = {
			phone: props.value || '',
		};
	}

	getCustomProps() {
		const props = super.getCustomProps();
		return Object.keys(props).reduce((result, propName) => {
			const excludedNames = ['onChange'];
			if (excludedNames.indexOf(propName) < 0) {
				result[propName] = props[propName];
			}
			return result;
		}, {});
	}

	onChange(phone) {
		this.setState({ phone });
	}

	render() {
		if (!this.props.id) {
			this.props.id = (Date.now() + Math.random()).toString(25).replace('.', '');
		}
		return (
			<div className={`input-field ${this.props.className}`} >
				<Phone
					onChange={phone => this.onChange(phone)}
					value={this.state.phone}
					{...this.getCustomProps()}
				/>
				{this.props.label ? <label htmlFor={this.props.id} className="active">{this.props.label}</label> : null}
			</div>
		);
	}
}

PhoneInputField.propTypes = {
	className: PropTypes.string,
};

PhoneInputField.defaultProps = {
	className: '',
};

export default PhoneInputField;
