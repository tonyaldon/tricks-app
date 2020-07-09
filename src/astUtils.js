/** Walk in the AST tree (obtain with orgajs) and goto a specific node.*/
function astGoToNode(ast, branches) {
  var node = ast;
  if (branches == null) {
    return node;
  }
  for (let branch of branches) {
    node = node.children[branch];
  }
  return node;
}

/** From nested list of nodes of type "list", "list.item",
    "headline" and "block" in the AST tree (obtain with "orga"),
    filters and returns an array of nodes only of the types
    "list.item" or "block". */
function astMakeListItemBlock(astList) {
  // var children = astGoToNode(astTopSection, [1,1]).children;
  var listItemBlock = [];
  for (var node = 0; node < astList.length; node++) {
    switch (astList[node].type) {
    case 'block':
      listItemBlock.push(astList[node]);
      break;
    case 'list':
      let itemList = astList[node].children;
      for (var item = 0; item < itemList.length; item++) {
        listItemBlock.push(itemList[item]);
      }
      break;
    default:
    }
  }
  return listItemBlock;
}

/** From a top section in the AST tree (obtain with orgajs) and the trick
		number (starting at 1) in that top section returns a trick.
		That is an object with the keys headline_1, headline_2, headline_3 and list. */
function astMakeTrick(astTopSection, trickNumber) {
  return {
    headline_1 : astGoToNode(astTopSection, [0,0]).value,
    headline_2 : astGoToNode(astTopSection, [1,0,0]).value,
    headline_3 : astGoToNode(astTopSection, [1,trickNumber,0,0]).value,
    list : astMakeListItemBlock(astGoToNode(astTopSection, [1,trickNumber]).children)
  };
}

function astNumberOfTricksTopSection(astTopSection) {
  return astGoToNode(astTopSection, [1]).children.length - 1
}

/** Make the list off all tricks of the AST tree (obtain with orgajs).*/
function astMakeTricks(ast) {
  let tricks = [];
  for (let topSection = 0; topSection < ast.children.length; topSection++) {
    let astTopSection = ast.children[topSection];
    let numberOfTricks = astNumberOfTricksTopSection(astTopSection);
    for (let trickNumber = 1; trickNumber <= numberOfTricks; trickNumber++) {
      tricks.push(astMakeTrick(astTopSection, trickNumber));
    };
  };
  return tricks
}

export { astGoToNode, astMakeListItemBlock, astMakeTrick,
         astNumberOfTricksTopSection , astMakeTricks}
