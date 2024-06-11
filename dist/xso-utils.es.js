function t(n, r, i, l) {
  if (t.null == r)
    throw new Error(`${i} is null and not a valid ${n}.`);
  if (t.invalid == r)
    throw new Error(`${i} is ${typeof l} and not a valid ${n}.`);
}
t.array = "array";
t.function = "function";
t.object = "object";
t.string = "string";
t.null = 0;
t.invalid = 1;
function g(n, r) {
  r == null && t(t.array, t.null, n, r), (typeof r != "object" || !Array.isArray(r)) && t(t.array, t.invalid, n, r);
}
function b(n, r) {
  r == null && t(t.function, t.null, n, r), typeof r != "function" && t(t.function, t.invalid, n, r);
}
function j(n, r) {
  r == null && t(t.object, t.null, n, r), (typeof r != "object" || Array.isArray(r)) && t(t.object, t.invalid, n, r);
}
function p(n, r) {
  r == null && t(t.string, t.null, n, r), typeof r != "string" && !(r instanceof String) && t(t.string, t.invalid, n, r);
}
function e(n) {
  return typeof n == "object" && n != null && Array.isArray(n);
}
function a(n) {
  return (typeof n == "boolean" || n instanceof Boolean) && n != null;
}
function s(n) {
  return typeof n == "function" && n != null;
}
function c(n) {
  return (typeof n == "number" || n instanceof Number) && n != null;
}
function o(n) {
  return typeof n == "object" && n != null && !Array.isArray(n);
}
function f(n) {
  return (typeof n == "string" || n instanceof String) && n != null;
}
function y(n, r) {
  if (n == null && r == null || n == null && r == null || a(n) && a(r) || c(n) && c(r) || f(n) && f(r))
    return n == r;
  if (o(n) && o(r)) {
    const i = Object.keys(n), l = Object.keys(r);
    if (i.length != l.length)
      return !1;
    for (let u = 0; u < i.length; u++)
      if (i[u] != l[u] || !y(n[i[u]], r[l[u]]))
        return !1;
    return !0;
  } else if (e(n) && e(r)) {
    if (n.length != r.length)
      return !1;
    for (let i = 0; i < n.length; i++)
      if (!y(n[i], r[i]))
        return !1;
    return !0;
  } else if (s(n) && s(r))
    return n.toString() === r.toString();
  return !1;
}
export {
  g as ensureArray,
  b as ensureFunction,
  j as ensureObject,
  p as ensureString,
  e as isArray,
  a as isBoolean,
  y as isEquals,
  s as isFunction,
  c as isNumber,
  o as isObject,
  f as isString
};
