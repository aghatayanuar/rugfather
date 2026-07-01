export function success(id, title, description) {
  return {
    id,
    title,
    description,

    passed: true,

    severity: "success",

    score: 0,
  }
}

export function warning(id, title, description, score) {
  return {
    id,
    title,
    description,

    passed: false,

    severity: "warning",

    score,
  }
}

export function danger(id, title, description, score) {
  return {
    id,
    title,
    description,

    passed: false,

    severity: "danger",

    score,
  }
}

export function calculateScore(checks) {
  return checks.reduce((total, check) => total + check.score, 0)
}

export function calculateLevel(score) {
  if (score >= 76) {
    return "EXTREME"
  }

  if (score >= 51) {
    return "HIGH"
  }

  if (score >= 21) {
    return "MEDIUM"
  }

  return "LOW"
}