import BaseInput from './baseInput';

export default class CheckboxField extends BaseInput {

	render() {
		if (!this.props.id) {
			this.props.id = (Date.now() + Math.random()).toString(25).replace('.', '');
		}
		return (
			<p className={`radio-field ${this.props.className}`} >
				<input
					type="radio"
					{...this.getCustomProps()}
				/>
				{this.props.label ? <label htmlFor={this.props.id} >{this.props.label}</label> : null}
			</p>
		);
	}

}
