import React from 'react';
import logo from './colorMe-logo.png';
import upload from './upload.png';
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color';


import './App.css';
export default class UploadPhotoScreen extends React.Component{
	constructor(){
		super();
		this.state = {
	        selectedFile: null,
	        base64:"",
	        loaded:false,
	        coloredResponse:"",
	        color:{
	        	  r: '0',
			      g: '0',
			      b: '0',
			      a: '1',
	        },
	        picWithoutFilter:"",
	        filterColor:"#000000",
	        alpha:1,
	        displayColorPicker: false
	      }
	      this.canvas = React.createRef(); 
	      this.onClickHandler = this.onClickHandler.bind(this)
	      this.showResult=this.showResult.bind(this)
	      this.onChangeHandler=this.onChangeHandler.bind(this)

	      this.styles = reactCSS({
		      'default': {
		        color: {
		          width: '36px',
		          height: '14px',
		          borderRadius: '2px',
		          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
		        },
		        swatch: {
		          padding: '5px',
		          background: '#fff',
		          borderRadius: '1px',
		          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
		          display: 'inline-block',
		          cursor: 'pointer',
		          marginLeft:'10px'
		        },
		        popover: {
		          position: 'absolute',
		          zIndex: '2',
		          top:'50%',
		        },
		        cover: {
		          position: 'fixed',
		          top: '0px',
		          right: '0px',
		          bottom: '0px',
		          left: '0px',
		        },
		      },
    });
	}
	componentDidUpdate(prev, curr){
		 this.styles = reactCSS({
		      'default': {
		        color: {
		          width: '36px',
		          height: '14px',
		          borderRadius: '2px',
		          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
		        },
		        swatch: {
		          padding: '5px',
		          background: '#fff',
		          borderRadius: '1px',
		          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
		          display: 'inline-block',
		          cursor: 'pointer',
		          marginLeft:'10px'
		        },
		        popover: {
		          position: 'absolute',
		          zIndex: '2',
		          top:'50%',
		        },
		        cover: {
		          position: 'fixed',
		          top: '0px',
		          right: '0px',
		          bottom: '0px',
		          left: '0px',
		        },
		      },
    });
	}
	
	onChangeHandler=event=>{
		this.setState({
		      selectedFile: event.target.files[0],
		      loaded:false
		    })
		
	} 
	
	handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };
     handleChange = (color) => {
	    this.setState({ 
	    				
	    				color:color.rgb,
	    				alpha: color.rgb.a,
	    				filterColor:color.hex.substring(1),
	     });
	  };


	onClickHandler = () => {
	 
	 	let url= 'http://0.0.0.0:5000/color/photo';
	 	const formData  = new FormData();

  
     	formData.append('image', this.state.base64);
    	var pointer=this;
		fetch(url, {
		    method: 'POST',
		    body: formData
		  })
	      .then(response => {
	      	 return response.text();
			  }).then(function(data) {
			  
				   pointer.setState({	
				      	coloredResponse: data,
				      	picWithoutFilter:data,
				      })
			pointer.showResult();
		  })
	      .catch(er=>{
	      	console.log(er)
	      })
	      
			  
		 
	}
	addFilter = () => {
		let url= 'http://0.0.0.0:5000/filter';
	 	const formData  = new FormData();

  
     	formData.append('image', this.state.coloredResponse);
     	formData.append('transparency', this.state.alpha);
     	formData.append('color', this.state.filterColor)
    	var pointer=this;
		fetch(url, {
		    method: 'POST',
		    body: formData
		  })
	      .then(response => {
	      	 return response.text();
			  }).then(function(data) {
			  
				   pointer.setState({
			      		coloredResponse: data
			       })
			pointer.showResult();
		  })
	      .catch(er=>{
	      	console.log(er)
	      })
	      
	}
	removeFilter = async()=>{
		await this.setState({
			coloredResponse:this.state.picWithoutFilter
		})
		this.showResult();
	}

	showResult(){
		
		 this.ctx = this.canvas.current.getContext('2d');
		this.ctx.clearRect(0, 0, 512, 512);
		var img = new Image;
				 
		img.src="data:image/jpeg;base64,"+this.state.coloredResponse;
		const pointer = this;
		img.onload = function(){

			pointer.ctx.drawImage(img, 0, 0);
		}
		
	}
	showResultPannel(){
		if(this.state.coloredResponse!=""){
			return(
				<div className="resultPannel">
					<p style={{padding:0, margin:5, display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}
    >
    Wybierz kolor filtra   
					
			        <div style={ this.styles.swatch } onClick={ this.handleClick }>
			          <div style={ this.styles.color } />
			        </div>
			        { this.state.displayColorPicker ? <div style={ this.styles.popover }>
			          <div style={ this.styles.cover } onClick={ this.handleClose }/>
			          <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
			        </div> : null }

			        <button type="button" className="App-button sm-btn" onClick={this.removeFilter}>Usuń filtr</button> 
					
			      </p>
					<div style={{display:'flex', flexDirection:'row'}}>
					<a href={"data:image/jpeg;base64,"+this.state.coloredResponse} download className="App-button" >
						Pobierz rezultat
					</a> 
					<button type="button" className="App-button" onClick={this.addFilter}>Dodaj filtr</button> 
						
					</div>

					</div>
				)
		}
	}
	render(){
		
		if(this.state.selectedFile!=null && this.state.loaded==false){
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			var img = new Image;
				 
			 img.src = URL.createObjectURL(this.state.selectedFile);
			 const pointer = this;
			 img.onload = async function() {

			    canvas.width = img.width;
			    canvas.height = img.height;
				ctx.drawImage(img, 0, 0);
				pointer.setState({
					base64:canvas.toDataURL("image/jpeg").split(";base64,")[1],
					loaded:true
				})
			}
		}
		
		return(

			<div>
				<div className="App">

			        <div className="App-left-side">
				        <div className="left-side-content">
				       	<a href="/" ><img src={logo} className="left-side-logo" /></a>
					        <p>Wybierz czarnobiałe zdjęcie, które chcesz pokolorować</p>
					        <label className="custom-file-upload">
					        <p>
					        {this.state.selectedFile==null? "Wybierz zdjęcie" : this.state.selectedFile.name}
					        </p>
					       <br/>
					        	<img src={upload} style={{width:'30px'}}/>
					       		<input type="file" name="file" className="App-file-input" onChange={this.onChangeHandler}/><br/>
							</label>
						
								<button type="button" className="App-button-light" onClick={this.onClickHandler}>Upload</button> 
							
						</div>		
				     </div>
					 <div className="App-right-side">
					 <canvas ref={this.canvas} width={512} height={512}></canvas>
					      {this.showResultPannel()}
			        </div>
			     
			    </div>
		    </div>
			)
	}

}