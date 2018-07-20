import InputMask from 'react-input-mask';
import { InputField } from './index';
import BaseInput from './baseInput';

const isValidPhone = (phone, minLength, pfx) => phone.length === (minLength + pfx.length);

/**
 * Input field for phones
 *
 * version 2.0.0
 * ported to uxui lib
 * version 1.0.1
 * + mask is now prop
 * + hint is not required by default
 * using new-ui ux/ui
 */
class PhoneInputField extends BaseInput {
	constructor(props) {
		super(props);

		let { phone } = this.props;
		if (phone === undefined) phone = '';
		phone = this.normalize(phone);

		this.state = {
			phone,
			isValid: isValidPhone(phone, this.props.minLength, this.props.pfx),
		};

		this.handleChange = this.handleChange.bind(this);
	}

	normalize(phone) {
		let p = phone || '';

		if (this.props.pfx && this.props.pfx !== '') {
			if (p.startsWith(this.props.pfx)) {
				p = p.substr(this.props.pfx.length, p.length);
			}
		}

		p = p.replace(/\D/g, '');

		if (this.props.maxLength && p.length >= this.props.maxLength) {
			p = p.substr(0, this.props.maxLength);
		}

		p = this.props.pfx + p;

		return p;
	}

	handleChange(v, inputPhone) {
		const phone = this.normalize(inputPhone);

		const isValid = isValidPhone(phone, this.props.minLength, this.props.pfx);

		this.setState({ phone, isValid });

		this.props.onChange(this, phone, isValid);
	}

	render() {
		return (
			<InputField
				value={this.state.phone}
				errorText={this.state.errorText}
				floatingLabelText={this.props.hint}
				label={this.props.label}
				onChange={(v) => {
					this.handleChange(v, v.target.value);
				}}
				className={this.props.className}
				style={{ fontSize: 16 }}
			>
				<InputMask
					mask={this.props.mask}
					value={this.state.phone}
					maskChar="_"
				/>
			</InputField>
		);
	}

}

PhoneInputField.propTypes = {
	hint: PropTypes.string,
	pfx: PropTypes.string,
	minLength: PropTypes.number,
	maxLength: PropTypes.number,
	phone: PropTypes.string,
	mask: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string,
};
PhoneInputField.defaultProps = {
	phone: '',
	minLength: 10,
	maxLength: undefined,
	mask: '',
	pfx: '',
	hint: '',
	label: 'Phone number',
	className: '',
};
//
export default PhoneInputField;
