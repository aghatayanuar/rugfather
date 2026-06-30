export const state = {

    scanning:false,

    progress:0,

    contract:"",

    report:null,

    logs:[],

    risk:null,

    wallet:null,

    liquidity:null

};

export function setState(key,value){

    state[key]=value;

}