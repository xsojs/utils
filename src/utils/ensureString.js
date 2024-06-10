import ensureError from "./ensureError";

function ensureString(info, def) {
    if (def == null) {
        ensureError(ensureError.string, ensureError.null, info, def);
    }
    if ((typeof def !== 'string' && !(def instanceof String))) {
        ensureError(ensureError.string, ensureError.invalid, info, def);
    }
}

export default ensureString;