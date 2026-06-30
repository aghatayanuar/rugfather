import { Navbar } from "../components/navbar";
import { Terminal } from "../components/terminal/Terminal";

export function ScanPage() {

    return `

${Navbar()}

<div class="scan-page">

    ${Terminal()}

</div>

`;

}