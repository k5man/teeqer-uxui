import BaseComponent from '../../base/component';
import { Icon } from '../../icons';
import './style.less';

export default class Snackbar extends BaseComponent {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ open: this.props.open });
		}, 500);
	}

	hide() {
		this.setState({ open: false });
	}

	render() {
		if (this.state.open && !this.timer) {
			if (this.props.delay > 0) {
				this.timer = setTimeout(() => {
					this.setState({
						open: false,
					});
				}, this.props.delay);
			}
		} else {
			clearTimeout(this.timer);
			this.timer = false;
		}
		return (
			<div className={`snackbar ${this.props.className} ${this.state.open ? 'snackbar-open' : ''}`}>
				<div className="snackbar-inner">
					<div className="snackbar-message">{this.props.message}</div>
					{!!this.props.button && <a href="#/" onClick={() => this.props.button.action()}>{this.props.button.text}</a>}
					<a href="#/" onClick={() => this.hide()} className="snackbar-close"><Icon name="close" /></a>
				</div>
			</div>
		);
	}

}

Snackbar.propTypes = {
	className: PropTypes.string,
	message: PropTypes.string,
	delay: PropTypes.number,
	button: {
		text: PropTypes.string,
		action: PropTypes.func,
	},
	open: PropTypes.bool,
};

Snackbar.defaultProps = {
	className: '',
	delay: 5000,
};
