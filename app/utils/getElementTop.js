function getElementTop(element) {
  let actualTop = 0;

  if (element && 'offsetTop' in element) {
    actualTop = element.offsetTop;
    let currentParent = element.offsetParent;

    while (currentParent !== null) {
      actualTop += currentParent.offsetTop;
      currentParent = currentParent.offsetParent;
    }
  }

  return actualTop;
}

export default getElementTop;
