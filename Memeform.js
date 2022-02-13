import React from 'react'

function Memeform(props) {
	return(
		 <form className = 'form' onSubmit = {props.handlesubmit}>
		   <button >Gen</button>
		   <input
		   name = 'toptext'
		   type = 'text'
		   value = {props.data.toptext}
		   placeholder = 'Top text'
		   onChange = {props.handleform}
		   />

		   <input
		   name = 'bottomtext'
		   type = 'text'
		   value = {props.data.bottomtext}
		   placeholder = 'Bottom text'
		   onChange = {props.handleform}
		   />
		 </form>
		)
}

export default Memeform