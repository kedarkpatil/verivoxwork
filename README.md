 #  Verivox Test Task

The motive of this project is to create test validation of Verivox using playwright with typescript and cucumber

## AssignmentProject scope

-Designing a test in automation and report passing of all features [[cucumberreport.png](https://github.com/kedarkpatil/verivoxwork/blob/master/cucumberreport.png)].


## Work environment:
- Windows 11, version 23H2
-  Playwright with Typescript
-  Cucumber 
-  Page Objects Model


## Tools used
- [Visual studio code]

      
## Overview
This README file provides details.

## Prerequisites and Setup Instructions
Before running the test program, ensure you have the following packages
-$ npm init -y // it will install  pacakaj.json file

-$ npm init playwright@latest // choose typescript

-$ npm i -D @cucumber/cucumber@7.3.1 @cucumber/pretty-formatter

-$ npm i playwright @cucumber/cucumber typescript ts-node @types/node -D

-$ npx -p typescript tsc --init 
- Now open tsconfig.json file and write below code

    "ts-node": {
     "transpileOnly": true
   },

  "compilerOptions": {   
- Clone the Repository
- git clone  https://github.com/kedarkpatil/verivoxwork/tree/master
- Navigate to the cloned repository folder
- Run The Test  using npm run test.
- Generate Report from 'cucumber-html-reporter' package and run command npm run report
- Report is generated in Playwright/report folder with report.html[[cucumberreport.png](https://github.com/kedarkpatil/verivoxwork/blob/master/cucumberreport.png)].

## Summary
This test ensuring validations of test scenarios.
