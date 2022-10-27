//find the value of the dom element which is identical in structure to another dom element
//by making a path to that element

const getParentFromChild = (parent, child) => {
  let currentNode = child;
  const pathArray = [];
  while (currentNode !== parent) {
    const parentNode = currentNode.parentElement;
    const childrenArray = Array.from(parentNode.children);
    pathArray.push(childrenArray.indexOf(currentNode));
    currentNode = parentNode;
  }
  return pathArray;
};

const getValueFromPath = (parent, path) => {
  let currentNode = parent;
  while (path.length) {
    currentNode = currentNode.children[path.pop()];
  }
  return currentNode.innerText;
};

const findNodeValue = () => {
  const rootA = document.getElementById("rootA");
  const rootB = document.getElementById("rootB");
  const nodeA = document.getElementById("nodeA");
  const path = getParentFromChild(rootA, nodeA);
  return getValueFromPath(rootB, path);
};

console.log(findNodeValue());
