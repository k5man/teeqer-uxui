import BaseComponent from '../../base/component';
import './style.less';

export default class Tabs extends BaseComponent {

	render() {
		return (
			<div className="row tabs-wrapper">
				<div className="col s12">
					<ul className={`tabs ${this.props.className}`}>
						{this.props.children}
					</ul>
				</div>
			</div>
		);
	}

}

Tabs.propTypes = {
	className: PropTypes.string,
};

Tabs.defaultProps = {
	className: '',
};
