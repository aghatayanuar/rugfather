import { HomePage } from "./pages/home";
import { ScanPage } from "./pages/scan";
import { LeaderboardPage } from "./pages/leaderboard";
import { AboutPage } from "./pages/about";

const routes = {
    "/": HomePage,
    "/scan": ScanPage,
    "/leaderboard": LeaderboardPage,
    "/about": AboutPage
};

export function router() {

    const app = document.querySelector("#app");

    const render = () => {

        const path = window.location.pathname;

        const page = routes[path] || HomePage;

        app.innerHTML = page();

        bindLinks();
    };

    function bindLinks() {

        document.querySelectorAll("[data-link]").forEach(link => {

            link.onclick = (e) => {

                e.preventDefault();

                history.pushState({}, "", link.href);

                render();

            };

        });

    }

    window.onpopstate = render;

    render();

}