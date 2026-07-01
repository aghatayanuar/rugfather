import { RULES } from "../constants"
import { success, danger } from "../helpers"

export default function liquidityRule(token) {
  const rule = RULES.LIQUIDITY_LOCKED

  if (!token.liquidityLocked) {
    return danger(
      rule.id,
      rule.title,
      "Liquidity is not locked.",
      rule.score
    )
  }

  return success(
    rule.id,
    rule.title,
    "Liquidity is locked."
  )
}