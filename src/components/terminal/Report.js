export function Report(report) {

    if (!report) return "";

    return `

<div class="report-card">

    <div class="report-header">

        <div>

            <div class="report-title">

                FAMILY CONFIDENCE INDEX

            </div>

            <div class="report-subtitle">

                AI Risk Assessment

            </div>

        </div>

        <div
            id="report-score"
            class="report-score">

            0

        </div>

    </div>

    <div class="report-verdict ${report.verdict.toLowerCase()}">

        ${report.verdict}

    </div>

    <div class="report-grid">

        <div class="report-item">

            <span>Liquidity</span>

            <strong>${report.liquidity}</strong>

        </div>

        <div class="report-item">

            <span>Developer</span>

            <strong>${report.developer}</strong>

        </div>

        <div class="report-item">

            <span>Top Holders</span>

            <strong>${report.holders}</strong>

        </div>

    </div>

</div>

`;

}