import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ChatRoom extends Component {
	
	constructor() {
		super();
		this.state = {
			message: '',
			messages: [
				/*{id: 0, text: 'text1'},
				{id: 1, text: 'text2'},
				{id: 2, text: 'text3'}*/
			]
		}
	}

	componentDidMount() {
		window.firebase.database().ref('messages/').on('value', snap => {
			const currentMessages = snap.val();
			
			if (currentMessages != null) {
				this.setState({
					messages: currentMessages
				});
			}
		});
	}

	updateMessage(e) {
		this.setState({message: e.target.value});
		console.log(this.state.message);
	}

	handleSubmit(e) {
		e.preventDefault();
		
		//const list = this.state.messages;
		const newMessage = {
			id: this.state.messages.length,
			text: this.state.message
		}

		//list.push(newMessage);
		//this.setState({messages: list});
		window.firebase.database().ref("messages/" + newMessage.id)
			.set(newMessage);
		this.setState({message: ''});
	}

	render() {

		const { messages } = this.state;
		
		const messagesList = messages.map(message => {
			return <li key={message.id}>{message.text}</li>
		});

		return(
			<div>
				<ul>
					{messagesList}
				</ul>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<TextField
					 type="text"
					 onChange={this.updateMessage.bind(this)}
					 value={this.state.message}
					/>
					<Button type="submit">Send</Button>
				</form>
			</div>
		);
	}
}

export default ChatRoom;