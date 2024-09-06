module.exports = {
    default: `--require features/**/*.feature --format json:playwright/reports/cucumber-report.json --require-module ts-node/register --require test.setup.ts --require step-definitions/**/*.ts`
};