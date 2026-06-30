export const state = {

    view: "idle",

    scanning: false,

    progress: 0,

    contract: "",

    report: null,

    logs: []

};

export function setState(key, value) {

    state[key] = value;

}