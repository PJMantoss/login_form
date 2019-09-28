import React from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Input(props){
		return (
			<div className="Input">
				<input 
					id={this.props.id}
					autoComplete="false"
					required
					type={this.props.type}
					placeholder={this.props.placeholder}
				/>	
				<label htmlFor={this.props.id}></label>
			</div>
		);
};

function Modal(props){
  return (
    <div className="Modal">
      <form 
        onSubmit={this.props.onSubmit}
        className="ModalForm">
        <Input
          id="name"
          type="text"
          placeholder="Jack-Edward Oliver" />
        <Input
          id="username"
          type="email"
          placeholder="mrjackolai@gmail.com" />
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

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      mounted: false
    }
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
