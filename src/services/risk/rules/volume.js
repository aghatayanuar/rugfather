import { RULES } from "../constants"
import { success, warning } from "../helpers"

export default function volumeRule(token) {
  const rule = RULES.VOLUME

  if (token.volume24h < rule.threshold) {
    return warning(
      rule.id,
      rule.title,
      `24H volume is only $${token.volume24h.toLocaleString()}.`,
      rule.score
    )
  }

  return success(
    rule.id,
    rule.title,
    `24H volume is $${token.volume24h.toLocaleString()}.`
  )
}