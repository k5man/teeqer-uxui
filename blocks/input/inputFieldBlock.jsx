import BaseComponent from '../../base/component';
import { CardHeader } from '../../card';
import { Icon } from '../../icons';
import './style.less';

/**
 *
 * Should specify input form field
 * v 0.1.0
 */
export default class InputFieldBlock extends BaseComponent {

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}

}

InputFieldBlock.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string,
};

InputFieldBlock.defaultProps = {
	icon: '',
	title: '',
};
