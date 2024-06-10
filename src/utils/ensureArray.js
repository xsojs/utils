import ensureError from "./ensureError";

function ensureArray(info, def) {
    if (def == null) {
        ensureError(ensureError.array, ensureError.null, info, def);
    }
    if (typeof def !== 'object' || !Array.isArray(def)) {
        ensureError(ensureError.array, ensureError.invalid, info, def);
    }
}

export default ensureArray;