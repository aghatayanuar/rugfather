import { HomePage } from "./pages/home";
import { ScanPage } from "./pages/scan";
import { LeaderboardPage } from "./pages/leaderboard";
import { AboutPage } from "./pages/about";

const routes = {
    "/": HomePage,
    "/scan": ScanPage,
    "/leaderboard": LeaderboardPage,
    "/about": AboutPage,
};

function render() {
    const app = document.querySelector("#app");

    if (!app) return;

    const path = window.location.pathname;
    const page = routes[path] || HomePage;

    app.innerHTML = page();
}

export function router() {

    document.addEventListener("click", (e) => {

        const link = e.target.closest("[data-link]");

        if (!link) return;

        e.preventDefault();

        history.pushState({}, "", link.getAttribute("href"));

        render();

    });

    window.addEventListener("popstate", render);

    render();
}