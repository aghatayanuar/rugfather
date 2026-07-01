import { RULES } from "../constants"
import { success, warning } from "../helpers"

export default function topHolderRule(token) {
  const rule = RULES.TOP_HOLDER

  if (token.topHolder > rule.threshold) {
    return warning(
      rule.id,
      rule.title,
      `Top holder owns ${token.topHolder}% of the supply.`,
      rule.score
    )
  }

  return success(
    rule.id,
    rule.title,
    `Top holder owns ${token.topHolder}% of the supply.`
  )
}