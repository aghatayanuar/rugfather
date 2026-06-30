import './style.css'

document.querySelector('#app').innerHTML = `
<div class="page">

<section class="hero">

    <div class="hero-left">

        <div class="badge">
            SOLANA SECURITY PROTOCOL
        </div>

        <h1>
            THE
            <span>RUGFATHER</span>
        </h1>

        <p>
            Track rugs before they track your wallet.
            AI-powered intelligence for traders,
            degens and survivors.
        </p>

        <div class="hero-buttons">

            <button 
                onclick="document.querySelector('.scanner').scrollIntoView({behavior:'smooth'})">

                SCAN CONTRACT

            </button>

        </div>

    </div>

    <div class="hero-right">

        <div class="terminal">

            <div class="terminal-header">
                LIVE NETWORK STATUS
            </div>

            <div class="row">
                <span>Wallets Monitored</span>
                <strong>12,847</strong>
            </div>

            <div class="row">
                <span>Rugs Detected</span>
                <strong>2,431</strong>
            </div>

            <div class="row">
                <span>Threat Level</span>
                <strong>LOW</strong>
            </div>

            <div class="row">
                <span>Liquidity Alerts</span>
                <strong>147</strong>
            </div>

        </div>

    </div>

</section>

<section class="features">

    <div class="feature">
        <h3>THREAT ANALYSIS</h3>
        <p>
            Detect suspicious contracts before entering a position.
        </p>
    </div>

    <div class="feature">
        <h3>WALLET INTELLIGENCE</h3>
        <p>
            Follow developer activity across launches and wallets.
        </p>
    </div>

    <div class="feature">
        <h3>LIQUIDITY MONITORING</h3>
        <p>
            Watch liquidity behavior before it disappears.
        </p>
    </div>

</section>

<section class="scanner">

    <div class="scanner-title">
        CONTRACT INTELLIGENCE
    </div>

    <h2>
        Consult The Family
    </h2>

    <p class="scanner-subtitle">
        Every contract has a story.
        The Family reads between the lines.
    </p>

    <input
        placeholder="Paste Solana Contract Address">

    <button onclick="scan()">
        ANALYZE CONTRACT
    </button>

    <div id="result"></div>

</section>

<section class="intel">

    <div class="intel-card">
        <span>24/7</span>
        Monitoring
    </div>

    <div class="intel-card">
        <span>AI</span>
        Detection Engine
    </div>

    <div class="intel-card">
        <span>FAST</span>
        Risk Reports
    </div>

    <div class="intel-card">
        <span>LIVE</span>
        Threat Feed
    </div>

</section>

</div>
`

window.scan = function () {

    const score = Math.floor(Math.random() * 100)

    let verdict = ""
    let message = ""

    if (score >= 80) {

        verdict = "FAMILY APPROVED"

        message = `
        This one looks clean.

        Liquidity appears stable.

        Dev activity isn't making me nervous.

        Keep your eyes open,
        but the family approves.
        `

    } else if (score >= 60) {

        verdict = "PROCEED WITH CAUTION"

        message = `
        I've seen worse.

        But I've seen better too.

        Watch the wallets.
        Watch the liquidity.

        Something feels off.
        `

    } else if (score >= 40) {

        verdict = "SUSPICIOUS"

        message = `
        Listen kid...

        Too many strange movements.

        Too many connected wallets.

        Somebody is hiding something.
        `

    } else {

        verdict = "THE FAMILY SAYS NO"

        message = `
        Are you trying to lose money?

        Because this contract
        is working very hard
        to help you do exactly that.

        Run.
        `
    }

    document.querySelector('#result').innerHTML = `

        <div class="console">

            <div class="console-bar">
                rugfather@family-terminal
            </div>

            <pre id="console-output"></pre>

        </div>

        `

        const output = document.querySelector('#console-output')

        const consoleText = `

        > CONNECTING TO FAMILY NETWORK...

        > CHECKING DEV WALLETS...

        > ANALYZING LIQUIDITY...

        > REVIEWING TRANSACTION HISTORY...

        --------------------------------------------------

        ${message}

        --------------------------------------------------

        VERDICT      : ${verdict}

        `

        typeWriter(output, consoleText)
}

function typeWriter(element, text, speed = 25) {

    let i = 0

    element.innerHTML = ""

    function type() {

        if (i < text.length) {

            element.innerHTML += text.charAt(i)

            i++

            setTimeout(type, speed)

        }

    }

    type()

}