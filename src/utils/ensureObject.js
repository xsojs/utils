import ensureError from "./ensureError";

function ensureObject(info, def) {
    if (def == null) {
        ensureError(ensureError.object, ensureError.null, info, def);
    }
    if (typeof def !== 'object' || Array.isArray(def)) {
        ensureError(ensureError.object, ensureError.invalid, info, def);
    }
}

export default ensureObject;