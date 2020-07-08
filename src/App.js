import React from 'react';
import logo from './logo.svg';
import './App.css';
import { astMakeTrick, astMakeTricks } from './astUtils.js'

function Header() {
  return (
    <header>
      <h1>Tricks by Tony Aldon</h1>
    </header>
  );
}

function App(props) {
  const ast = props.ast;
  const tricks = astMakeTricks(ast);
	const trickList = tricks.map((trick,index) =>
		<Trick
			key={index}
			trick={trick}
		/>);
	return (
    <div className="App">
      <Header />
      <ul>{trickList}</ul>
    </div>
  );
}

function Trick(props) {
  return (
    <div>
      <p>{props.trick.headline_3}</p>
    </div>
  );
}

export { App, Header, Trick };
