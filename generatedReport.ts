import reporter from 'cucumber-html-reporter';

const options: reporter.Options = {
    jsonFile: 'playwright/reports/cucumber-report.json',
    launchReport: true,
    noInlineScreenshots: false,
    output: 'playwright/reports/report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    screenshotsDirectory: 'playwright/reports/screenshots/',
    storeScreenshots: true,
    theme: 'bootstrap',
};

reporter.generate(options)
