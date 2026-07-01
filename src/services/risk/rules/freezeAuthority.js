import { RULES } from "../constants"
import { success, danger } from "../helpers"

export default function freezeAuthorityRule(token) {
  const rule = RULES.FREEZE_AUTHORITY

  if (token.freezeAuthority) {
    return danger(
      rule.id,
      rule.title,
      "Freeze authority is still enabled. Token accounts can potentially be frozen.",
      rule.score
    )
  }

  return success(
    rule.id,
    rule.title,
    "Freeze authority has been revoked."
  )
}