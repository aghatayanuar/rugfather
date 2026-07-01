import { RULES } from "../constants"
import { success, warning } from "../helpers"

export default function creatorHoldingRule(token) {
  const rule = RULES.CREATOR_HOLDING

  if (token.creatorHolding > rule.threshold) {
    return warning(
      rule.id,
      rule.title,
      `Creator owns ${token.creatorHolding}% of the supply.`,
      rule.score
    )
  }

  return success(
    rule.id,
    rule.title,
    `Creator owns ${token.creatorHolding}% of the supply.`
  )
}