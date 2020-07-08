import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import { App, Header, Trick } from './App';
import { parse } from 'orga';
import { astMakeTrick } from './astUtils.js'

it('renders header content', () => {
  const { getByText } = render(<Header />);
  const headerContent = getByText(/Tricks by Tony Aldon/i);
  expect(headerContent).toBeInTheDocument();
});

it('renders "Trick" component', () => {
  const content = `
* Headline 1
** Headline 1.1
*** Headline 1.1.1
- item 1
- item 2
#+BEGIN_SRC bash
some code 1
#+END_SRC
`;

  const ast = parse(content);
  const astTopSection = ast.children[0];
  const trickNumber = 1;
  const trick = astMakeTrick(astTopSection, trickNumber);
  const { getByText } = render(<Trick trick={trick} />);
  const trickText = getByText(/Headline 1.1.1/i);
  expect(trickText).toBeInTheDocument();
});


describe('App', () => {
  const content = `
* Headline 1
** Headline 1.1
*** Headline 1.1.1
- item 1
- item 2
#+BEGIN_SRC bash
some code 1
#+END_SRC
*** Headline 1.1.2
- item 1
- item 2
* Headline 2
** Headline 2.1
*** Headline 2.1.1
- item 1
- item 2
- item 3
#+BEGIN_SRC bash
some code 2
#+END_SRC`;


  it('renders the 3 tricks of the content', () => {
    const ast = parse(content);
    const { getByText } = render(
      <App ast={ast} />
    );
		screen.debug()
    const trick_1 = getByText(/Headline 1.1.1/i);
    const trick_2 = getByText(/Headline 1.1.2/i);
    const trick_3 = getByText(/Headline 2.1.1/i);
    expect(trick_1).toBeInTheDocument();
    expect(trick_2).toBeInTheDocument();
    expect(trick_3).toBeInTheDocument();
  });
})
