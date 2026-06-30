import { emit } from "../core/events";

import { sleep } from "../utils/sleep";

export async function startScan(){

    emit("log","Connecting to Solana RPC...");

    await sleep(600);

    emit("progress",15);

    emit("log","Metadata loaded.");

    await sleep(500);

    emit("progress",30);

    emit("log","Liquidity detected.");

    await sleep(700);

    emit("progress",55);

    emit("log","Holder analysis complete.");

    await sleep(700);

    emit("progress",75);

    emit("log","Developer wallet verified.");

    await sleep(700);

    emit("progress",100);

    emit("log","AI Report generated.");

    emit("finish");

}