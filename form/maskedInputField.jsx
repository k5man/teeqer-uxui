import MaskedInput, { conformToMask } from 'react-text-mask';
import { emailMask, createNumberMask, createAutoCorrectedDatePipe } from 'text-mask-addons/src/index';
import BaseInput from './baseInput';

export default class MaskedInputField extends BaseInput {

	static conformToMask = conformToMask;

	static textMaskAddons = {
		emailMask,
		createNumberMask,
		createAutoCorrectedDatePipe,
	};

	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
		};
	}

	onFocus() {
		this.setState({
			isActive: true,
		});
	}

	onBlur() {
		this.setState({
			isActive: !!this.props.placeholder,
		});
	}

	render() {
		if (!this.props.id) {
			this.props.id = (Date.now() + Math.random()).toString(25).replace('.', '');
		}
		this.props.type = this.props.type ? this.props.type : 'text';
		const isActive = this.state.isActive || (this.textInput && this.textInput.inputElement && !!this.textInput.inputElement.value) || this.props.value;
		if (this.props.autoCorrectedDatePipe) {
			this.props.pipe = createAutoCorrectedDatePipe(this.props.autoCorrectedDatePipe);
		}
		return (
			<div className={`input-field ${this.props.className}`} >
				<MaskedInput
					onFocus={() => this.onFocus()}
					onBlur={() => this.onBlur()}
					ref={(input) => { this.textInput = input; }}
					className="materialize-textarea"
					{...this.getCustomProps()}
				/>
				{this.props.label ? <label htmlFor={this.props.id} className={isActive ? 'active' : ''} >{this.props.label}</label> : null}
			</div>
		);
	}

}

MaskedInputField.propTypes = {
	className: PropTypes.string,
	mask: PropTypes.string.isRequired,
	guide: PropTypes.bool,
	placeholder: PropTypes.string,
	placeholderChar: PropTypes.string,
	keepCharPositions: PropTypes.bool,
	pipe: PropTypes.func,
	showMask: PropTypes.bool,
};

MaskedInputField.defaultProps = {
	className: '',
	guide: true,
	placeholder: undefined,
	placeholderChar: '_',
	keepCharPositions: false,
	pipe: null,
	showMask: false,
};
