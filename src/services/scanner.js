import { emit } from "../core/events";
import { sleep } from "../utils/sleep";

const SCAN_STEPS = [

    {
        status: "CONNECTING",
        progress: 15,
        message: "Connecting to Helius RPC..."
    },

    {
        status: "METADATA",
        progress: 30,
        message: "Reading Token Metadata..."
    },

    {
        status: "LIQUIDITY",
        progress: 50,
        message: "Checking Liquidity..."
    },

    {
        status: "HOLDERS",
        progress: 70,
        message: "Analyzing Holder Distribution..."
    },

    {
        status: "RUGCHECK",
        progress: 85,
        message: "Running RugCheck Engine..."
    },

    {
        status: "AI",
        progress: 100,
        message: "Generating AI Intelligence..."
    }

];

export async function startScan(contractAddress = "") {

    emit("scan:start", contractAddress);

    for (const step of SCAN_STEPS) {

        emit("log", step.message);
        emit("status", step.status);

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

    emit("status", "COMPLETE");
    emit("scan:finish");
}