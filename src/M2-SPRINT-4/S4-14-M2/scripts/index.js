localStorage.removeItem("github-user");

async function getGitHubUser(user) {
  const gitHubUser = await fetch(`https://api.github.com/users/${user}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.ok == true) {
      return response.json();
    } else {
      return null;
    }
  });
  if (gitHubUser == null) {
    window.location.replace("./pages/error.html");
  } else {
    localStorage.setItem("github-user", JSON.stringify(gitHubUser));
    window.location.replace("./pages/profile.html");
  }
}

function searchInput() {
  const button = document.querySelector(".profile-button");
  button.addEventListener("click", async () => {
    const searchInput = document.querySelector("#search-input");
    await getGitHubUser(searchInput.value);
  });
}

searchInput();
