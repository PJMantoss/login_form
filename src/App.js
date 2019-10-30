import React from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Input(props){
		  return (
			  <div className="Input">
				  <input 
					  id={props.id}
					  autoComplete="false"
					  required
					  type={props.type}
					  placeholder={props.placeholder}
				  />	
				  <label htmlFor={props.id}></label>
			  </div>
		  );
  };
  
  class Modal extends React.Component {
	  constructor(props){
		  super(props)
		  this.state = {
			  message: "",
		  }
	  }

	  render(){
		return (
			<div className="Modal">
			  <form 
				onSubmit={this.props.onSubmit}
				className="ModalForm">
				<Input
				  id="name"
				  type="text"
				  placeholder="PJ Mantoss" />
				<Input
				  id="username"
				  type="email"
				  placeholder="joelptoss@gmail.com" />
				<Input
				  id="password"
				  type="password"
				  placeholder="password" />
				<button>
				  Log in <i className="fa fa-fw fa-chevron-right"></i>
				</button>
			  </form>
			</div>
		  );
	  }
  }
  
  class App extends React.Component {
	constructor(props){
	  super(props)
	  this.state = {
		mounted: false
	  }
	  this.handleSubmit = this.handleSubmit.bind(this)
	}
  
	componentDidMount(){
	  this.setState({
		mounted: true
	  });
	}
  
	handleSubmit(e){
	  e.preventDefault();
	  this.setState({
		mounted: false
	  });
	}
  
	render(){
	  let child = ""
  
	  if (this.state.mounted){
		child = (<Modal onSubmit={this.handleSubmit} />)
	  }
	  return (
		<div className="App">
		   <ReactCSSTransitionGroup 
					  transitionName="example"
					  transitionEnterTimeout={500}
					  transitionLeaveTimeout={300}
		   >
						  {child}
			</ReactCSSTransitionGroup>
		</div>
	  );
	}
  }
  
  export default App;