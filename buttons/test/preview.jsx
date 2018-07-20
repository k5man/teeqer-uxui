import { RaisedButton, FlatButton, FloatingButton } from '../index';

export default {
	title: 'Buttons',
	blocks: [
		{
			title: 'RaisedButton',
			text: `<RaisedButton>RaisedButton</RaisedButton>`,
			component: () => {
				return (<RaisedButton>RaisedButton</RaisedButton>);
			},
		},
		{
			title: 'FlatButton',
			text: `<FlatButton>FlatButton</FlatButton>`,
			component: () => {
				return (<FlatButton>FlatButton</FlatButton>);
			},
		},
		{
			title: 'FloatingButton',
			text: `<FloatingButton><i className="material-icons">add</i></FloatingButton>`,
			component: () => {
				return (<FloatingButton><i className="material-icons">add</i></FloatingButton>);
			},
		},
	],
};

