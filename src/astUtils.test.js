import React from "react";
import { render } from "@testing-library/react";
import { parse } from "orga";
import {
  astGoToNode,
  astMakeListItemBlock,
  astMakeTrick,
  astMakeTricks,
  MarkupOrLink,
} from "./astUtils.js";

describe("astGoToNode", () => {
  const content = `
* Headline 1
** Headline 1.1
*** Headline 1.1.1
** Headline 1.2
*** Headline 1.2.1
* Headline 2
** Headline 2.1
*** Headline 2.1.1`;

  const ast = parse(content);
  it("goes to the headline: Headline 1", () => {
    expect(astGoToNode(ast, [0, 0, 0]).value).toBe("Headline 1");
  });
  it("goes to the headline: Headline 2", () => {
    expect(astGoToNode(ast, [1, 0, 0]).value).toBe("Headline 2");
  });
  it("goes to the headline: Headline 1.1", () => {
    expect(astGoToNode(ast, [0, 1, 0, 0]).value).toBe("Headline 1.1");
  });
  it("goes to the headline: Headline 1.2", () => {
    expect(astGoToNode(ast, [0, 2, 0, 0]).value).toBe("Headline 1.2");
  });
  it("goes to the headline: Headline 1.1.1", () => {
    expect(astGoToNode(ast, [0, 1, 1, 0, 0]).value).toBe("Headline 1.1.1");
  });
  it("goes to the headline: Headline 2.1.1", () => {
    expect(astGoToNode(ast, [1, 1, 1, 0, 0]).value).toBe("Headline 2.1.1");
  });
});

describe("astMakeListItemBlock", () => {
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
  it("makes a list of 6 elements", () => {
    expect(listItemBlock.length).toBe(6);
  });
  it('first element has type "list.item"', () => {
    expect(listItemBlock[0].type).toBe("list.item");
  });
  it('first element has the value "item 1"', () => {
    expect(listItemBlock[0].children[0].value).toBe("item 1");
  });
  it('fourth element has type "block"', () => {
    expect(listItemBlock[3].type).toBe("block");
  });
});

describe("astMakeTrick", () => {
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
#+END_SRC
** Headline 2.2
*** Headline 2.2.1
- item 1`;

  const ast = parse(content);

  it('makes trick "Headline 1.1.1"', () => {
    const astTopSection = ast.children[0];
    const trickIndex = [1,1];
    const trick = astMakeTrick(astTopSection, trickIndex);
    const _trick = {
      headline_1: "Headline 1",
      headline_2: "Headline 1.1",
      headline_3: "Headline 1.1.1",
    };
    expect(trick).toMatchObject(_trick);
    expect(trick.list.length).toBe(3);
  });
  it('makes trick "Headline 1.1.2"', () => {
    const astTopSection = ast.children[0];
    const trickIndex = [1,2];
    const trick = astMakeTrick(astTopSection, trickIndex);
    const _trick = {
      headline_1: "Headline 1",
      headline_2: "Headline 1.1",
      headline_3: "Headline 1.1.2",
    };
    expect(trick).toMatchObject(_trick);
    expect(trick.list.length).toBe(2);
  });
  it('makes trick "Headline 2.1.1"', () => {
    const astTopSection = ast.children[1];
    const trickIndex = [1,1];
    const trick = astMakeTrick(astTopSection, trickIndex);
    const _trick = {
      headline_1: "Headline 2",
      headline_2: "Headline 2.1",
      headline_3: "Headline 2.1.1",
    };
    expect(trick).toMatchObject(_trick);
    expect(trick.list.length).toBe(4);
  });
  it('makes trick "Headline 2.2.1"', () => {
    const astTopSection = ast.children[1];
    const trickIndex = [2,1];
    const trick = astMakeTrick(astTopSection, trickIndex);
    const _trick = {
      headline_1: "Headline 2",
      headline_2: "Headline 2.2",
      headline_3: "Headline 2.2.1",
    };
    expect(trick).toMatchObject(_trick);
    expect(trick.list.length).toBe(1);
  });
});

describe("astMakeTricks", () => {
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
#+END_SRC
** Headline 2.2
*** Headline 2.2.1
- item 1`;

  const ast = parse(content);

  it("returns the number of tricks in the AST", () => {
    const tricks = astMakeTricks(ast);
    expect(tricks.length).toBe(4);
  });
  it("returns the name list of the tricks in the AST", () => {
    const tricks = astMakeTricks(ast);
    const trickNames = tricks.map((trick) => trick.headline_3);
    const _trickNames = ["Headline 1.1.1", "Headline 1.1.2",
                         "Headline 2.1.1", "Headline 2.2.1"];
    expect(trickNames).toMatchObject(_trickNames);
  });
});

describe("MarkupOrLink", () => {
  it('Makes "underline" markup', () => {
    const content = `_underline_`;
    const ast = parse(content);
    const node = astGoToNode(ast, [0, 0]);
    const { container } = render(<MarkupOrLink node={node} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        style="text-decoration: underline;"
      >
        underline
      </span>
    `);
  });
  it('Makes "strikeThrough" markup', () => {
    const content = `+strikeThrough+`;
    const ast = parse(content);
    const node = astGoToNode(ast, [0, 0]);
    const { container } = render(<MarkupOrLink node={node} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <del>
        strikeThrough
      </del>
    `);
  });
  it('Makes "bold" markup', () => {
    const content = `*bold*`;
    const ast = parse(content);
    const node = astGoToNode(ast, [0, 0]);
    const { container } = render(<MarkupOrLink node={node} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <b>
        bold
      </b>
    `);
  });
  it('Makes "italic" markup', () => {
    const content = `/italic/`;
    const ast = parse(content);
    const node = astGoToNode(ast, [0, 0]);
    const { container } = render(<MarkupOrLink node={node} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <i>
        italic
      </i>
    `);
  });
  it('Makes "code" markup', () => {
    const content = `~code~`;
    const ast = parse(content);
    const node = astGoToNode(ast, [0, 0]);
    const { container } = render(<MarkupOrLink node={node} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <code>
        code
      </code>
    `);
  });
  it('Makes "verbatim" markup', () => {
    const content = `=verbatim=`;
    const ast = parse(content);
    const node = astGoToNode(ast, [0, 0]);
    const { container } = render(<MarkupOrLink node={node} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <code>
        verbatim
      </code>
    `);
  });
  it("leaves text as it is", () => {
    const content = `some text`;
    const ast = parse(content);
    const node = astGoToNode(ast, [0, 0]);
    const { container } = render(<MarkupOrLink node={node} />);
    expect(container.firstChild).toMatchInlineSnapshot(`some text`);
  });
  it("Makes link", () => {
    const content = `[[https://github.com/tonyaldon/][link]]`;
    const ast = parse(content);
    const node = astGoToNode(ast, [0, 0]);
    const { container } = render(<MarkupOrLink node={node} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        href="https://github.com/tonyaldon/"
      >
        link
      </a>
    `);
  });
});
