export function Terminal() {

    return `

<div class="scan-terminal">

    <div class="terminal-top">

        <div class="green"></div>
        <div class="yellow"></div>
        <div class="red"></div>

        <span>

            THE RUGFATHER TERMINAL

        </span>

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

        <div class="system-status">

            <div class="status-row">

                <span>Metadata</span>

                <span id="status-meta">

                    Waiting...

                </span>

            </div>

            <div class="status-row">

                <span>Liquidity</span>

                <span id="status-liquidity">

                    Waiting...

                </span>

            </div>

            <div class="status-row">

                <span>Top Holders</span>

                <span id="status-holder">

                    Waiting...

                </span>

            </div>

            <div class="status-row">

                <span>Developer Wallet</span>

                <span id="status-dev">

                    Waiting...

                </span>

            </div>

            <div class="status-row">

                <span>AI Analysis</span>

                <span id="status-ai">

                    Waiting...

                </span>

            </div>

        </div>

        <div id="terminal-progress"></div>

        <div id="terminal-log"></div>

        <div id="scan-report"></div>

    </div>

</div>

`;

}