import { Report } from "./Report";

export function ResultView(report){

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

            <strong>COMPLETE</strong>

        </div>

        ${Report(report)}

        <button
            id="scan-again"
            class="analyze-btn">

            SCAN ANOTHER CONTRACT

        </button>

    </div>

</div>

`;

}