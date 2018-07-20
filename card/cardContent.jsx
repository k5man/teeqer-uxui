import BaseComponent from '../base/component';

export default class CardContent extends BaseComponent {

	render() {
		return (
			<div className={`card-content ${this.props.className}`}>
				{this.props.children}
			</div>
		);
	}

}
