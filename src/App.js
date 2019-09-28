import React from 'react';
import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
