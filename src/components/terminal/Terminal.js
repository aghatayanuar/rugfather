import { startScan } from "../../services/scanner";
import { on } from "../../core/events";

import { ProgressBar } from "./ProgressBar";
import { TerminalLog } from "./TerminalLog";
import { Report } from "./Report";
import { countUp } from "../../utils/countUp";
import { typewriter } from "../../utils/typewriter";

let initialized = false;
const logs = [];

export function Terminal() {

    setTimeout(initTerminal, 0);

    return `

<div class="scan-terminal">

    <div class="terminal-top">

        <div class="green"></div>
        <div class="yellow"></div>
        <div class="red"></div>

        <span>THE RUGFATHER TERMINAL</span>

    </div>

    <div class="terminal-body">

        <div class="terminal-status">

            <span>STATUS</span>

            <strong id="terminal-status">

                READY

            </strong>

        </div>

        <h1>

            Contract Intelligence

        </h1>

        <p>

            Paste any Solana Contract Address below.

            The Family will investigate.

        </p>

        <input
            id="contract-input"
            class="contract-input"
            placeholder="Paste Solana Contract Address"
        >

        <button
            id="analyze-btn"
            class="analyze-btn"
        >

            ANALYZE CONTRACT

        </button>

        <div id="terminal-progress">

            ${ProgressBar(0)}

        </div>

        <div id="terminal-log">

            ${TerminalLog([])}

        </div>

        <div id="scan-report">

            ${Report(null)}

        </div>

    </div>

</div>

`;

}

function initTerminal() {

    if (initialized) return;

    initialized = true;

    const btn = document.getElementById("analyze-btn");

    const input = document.getElementById("contract-input");

    const progress = document.getElementById("terminal-progress");

    const log = document.getElementById("terminal-log");

    const report = document.getElementById("scan-report");

    const status = document.getElementById("terminal-status");

    btn.onclick = () => {

        logs.length = 0;

        progress.innerHTML = ProgressBar(0);

        log.innerHTML = TerminalLog([]);

        report.innerHTML = "";

        status.textContent = "SCANNING";

        btn.disabled = true;

        startScan(input.value);

    };

    on("log", async (text) => {

        const line = document.createElement("div");

        line.className = "log-line";

        line.textContent = "> ";

        log.querySelector(".terminal-log").appendChild(line);

        await typewriter(line, "> " + text);

        const ok = document.createElement("span");

        ok.className = "log-ok";

        ok.textContent = " ✓";

        line.appendChild(ok);

        log.scrollTop = log.scrollHeight;

    });

    on("progress", (value) => {

        progress.innerHTML = ProgressBar(value);

    });

    on("report", async (data) => {

        report.innerHTML = Report(data);

        const score = document.getElementById("report-score");

        await countUp(score, data.score);

    });

    on("scan:finish", () => {

        status.textContent = "COMPLETE";

        btn.disabled = false;

    });

}