import state from "./variable.js";
export function pageLoader() {
        if (state.loader && state.app) {
            setTimeout(() => {
                state.loader.style.display = "none";
                state.app.style.display = "block";
            }, 2000);
        }
}