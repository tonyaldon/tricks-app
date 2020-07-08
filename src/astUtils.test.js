import React from 'react';
import { render } from '@testing-library/react';
import { parse } from 'orga';
import { astGoToNode, astMakeListItemBlock,
         astMakeTrick, astNumberOfTricksTopSection,
				 astMakeTricks } from './astUtils.js';

describe('astGoToNode', () => {
  const content = `
* Headline 1
** Headline 1.1
*** Headline 1.1.1
* Headline 2
** Headline 2.1
*** Headline 2.1.1`;

  const ast = parse(content);
  it('goes to the headline: Headline 1', () => {
    expect(astGoToNode(ast,[0,0,0]).value).toBe("Headline 1");
  })
  it('goes to the headline: Headline 2', () => {
    expect(astGoToNode(ast,[1,0,0]).value).toBe("Headline 2");
  })
  it('goes to the headline: Headline 1.1.1', () => {
    expect(astGoToNode(ast,[0,1,1,0,0]).value).toBe("Headline 1.1.1");
  })
})

describe('astMakeListItemBlock', () => {
  const content = `
- item 1
- item 2
- item 3
#+BEGIN_SRC bash
some code 1
#+END_SRC
- item 4
#+BEGIN_SRC bash
some code 2
#+END_SRC
`;
  const ast = parse(content);
  const astList = ast.children;
  const listItemBlock = astMakeListItemBlock(astList);
  it('makes a list of 6 elements', () => {
    expect(listItemBlock.length).toBe(6);
  })
  it('first element has type "list.item"', () => {
    expect(listItemBlock[0].type).toBe('list.item');
  })
  it('first element has the value "item 1"', () => {
    expect(listItemBlock[0].children[0].value).toBe('item 1');
  })
  it('fourth element has type "block"', () => {
    expect(listItemBlock[3].type).toBe('block');
  })
})

describe('astMakeTrick', () => {
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

  const ast = parse(content);

  it('makes trick "Headline 1.1.1"', () => {
    const astTopSection = ast.children[0];
    const trickNumber = 1;
    const trick = astMakeTrick(astTopSection, trickNumber);
    const _trick = {
      headline_1 : "Headline 1",
      headline_2 : "Headline 1.1",
      headline_3 : "Headline 1.1.1"
    };
    expect(trick).toMatchObject(_trick);
    expect(trick.list.length).toBe(3);
  })
  it('makes trick "Headline 1.1.2"', () => {
    const astTopSection = ast.children[0];
    const trickNumber = 2;
    const trick = astMakeTrick(astTopSection, trickNumber);
    const _trick = {
      headline_1 : "Headline 1",
      headline_2 : "Headline 1.1",
      headline_3 : "Headline 1.1.2"
    };
    expect(trick).toMatchObject(_trick);
    expect(trick.list.length).toBe(2);
  })
  it('makes trick "Headline 2.1.1"', () => {
    const astTopSection = ast.children[1];
    const trickNumber = 1;
    const trick = astMakeTrick(astTopSection, trickNumber);
    const _trick = {
      headline_1 : "Headline 2",
      headline_2 : "Headline 2.1",
      headline_3 : "Headline 2.1.1"
    };
    expect(trick).toMatchObject(_trick);
    expect(trick.list.length).toBe(4);
  })
})

describe('astMakeTricks', () => {
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

  const ast = parse(content);

	it('returns the number of tricks in the first top section "Headline 1"', () => {
    const astTopSection = ast.children[0];
    expect(astNumberOfTricksTopSection(astTopSection)).toBe(2);
  })
  it('returns the number of tricks in the AST', () => {
    const tricks = astMakeTricks(ast);
    expect(tricks.length).toBe(3);
  })
  it('returns the name list of the tricks in the AST', () => {
    const tricks = astMakeTricks(ast);
    const trickNames = tricks.map((trick) => trick.headline_3);
    const _trickNames = ['Headline 1.1.1', 'Headline 1.1.2', 'Headline 2.1.1'];
    expect(trickNames).toMatchObject(_trickNames);
  })
})
