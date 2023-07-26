export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  //arg is boolen
  if (isIndex) {
    return 'Holberton School';
  }
  return 'Holberton school main dashboard';
}
