export default (baseComponent) => (elementName, modifiers) => {
  const BEM = elementName ? `${baseComponent}__${elementName}` : baseComponent;

  if (modifiers && modifiers.length !== 0) {
    const BEMList = modifiers.map((modifier) => `${BEM}--${modifier}`).join(' ');
    return BEMList;
  }
  return BEM;
};
