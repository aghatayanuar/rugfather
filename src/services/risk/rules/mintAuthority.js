import { RULES } from "../constants"
import { success, danger } from "../helpers"

export default function mintAuthorityRule(token) {
  const rule = RULES.MINT_AUTHORITY

  // true = mint authority masih aktif (berisiko)
  if (token.mintAuthority) {
    return danger(
      rule.id,
      rule.title,
      "Mint authority is still enabled. The token supply can be increased.",
      rule.score
    )
  }

  return success(
    rule.id,
    rule.title,
    "Mint authority has been revoked."
  )
}