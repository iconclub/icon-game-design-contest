const ghpages = require("gh-pages");
const path = require("path");

ghpages.publish(
  path.join(__dirname, "..", "/public"),
  {
    branch: "gh-pages",
    repo: "https://github.com/iconclub/icon-game-design-contest.git",
    message: "Deployed to gh-pages",
  },
  () => {
    console.log("Deploy Complete!");
  }
);
