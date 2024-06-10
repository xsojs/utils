
function ensureError(type, level, info, def) {
    if (ensureError.null == level) {
        throw new Error(`${info} is null and not a valid ${type}.`);
    }
    if (ensureError.invalid == level) {
        throw new Error(`${info} is ${typeof def} and not a valid ${type}.`);
    }
}

ensureError.array = 'array';
ensureError.function = 'function';
ensureError.object = 'object';
ensureError.string = 'string';
ensureError.null = 0;
ensureError.invalid = 1;

export default ensureError;
