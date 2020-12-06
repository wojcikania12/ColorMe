import React from 'react';

export default class Upload extends React.Component{
	constructor(){
		super();
		this.state = {
	        selectedFile: null
	      }
	}


	onChangeHandler=event=>{
		
		this.props.setFile(event.target.files[0])

	}
	onClickHandler = () => {
	    const data = new FormData() 
	    data.append('file', this.state.selectedFile)
	}
	render(){
		return(
				<div>
				<h1>here is upload area</h1>

				<input type="file" name="file" onChange={this.onChangeHandler}/><br/>
				<button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
				</div>
			)
	}
}