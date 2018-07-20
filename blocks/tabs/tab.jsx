import BaseComponent from '../../base/component';
import './style.less';

export default class Tab extends BaseComponent {

	render() {
		return (
			<li className={`tab ${this.props.className}`}>
				<a href="#/" {...this.getCustomProps()} className={this.props.active ? 'active' : ''}>
					{this.props.icon}
					{this.props.title}
				</a>
			</li>
		);
	}

}

Tab.propTypes = {
	className: PropTypes.string,
	active: PropTypes.bool,
	title: PropTypes.string.isRequired,
};

Tab.defaultProps = {
	className: '',
	active: false,
};
