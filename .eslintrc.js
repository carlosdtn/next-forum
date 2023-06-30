const RULES = {
  OFF: "off",
  ERROR: "error",
  WARN: "warn",
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "next/core-web-vitals",
  rules: {
    "react/prop-types": RULES.OFF,
    semi: [RULES.ERROR, "never"],
  },
}
