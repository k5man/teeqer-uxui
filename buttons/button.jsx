import BaseComponent from '../base/component';
import './style.less';

export default class Button extends BaseComponent {

	getType() {
		return this.props.btnType;
	}

	createClassName(props) {
		return `${this.getType()} 
			${props.large ? 'btn-large' : ''} 
			${!props.noWaves ? 'waves-effect waves-light ' : ''} 
			${props.disabled ? 'disabled' : ''} 
			${props.className}`;
	}

	render() {
		const { props } = this;
		props.className = this.createClassName(props);
		return React.createElement(
			props.element,
			props,
			props.children
		);
	}

}

Button.propTypes = {
	element: PropTypes.string,
	className: PropTypes.string,
	large: PropTypes.boolean,
	noWaves: PropTypes.boolean,
	disabled: PropTypes.boolean,
};

Button.defaultProps = {
	element: 'a',
	className: '',
	large: false,
	noWaves: false,
	disabled: false,
};
