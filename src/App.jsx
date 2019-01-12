import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ChatRoom from './components/ChatRoom';

class App extends Component {
	render() {
		return(
			<div className='App'>
				<AppBar position='static' color='default' >
					<ToolBar>
						<Typography type='title' color='inherit'>
							Chat React
						</Typography>
					</ToolBar>
				</AppBar>
				<ChatRoom/>
			</div>
		);
	}
}

export default App;