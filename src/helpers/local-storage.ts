export function getItem(item: string) {
  return localStorage.getItem(item);
}

export function setItem(item: string, value: any) {
  return localStorage.setItem(item, value);
}
