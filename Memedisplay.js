import React from 'react'

function Memedisplay(props) {
	return(
		<div className = 'Memedisplay'>
		   <img
		     src = {props.data.imageurl}
		     alt = ''
		   />
		   <h1 className= 'toptext' >{props.data.toptext}</h1>
		   <h1 className= 'bottomtext'>{props.data.bottomtext}</h1>

		</div>
		)
}

export default Memedisplay