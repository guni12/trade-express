[![Build Status](https://travis-ci.org/guni12/trade-express.svg?branch=master)](https://travis-ci.org/guni12/trade-express)
 [![codecov](https://codecov.io/gh/guni12/trade-express/branch/master/graph/badge.svg)](https://codecov.io/gh/guni12/trade-express)
 [![Coverage Status](https://coveralls.io/repos/github/guni12/trade-express/badge.svg?branch=master)](https://coveralls.io/github/guni12/trade-express?branch=master)
 [![Maintainability](https://api.codeclimate.com/v1/badges/488b5bc4d2b1960c8dac/maintainability)](https://codeclimate.com/github/guni12/trade-express/maintainability)
 [![Codacy Badge](https://api.codacy.com/project/badge/Grade/9411c018551d4c458af2e4d88b401f55)](https://www.codacy.com/app/guni12/trade-express?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=guni12/trade-express&amp;utm_campaign=Badge_Grade)

# trade-express

trade-express is a backend server providing secure login services for a trading platform. It is built on Express.js, which is a flexible web application framework. Node.js allows for javascript to run server-side scripts and is the very foundation.

Express was created by TJ Holowaychuk with the intention to be light and easy to expand with various plugins. All is also opensource. Express is part of the MEAN stack and highly regarded by developers for its simplicity, extensibility and performance. With only one language, javascript, developers can this way become full-stack.

When PayPal moved from Java to Node.js the average response time was decreased by 35% for the same page [(ref)](https://apiko.com/blog/express-mobile-app-development/).

## In `package.json` various plugins collected from node-modules can be spotted

| Plugin       | USED FOR                                                                         |
| ------------ | -------------------------------------------------------------------------------- |
| sqlite3      | Database for saving members id, email and password                               |
| bcrypt       | Easy system to hash and compare passwords                                        |
| cors         | Enable cross-origin resource sharing (CORS) requests                             |
| http-errors  | Help create nice error-messages for 4xx and 5xx status codes                     |
| morgan       | Great for debugging information during development, generates logs automatically |
| jsonwebtoken | Adds security to the login-process with crypting a secret key together with payload and creating a token, lasting for a certain amount of time |

### Testing modules

The **`devDependencies`** plugins are there for testing and improvement of the code status during development. `eslint` identifies mistakes in codepatterns. From `javascript-style-guide` we collect the eslint configuration-file. `mocha` is a convenient and easy to use test framework. With `chai` and `chai-http` asserts and http-requests are added. Istanbul `nyc` is a command-line-client that reports the test-result as a table. Together with `coveralls` and `codecov` it is part of the continuous-integration flow via Travis.

### Local testing

By running the command `npm run test` an immediate result as a table is shown in the terminal. But a webpage is also created and can be seen via `localhost/your-directory/build/coverage/`. From there links lead to each tested file and more information about remaining, uncovered code.

Both the eslint and mocha-tests are very helpful and reduce many unnecessary faults before pushing the repo to github. Some of my faults were not reported, such as code duplication and code
 complexity. Markdown patterns is not checked locally either.

### CI chain

So the ci chain helped reduce code length and markdown mistakes, among other things. It is interesting and fostering to use these tools. As an example it forced me to use `next()` a lot more. This way the request and result could move to new functions without triggering the `Headers already sent` message.

All of the code functions are covered by tests, except for 500-errors depending on `sqlite3` or `bcrypt`. This results in 90% coverage, according to `codecov` and 89%, according to `coveralls`. `Codeclimate` finds no errors at all. `Codacy` complains that the table fence is misaligned in this REDAME file. Still both of them returns an A for the badge.

## trade-express together with socket and frontend

This platform was created (together with [trade-socket](https://github.com/guni12/trade-socket) and [trade-vue](https://github.com/guni12/trade-vue)) as my final project at [Blekinge Tekniska Högskola](https://www.bth.se/eng/) for the course Ramverk2. The real-time application microserver keeps track of prices and assets for each member, and the frontend application creates the visual experience containing charts.

Author: Gunvor Nilsson
