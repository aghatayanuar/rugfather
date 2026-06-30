import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export function HomePage(){

return `

${Navbar()}

<div class="hero">

<div class="hero-left">

<div class="badge">

SOLANA SECURITY PROTOCOL

</div>

<h1>

THE <span>RUGFATHER</span>

</h1>

<p>

Track rugs before they track your wallet.

AI-powered intelligence for Solana traders.

</p>

<div class="hero-buttons">

<a
href="/scan"
data-link
class="btn">

SCAN CONTRACT

</a>

<a
href="/leaderboard"
data-link
class="btn outline">

LEADERBOARD

</a>

</div>

</div>

<div class="hero-right">

<div class="glass-card">

<h3>Live Network</h3>

<div class="stat">

<span>Wallets</span>

<strong>12,847</strong>

</div>

<div class="stat">

<span>Rugs Detected</span>

<strong>2,431</strong>

</div>

<div class="stat">

<span>Threat Level</span>

<strong>LOW</strong>

</div>

</div>

</div>

</div>

${Footer()}

`;

}