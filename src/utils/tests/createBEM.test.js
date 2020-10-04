import createBEM from '../crateBEM';

describe('createBEM', () => {
  it('creates e BEM class name with no element name and no modifiers', () => {
    // Arrange
    const baseClass = 'Class';
    const BEM = createBEM(baseClass);
    const expected = `${baseClass}`;
    // Act
    const received = BEM();
    // Assert
    expect(received).toBe(expected);
  });
  it('creates e BEM class name with no modifiers', () => {
    // Arrange
    const baseClass = 'Class';
    const elementName = 'emelent';
    const BEM = createBEM(baseClass);
    const expected = `${baseClass}__${elementName}`;
    // Act
    const received = BEM(elementName);
    // Assert
    expect(received).toBe(expected);
  });

  it('creates e BEM class name with modifiers', () => {
    // Arrange
    const baseClass = 'Class';
    const elementName = 'emelent';
    const modifiers = ['active', 'visible'];
    const BEM = createBEM(baseClass);
    const expected = modifiers
      .map((modifier) => `${baseClass}__${elementName}--${modifier}`)
      .join(' ');
    // Act
    const received = BEM(elementName, modifiers);
    // Assert
    expect(received).toBe(expected);
  });
});
