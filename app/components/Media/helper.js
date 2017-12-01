export function alignmentToFlex(alignment) {
  switch (alignment) {
    case 'top':
      return 'flex-start';
    case 'middle':
      return 'center';
    case 'bottom':
      return 'flex-end';
    default:
      return 'unset';
  }
}
