import { RULES } from "../constants"
import { success, danger } from "../helpers"

export default function lpBurnedRule(token) {
  const rule = RULES.LP_BURNED

  if (!token.lpBurned) {
    return danger(
      rule.id,
      rule.title,
      "Liquidity provider tokens are not burned.",
      rule.score
    )
  }

  return success(
    rule.id,
    rule.title,
    "Liquidity provider tokens are burned."
  )
}