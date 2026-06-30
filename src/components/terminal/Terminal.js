import { state, setState } from "../../core/state";

import { IdleView } from "./IdleView";
import { ScanningView } from "./ScanningView";
import { ResultView } from "./ResultView";

import { startScan } from "../../services/scanner";

import { on } from "../../core/events";

import { typewriter } from "../../utils/typewriter";

import { countUp } from "../../utils/countUp";

let initialized = false;

export function Terminal() {

    setTimeout(initTerminal, 0);

    switch (state.view) {

        case "scanning":
            return ScanningView();

        case "result":
            return ResultView(state.report);

        default:
            return IdleView();

    }

}

function renderTerminal() {

    const container = document.querySelector(".scan-page");

    if (!container) return;

    container.innerHTML = Terminal();

}

function initTerminal() {

    if (initialized) return;

    initialized = true;

    on("scan:start", () => {

        setState("view", "scanning");

        renderTerminal();

    });

    on("report", (report) => {

        setState("report", report);

    });

    on("scan:finish", async () => {

        setState("view", "result");

        renderTerminal();

        const score = document.getElementById("report-score");

        if (score && state.report) {

            await countUp(score, state.report.score);

        }

    });

    on("progress", (value) => {

        const fill = document.getElementById("progress-fill");
        const text = document.getElementById("progress-text");

        if (fill) {

            fill.style.width = value + "%";

        }

        if (text) {

            text.textContent = value + "%";

        }

    });

    on("status", (status) => {

        const badge = document.getElementById("terminal-status");

        if (!badge) return;

        badge.textContent = status;

        badge.className = "terminal-badge " + status.toLowerCase();

    });

    on("log", async (text) => {

        const terminal = document.querySelector(".terminal-log");

        if (!terminal) return;

        const line = document.createElement("div");

        line.className = "log-line";

        terminal.appendChild(line);

        await typewriter(line, "> " + text);

        const ok = document.createElement("span");

        ok.className = "log-ok";

        ok.textContent = "  ✓";

        line.appendChild(ok);

        terminal.scrollTop = terminal.scrollHeight;

    });

    document.addEventListener("click", (e) => {

        if (e.target.id === "analyze-btn") {

            const input = document.getElementById("contract-input");

            startScan(input.value);

        }

        if (e.target.id === "scan-again") {

            setState("view", "idle");

            setState("report", null);

            renderTerminal();

        }

    });

}