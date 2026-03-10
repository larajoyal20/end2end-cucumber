module.exports = {
  default: {
    require: [
      "steps_defination/**/*.ts",
      "support/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "json:reports/cucumber-report.json",
      "allure-cucumberjs/reporter"
    ],
    paths: ["features/**/*.feature"]
  }
};