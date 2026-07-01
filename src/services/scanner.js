import { emit } from "../core/events";
import { sleep } from "../utils/sleep";

import calculateRisk from "./riskEngine";

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
        message: "Running Rugfather Engine..."
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

    /**
     * Dummy token data.
     *
     * Sprint 7 nanti object ini akan berasal dari
     * Helius + Birdeye + DexScreener.
     */

    const token = {

        mintAuthority: true,

        freezeAuthority: false,

        liquidityLocked: false,

        lpBurned: false,

        creatorHolding: 38,

        topHolder: 29,

        ageDays: 2,

        volume24h: 8200,

    };

    const risk = calculateRisk(token);

    emit("report", {

        contractAddress,

        risk,

    });

    emit("status", "COMPLETE");

    emit("scan:finish");

}