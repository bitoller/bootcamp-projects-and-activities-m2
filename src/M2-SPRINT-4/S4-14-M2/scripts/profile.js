const gitHubUser = JSON.parse(localStorage.getItem("github-user"));

function createUser(user) {
  let headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");
  let userContainer = document.createElement("div");
  userContainer.classList.add("user-container");
  let userImg = document.createElement("img");
  userImg.src = user.avatar_url;
  userImg.alt = user.name;
  let userName = document.createElement("h1");
  userName.innerText = user.name;
  let redirectButton = document.createElement("button");
  let redirectLink = document.createElement("a");
  redirectLink.href = "../index.html";
  redirectLink.innerText = "Trocar de usuário";
  userContainer.append(userImg, userName);
  redirectButton.append(redirectLink);
  headerContainer.append(userContainer, redirectButton);

  return headerContainer;
}

function createRepo(repo) {
  let repoContainer = document.createElement("div");
  repoContainer.classList.add("repo-container");
  let repoTitle = document.createElement("h2");
  repoTitle.innerText = repo.name;
  let repoDescription = document.createElement("p");
  repoDescription.innerText = repo.description;
  let repoButton = document.createElement("button");
  let repoLink = document.createElement("a");
  repoLink.href = repo.html_url;
  repoLink.innerText = "Repositório";
  repoLink.target = "_blank";
  repoButton.append(repoLink);
  repoContainer.append(repoTitle, repoDescription, repoButton);

  return repoContainer;
}

async function render() {
  let mainContainer = document.querySelector("#main");
  let reposSection = document.querySelector("#repos-section");
  let userContainer = createUser(gitHubUser);
  let repos = await getRepos(gitHubUser);
  repos.forEach((repo) => {
    const renderRepo = createRepo(repo);
    reposSection.append(renderRepo);
  });
  mainContainer.append(userContainer, reposSection);
}

async function getRepos(user) {
  const repos = await fetch(
    `https://api.github.com/users/${user.login}/repos`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  ).then((response) => {
    if (response.ok == true) {
      return response.json();
    } else {
      return null;
    }
  });
  return repos;
}

await render();
