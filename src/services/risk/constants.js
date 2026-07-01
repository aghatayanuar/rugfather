export const RISK_LEVEL = {
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
  EXTREME: "EXTREME",
}

export const RULES = {
  MINT_AUTHORITY: {
    id: "mint-authority",
    title: "Mint Authority",
    score: 20,
  },

  FREEZE_AUTHORITY: {
    id: "freeze-authority",
    title: "Freeze Authority",
    score: 15,
  },

  LIQUIDITY_LOCKED: {
    id: "liquidity-locked",
    title: "Liquidity Locked",
    score: 25,
  },

  LP_BURNED: {
    id: "lp-burned",
    title: "LP Burned",
    score: 15,
  },

  CREATOR_HOLDING: {
    id: "creator-holding",
    title: "Creator Holding",
    threshold: 20,
    score: 15,
  },

  TOP_HOLDER: {
    id: "top-holder",
    title: "Top Holder",
    threshold: 30,
    score: 10,
  },

  TOKEN_AGE: {
    id: "token-age",
    title: "Token Age",
    threshold: 30,
    score: 5,
  },

  LIQUIDITY: {
    id: "liquidity",
    title: "Liquidity",
    threshold: 10000,
    score: 5,
  },

  VOLUME: {
    id: "volume",
    title: "24H Volume",
    threshold: 10000,
    score: 5,
  },
}