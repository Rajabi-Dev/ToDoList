import state from "./variable";

const body = state.body,
    themeSwitch = state.themeSwitch;
export function changeMode() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        body.classList.add('dark');
        themeSwitch.checked = true;
    } else {
        body.classList.remove('dark');
        themeSwitch.checked = false;
    }

    themeSwitch.addEventListener('change', () => {
        const isDark = themeSwitch.checked;
        body.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}