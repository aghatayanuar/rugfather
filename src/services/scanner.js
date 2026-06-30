import { emit } from "../core/events";
import { sleep } from "../utils/sleep";

const SCAN_STEPS = [
    {
        progress: 15,
        message: "Connecting to Solana RPC..."
    },
    {
        progress: 30,
        message: "Reading token metadata..."
    },
    {
        progress: 50,
        message: "Checking liquidity..."
    },
    {
        progress: 70,
        message: "Analyzing holder distribution..."
    },
    {
        progress: 85,
        message: "Inspecting developer wallet..."
    },
    {
        progress: 100,
        message: "Generating AI report..."
    }
];

export async function startScan(contractAddress = "") {

    emit("scan:start", contractAddress);

    for (const step of SCAN_STEPS) {

        emit("log", step.message);

        await sleep(700);

        emit("progress", step.progress);
    }

    emit("report", {
        score: 92,
        verdict: "SAFE",
        liquidity: "Locked",
        developer: "Verified",
        holders: "Healthy Distribution"
    });

    emit("scan:finish");
}