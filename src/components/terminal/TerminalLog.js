export function TerminalLog(logs){

    return `

<div class="terminal-log">

${logs.map(log=>`

<div class="log-row">

${log}

</div>

`).join("")}

</div>

`;

}