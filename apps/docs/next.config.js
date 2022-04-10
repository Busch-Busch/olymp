const withTM = require("next-transpile-modules")(["aphrodite"]);

module.exports = withTM({
  reactStrictMode: true,
});
