import BaseComponent from '../../base/component';

export default class SVGIcon extends BaseComponent{
	render() {
		const size = this.props.size;
		const color = this.props.color;
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox={this.props.viewBox}
			>
				<path
					fill={color}
					d={this.props.path}
				/>
			</svg>
		);
	}
}

SVGIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
	path: PropTypes.string.isRequired,
	viewBox: PropTypes.string,
};
SVGIcon.defaultProps = {
	size: 32,
	color: '0',
	viewBox: '0 0 24 24',
};
