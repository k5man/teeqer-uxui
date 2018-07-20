import BaseInput from './baseInput';


export default class IncrimentField extends BaseInput {
			  
	render() {
		return (
			<p class="range-field">
				<input 
					type="range"
					{...this.getCustomProps()}
				/>
			</p>
		);
	}

}
