export function kebabCaseToTitleCase(text) {
  const textWithSpaces = text.replaceAll("-", " ");
  const textWithCaps = textWithSpaces.replace(/\b([a-z])/g, (char) => char.toUpperCase());

  return textWithCaps;
}