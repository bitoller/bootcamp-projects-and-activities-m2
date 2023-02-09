import { suggestUsers, posts, users } from "./database.js";

function createSuggestionsCards(user) {
  let suggestionContainer = document.createElement("div");
  suggestionContainer.classList.add("suggestion-container");
  let userContainer = document.createElement("div");
  userContainer.classList.add("user-container");
  let userImg = document.createElement("img");
  userImg.src = user.img;
  userImg.alt = user.user;
  userImg.classList.add("user-img");
  let userStackContainer = document.createElement("div");
  userStackContainer.classList.add("user-group");
  let userTitle = document.createElement("h2");
  userTitle.innerText = user.user;
  let userStack = document.createElement("p");
  userStack.innerText = user.stack;
  userStack.classList.add("user-stack");
  let followButton = document.createElement("button");
  followButton.innerText = "Seguir";
  followButton.classList.add("follow");
  followButton.setAttribute("id", user.id);
  followButton.addEventListener("click", function (event) {
    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
      followButton.innerText = "Seguir";
    } else {
      event.target.classList.add("active");
      followButton.innerText = "Seguindo";
    }
  });

  userStackContainer.append(userTitle, userStack);
  userContainer.append(userImg, userStackContainer);
  suggestionContainer.append(userContainer, followButton);

  return suggestionContainer;
}

function renderSuggestionsCards() {
  let asideContainer = document.querySelectorAll(".aside-container");
  asideContainer.innerHTML = "";
  asideContainer.forEach((aside) => {
    suggestUsers.forEach((user) => {
      const render = createSuggestionsCards(user);
      aside.append(render);
    });
  });
}

function onChangeInput() {
  let postTitle = document.querySelector("#post-title");
  let postDescription = document.querySelector("#post-description");
  postTitle.addEventListener("keyup", checkFormValidity);
  postDescription.addEventListener("keyup", checkFormValidity);
}

function checkFormValidity() {
  let postForm = document.querySelector("#post-form");
  let postSubmit = document.querySelector(".post-submit");
  if (postForm.checkValidity() == true) {
    postSubmit.disabled = false;
  } else {
    postSubmit.disabled = true;
  }
}

function submitForm() {
  let postSubmit = document.querySelector(".post-submit");
  let postForm = document.querySelector("#post-form");
  let titleInput = document.querySelector("#post-title");
  let textInput = document.querySelector("#post-description");
  postSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    if (postForm.checkValidity() == true) {
      let newIndex = posts[posts.length - 1].id + 1;
      let newPost = {
        id: newIndex,
        title: titleInput.value,
        text: textInput.value,
        user: users[0].user,
        stack: users[0].stack,
        img: users[0].img,
        likes: 0,
      };
      posts.unshift(newPost);
      renderPostsCards();
      titleInput.value = "";
      textInput.value = "";
      postSubmit.disabled = true;
    }
  });
}

function createPostsCards(post) {
  let divArticle = createArticle(post);
  let divButtonGroup = document.createElement("div");
  divButtonGroup.classList.add("button-group", "margin-bottom");
  let openPostButton = document.createElement("button");
  openPostButton.innerText = "Abrir Post";
  openPostButton.classList.add("post-submit", "dark-post-button");
  openPostButton.addEventListener("click", (event) => {
    let modal = document.querySelector("#modal");
    modal.innerHTML = "";
    modal.showModal();
    let modalArticle = createArticle(post);
    let divModalContainer = document.createElement("div");
    divModalContainer.classList.add("modal-container");
    let closeModalButton = document.createElement("button");
    closeModalButton.innerText = "X";
    closeModalButton.classList.add("close-modal-button");
    closeModalButton.addEventListener("click", () => {
      modal.close();
    });
    divModalContainer.append(modalArticle, closeModalButton);
    modal.append(divModalContainer);
  });
  let likeButton = document.createElement("button");
  likeButton.classList.add("like-button");
  let likeButtonImg = document.createElement("img");
  likeButtonImg.src = "./assets/like-gray.png";
  likeButtonImg.alt = "like button";
  let likeCount = document.createElement("span");
  likeCount.innerText = post.likes;
  likeButton.addEventListener("click", (event) => {
    if (likeButtonImg.src.includes("gray") == true) {
      likeButtonImg.src = "./assets/like-red.png";
      likeCount.innerText = post.likes + 1;
    } else {
      likeButtonImg.src = "./assets/like-gray.png";
      likeCount.innerText = post.likes;
    }
  });
  likeButton.append(likeButtonImg, likeCount);
  divButtonGroup.append(openPostButton, likeButton);
  divArticle.append(divButtonGroup);
  return divArticle;
}

function renderPostsCards() {
  let allPosts = document.querySelector("#all-posts");
  allPosts.innerHTML = "";
  posts.forEach((item) => {
    const render = createPostsCards(item);
    allPosts.append(render);
  });
}

function createArticle(post) {
  let divPostsSection = document.createElement("div");
  let userContainerDiv = document.createElement("div");
  userContainerDiv.classList.add("user-container", "margin-bottom");
  let userImg = document.createElement("img");
  userImg.src = post.img;
  userImg.alt = post.user;
  userImg.classList.add("user-img");
  let divTitleSection = document.createElement("div");
  let userName = document.createElement("h2");
  userName.innerText = post.user;
  let userStack = document.createElement("p");
  userStack.innerText = post.stack;
  let postTitle = document.createElement("h1");
  postTitle.innerText = post.title;
  postTitle.classList.add("margin-bottom");
  let postContent = document.createElement("p");
  postContent.innerText = post.text;
  postContent.classList.add("margin-bottom");
  divTitleSection.append(userName, userStack);
  userContainerDiv.append(userImg, divTitleSection);
  divPostsSection.append(userContainerDiv, postTitle, postContent);
  return divPostsSection;
}

renderSuggestionsCards();
onChangeInput();
submitForm();
renderPostsCards();
