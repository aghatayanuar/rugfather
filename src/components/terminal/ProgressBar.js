export function ProgressBar(progress = 0) {

    return `

<div class="progress-container">

    <div class="progress-header">

        <span>SCAN PROGRESS</span>

        <span>${progress}%</span>

    </div>

    <div class="progress-track">

        <div
            class="progress-fill"
            style="width:${progress}%">
        </div>

    </div>

</div>

`;

}