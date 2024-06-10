import ensureError from "./ensureError";

function ensureFunction(info, def) {
    if (def == null) {
        ensureError(ensureError.function, ensureError.null, info, def);
    }
    if (typeof def !== 'function') {
        ensureError(ensureError.function, ensureError.invalid, info, def);
    }
}

export default ensureFunction;