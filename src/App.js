import React from 'react'
import logo from './logo.svg'
import './App.css'
import { astMakeTricks, MarkupOrLink } from './astUtils.js'

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

function Block(props) {
  const language = props.block.params[0];
  const code = props.block.value;
  return (
    <pre>
      <code className={language}>{code}</code>
    </pre>
  );
}

function Paragraph(props) {
	const paragraphList = props.paragraph;
	const paragraph = paragraphList.map((node,index) =>
		<MarkupOrLink key={index} node={node} />);
	return (
		<div>{paragraph}</div>
	);
}

export { App, Header, Trick, Block, Paragraph }
