import rules from "./rules";

import {

    calculateLevel,

    calculateScore,

} from "./helpers";

export function analyzeToken(token) {

    const checks = rules.map(rule => rule(token));

    const score = calculateScore(checks);

    const level = calculateLevel(score);

    return {

        score,

        level,

        checks,

    };

}