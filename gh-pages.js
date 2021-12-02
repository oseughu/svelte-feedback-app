const ghpages = require("gh-pages")

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/oseughu/svelte-feedback-app.git", // Update to point to your repository
    user: {
      name: "Osemudiamhen Ughu", // update to use your name
      email: "zinjmyster10@gmail.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!")
  },
)
