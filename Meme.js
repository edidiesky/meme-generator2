import React from 'react'
import Memeform from './Memeform'
import Memedisplay from './Memedisplay'

class Meme extends React.Component {
	constructor() {
		super()
		this.state = {
			toptext: '',
			bottomtext:"",
			imageurl: 'https://i.imgflip.com/2wifvo.jpg',
			imagecontainer:[]
		}
		this.handleform = this.handleform.bind(this)
		this.handlesubmit = this.handlesubmit.bind(this)

	}
	handleform(event) {
		const {name, value} = event.target
		this.setState({
			[name] : value
		})
	}

	handlesubmit(event) {
		event.preventDefault()
		// Down below i tend to create a random number using  from the imagecontainer length
		const randomcolour = Math.floor(Math.random() * this.state.imagecontainer.length)

		const randomimgcontainer = this.state.imagecontainer[randomcolour].url
		console.log(randomimgcontainer)
		this.setState({
			imageurl: randomimgcontainer
		})
	}

	componentDidMount() {
		fetch('https://api.imgflip.com/get_memes')
		.then(response => response.json())
		.then(response => {
			const {memes} = response.data
			console.log(memes)
			this.setState({
				imagecontainer: memes
			})
		})
	}

	render() {
		return (
			<div>
			   <Memeform
			  handlesubmit = {this.handlesubmit}
			  handleform = {this.handleform}
			  data = {this.state}
			/>
			<Memedisplay
			  data = {this.state}
			/>
			</div>
			)
	}
}

export default Meme