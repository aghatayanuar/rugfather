import { RULES } from "../constants"
import { success, warning } from "../helpers"

export default function tokenAgeRule(token) {
  const rule = RULES.TOKEN_AGE

  if (token.ageDays < rule.threshold) {
    return warning(
      rule.id,
      rule.title,
      `Token is only ${token.ageDays} day(s) old.`,
      rule.score
    )
  }

  return success(
    rule.id,
    rule.title,
    `Token age is ${token.ageDays} day(s).`
  )
}