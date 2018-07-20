import BaseComponent from '../base/component';

export default class Icon extends BaseComponent {

	getName() {
		return 'add';
	}

	render() {
		return (
			<i
				className={`material-icons ${this.props.className}`}
				{...this.getCustomProps()}>{this.getName()}</i>
		);
	}

}
