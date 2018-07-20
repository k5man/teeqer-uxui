import BaseComponent from '../base/component';
import './style.less';

export default class Collection extends BaseComponent {

	render() {
		return (
			<ul className={`collection ${this.getClassName()}`} {...this.getCustomProps()}>
				{this.props.children}
			</ul>
		);
	}

}

Collection.propTypes = {
	className: PropTypes.string,
};

Collection.defaultProps = {
	className: '',
};

