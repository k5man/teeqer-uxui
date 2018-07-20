import BaseComponent from '../base/component';

export default class CardActions extends BaseComponent {

	render() {
		return (
			<div className={`card-action ${this.props.className}`}>
				{this.props.children}
			</div>
		);
	}

}
