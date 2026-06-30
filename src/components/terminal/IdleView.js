export function IdleView() {

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

            <strong>READY</strong>

        </div>

        <h1>Contract Intelligence</h1>

        <p>

            Paste any Solana Contract Address below.

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

    </div>

</div>

`;

}