import { ProgressBar } from "./ProgressBar";
import { TerminalLog } from "./TerminalLog";

export function ScanningView() {

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

            <strong
                id="terminal-status"
                class="terminal-badge connecting">

            CONNECTING

            </strong>

        </div>

        ${ProgressBar(0)}

        ${TerminalLog()}

    </div>

</div>

`;

}