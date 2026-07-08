export function all(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

export function first(selector, scope = document) {
  return scope.querySelector(selector);
}
