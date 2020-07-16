import React from 'react'
import logo from './logo.svg'
import './App.scss'
import { astMakeTricks, MarkupOrLink } from './astUtils.js'
import { Collapse } from 'react-collapse'

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

class Trick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpened: false};
  }

  handleClick = () => {
    this.setState({isOpened: !this.state.isOpened})
  }

  render () {
    const title = this.props.trick.headline_3;
    const nodeList = this.props.trick.list;
    const items = nodeList.map((node,index) => {
      if (node.type === 'list.item') {
        return (
          <Paragraph
            key={index}
            paragraph={node.children}
          />
        );
      } else {
        return (
          <Block
            key={index}
            block={node}
          />
        );
      }
    });
    return (
      <div className="trick">
        <div className="trick-button-container">
          <button
            data-testid="trick-title"
            onClick={this.handleClick}
            type="button"
            className="trick-button"
          >
            {title}
          </button>
        </div>
        <Collapse
          isOpened={this.state.isOpened}
          theme={{collapse: 'ReactCollapse--collapse',
                  content: 'content trick-content ReactCollapse--content'}}
        >
          <ul>{items}</ul>
        </Collapse>
      </div>
    );
  }
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
