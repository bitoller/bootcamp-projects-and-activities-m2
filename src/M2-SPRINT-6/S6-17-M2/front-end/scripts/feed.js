import { snackbarDeletePost } from "./snackbar.js";

const token = JSON.parse(localStorage.getItem("token"));
const url = "http://localhost:3333";
let user = {};
if (token == null) {
  window.location.replace("../index.html");
}

async function getUser() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  await fetch(`${url}/users/profile`, options)
    .then((response) => response.json())
    .then((response) => {
      user = response;
      let profilePic = document.querySelector("#profile-pic");
      profilePic.src = user.avatar;
      getPosts();
      createDropdownMenu();
    })
    .catch((err) => console.error(err));
}

async function getPosts() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  await fetch(`${url}/posts`, options)
    .then((response) => response.json())
    .then((response) => {
      renderPosts(response);
    })
    .catch((err) => console.error(err));
}

async function createPost(title, content) {
  let post = {
    title: title,
    content: content,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(post),
  };

  await fetch("http://localhost:3333/posts/create", options)
    .then((response) => response.json())
    .then((response) => {
      getPosts();
      closeModal();
    })
    .catch((err) => console.error(err));
}

async function editPost(id, title, content) {
  let post = {
    title: title,
    content: content,
  };
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(post),
  };

  await fetch(`${url}/posts/${id}`, options)
    .then((response) => response.json())
    .then((response) => {
      getPosts();
      closeModal();
    })
    .catch((err) => console.error(err));
}

async function deletePost(id) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  await fetch(`${url}/posts/${id}`, options)
    .then((response) => response.json())
    .then((response) => {
      getPosts();
      closeModal();
      snackbarDeletePost();
    })
    .catch((err) => console.error(err));
}

function createPostCards(post) {
  let postContainer = document.createElement("div");
  postContainer.classList.add("post-container");

  let miniHeader = document.createElement("div");
  miniHeader.classList.add("mini-header");

  let userAndDate = document.createElement("div");
  userAndDate.classList.add("user-date");

  let userImg = document.createElement("img");
  userImg.src = post.user.avatar;
  userImg.alt = post.user.username;
  userImg.classList.add("user-img");

  let userName = document.createElement("p");
  userName.innerText = post.user.username;

  let space = document.createElement("p");
  space.innerText = "|";

  let postDate = document.createElement("p");
  let year = new Date(post.createdAt).getFullYear();
  let month = new Date(post.createdAt).toLocaleString("pt-BR", {
    month: "long",
  });
  postDate.innerText = `${month} de ${year}`;

  let miniButtons = document.createElement("div");
  miniButtons.classList.add("mini-buttons");

  let postTitle = document.createElement("h2");
  postTitle.innerText = post.title;

  let postContent = document.createElement("p");
  let auxContent = post.content.substring(0, 145);
  postContent.innerText = `${auxContent}...`;

  let openButton = document.createElement("button");
  openButton.innerText = "Acessar publicação";
  openButton.classList.add("open-button");
  openButton.addEventListener("click", () => {
    const postModalDiv = document.querySelector("#dialog");
    postModalDiv.innerHTML = "";
    let postModal = openPostModal(post);
    postModalDiv.append(postModal);
    showModal();
  });

  userAndDate.append(userImg, userName, space, postDate);

  if (post.user.id == user.id) {
    let editButton = document.createElement("button");
    editButton.innerText = "Editar";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", () => {
      const postModalDiv = document.querySelector("#dialog");
      postModalDiv.innerHTML = "";
      let postModal = postForm(post);
      postModalDiv.append(postModal);
      showModal();
    });

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Excluir";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      const postModalDiv = document.querySelector("#dialog");
      postModalDiv.innerHTML = "";
      let postModal = deletePostModal(post.id);
      postModalDiv.append(postModal);
      showModal();
    });

    miniButtons.append(editButton, deleteButton);
    miniHeader.append(userAndDate, miniButtons);
  } else {
    miniHeader.append(userAndDate);
  }

  postContainer.append(miniHeader, postTitle, postContent, openButton);

  return postContainer;
}

function renderPosts(posts) {
  let postsFeed = document.querySelector("#posts-feed");
  postsFeed.innerHTML = "";
  for (let i = posts.length - 1; i >= 0; i--) {
    const render = createPostCards(posts[i]);
    postsFeed.append(render);
  }
}

function openPostModal(post) {
  let postContainer = document.createElement("div");
  postContainer.classList.add("dialog-content");

  let miniHeader = document.createElement("div");
  miniHeader.classList.add("mini-header");

  let userAndDate = document.createElement("div");
  userAndDate.classList.add("user-date");

  let userImg = document.createElement("img");
  userImg.src = post.user.avatar;
  userImg.alt = post.user.username;
  userImg.classList.add("user-img");

  let userName = document.createElement("p");
  userName.innerText = post.user.username;

  let space = document.createElement("p");
  space.innerText = "|";

  let postDate = document.createElement("p");
  let year = new Date(post.createdAt).getFullYear();
  let month = new Date(post.createdAt).toLocaleString("pt-BR", {
    month: "long",
  });
  postDate.innerText = `${month} de ${year}`;

  let closeModalSide = document.createElement("div");
  closeModalSide.classList.add("close-modal-side");

  let closeModalButton = document.createElement("button");
  closeModalButton.innerText = "X";
  closeModalButton.classList.add("close-modal-button");
  closeModalButton.addEventListener("click", closeModal);

  let postTitle = document.createElement("h2");
  postTitle.innerText = post.title;

  let postContent = document.createElement("p");
  postContent.innerText = post.content;

  userAndDate.append(userImg, userName, space, postDate);
  closeModalSide.append(closeModalButton);
  miniHeader.append(userAndDate, closeModalSide);
  postContainer.append(miniHeader, postTitle, postContent);

  return postContainer;
}

function postForm(post) {
  let modalContent = document.createElement("div");
  modalContent.classList.add("dialog-content");

  let modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  let modalTitle = document.createElement("h2");
  modalTitle.innerText = post == null ? "Criando novo post" : "Edição";

  let closeModalButton = document.createElement("button");
  closeModalButton.innerText = "X";
  closeModalButton.classList.add("close-modal-button");
  closeModalButton.addEventListener("click", closeModal);

  let postFormModal = document.createElement("form");

  let postTitle = document.createElement("label");
  postTitle.innerText = "Título do post";
  postTitle.htmlFor = "post-title-input";

  let postTitleInput = document.createElement("input");
  postTitleInput.id = "post-title-input";
  postTitleInput.placeholder = "Digite o título aqui...";

  let postContent = document.createElement("label");
  postContent.innerText = "Conteúdo do post";
  postContent.htmlFor = "post-content-input";

  let postContentInput = document.createElement("textarea");
  postContentInput.id = "post-content-input";
  postContentInput.placeholder = "Desenvolva o conteúdo do post aqui...";
  postContentInput.rows = "6";

  if (post != null) {
    postTitleInput.value = post.title;
    postContentInput.value = post.content;
  }

  let buttonsModalDiv = document.createElement("div");
  buttonsModalDiv.classList.add("buttons-modal-div");

  let cancelButtonModal = document.createElement("button");
  cancelButtonModal.innerText = "Cancelar";
  cancelButtonModal.classList.add("cancel-button-modal");
  cancelButtonModal.addEventListener("click", closeModal);

  let submitButtonModal = document.createElement("button");
  submitButtonModal.type = "submit";
  if (post == null) {
    submitButtonModal.innerText = "Publicar";
    submitButtonModal.addEventListener("click", () => {
      createPost(postTitleInput.value, postContentInput.value);
    });
  } else {
    submitButtonModal.innerText = "Salvar Alterações";
    submitButtonModal.addEventListener("click", () => {
      editPost(post.id, postTitleInput.value, postContentInput.value);
    });
  }

  buttonsModalDiv.append(cancelButtonModal, submitButtonModal);
  postFormModal.append(
    postTitle,
    postTitleInput,
    postContent,
    postContentInput
  );
  modalHeader.append(modalTitle, closeModalButton);
  modalContent.append(modalHeader, postFormModal, buttonsModalDiv);

  return modalContent;
}

function getCreatePostButton() {
  const newPostButton = document.querySelector("#new-post");
  newPostButton.addEventListener("click", () => {
    const postModalDiv = document.querySelector("#dialog");
    postModalDiv.innerHTML = "";
    let postModal = postForm(null);
    postModalDiv.append(postModal);
    showModal();
  });
}

function deletePostModal(id) {
  let modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  let modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  let modalTitle = document.createElement("h2");
  modalTitle.innerText = "Confirmação de exclusão";

  let closeModalButton = document.createElement("button");
  closeModalButton.innerText = "X";
  closeModalButton.classList.add("close-modal-button");
  closeModalButton.addEventListener("click", closeModal);

  let deleteTitle = document.createElement("h1");
  deleteTitle.innerText = "Tem certeza que deseja excluir este post?";

  let deleteInfo = document.createElement("p");
  deleteInfo.innerText =
    "Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir";

  let buttonsModalDiv = document.createElement("div");
  buttonsModalDiv.classList.add("buttons-modal-div-delete");

  let cancelButtonModal = document.createElement("button");
  cancelButtonModal.innerText = "Cancelar";
  cancelButtonModal.classList.add("cancel-button-modal");
  cancelButtonModal.addEventListener("click", closeModal);

  let deleteButtonModal = document.createElement("button");
  deleteButtonModal.innerText = "Sim, excluir este post";
  deleteButtonModal.classList.add("delete-button-modal");
  deleteButtonModal.addEventListener("click", () => {
    deletePost(id);
  });

  buttonsModalDiv.append(cancelButtonModal, deleteButtonModal);
  modalHeader.append(modalTitle, closeModalButton);
  modalContent.append(modalHeader, deleteTitle, deleteInfo, buttonsModalDiv);

  return modalContent;
}

function showModal() {
  const postModalDialog = document.querySelector("#dialog");
  postModalDialog.showModal();
}

function closeModal() {
  const postModalDialog = document.querySelector("#dialog");
  postModalDialog.close();
}

function dropdownMenu() {
  const userMenu = document.querySelector("#dropdown-menu");
  userMenu.addEventListener("click", () => {
    let menuContent = document
      .querySelector("#menu-content")
      .classList.toggle("display-none");
  });
}

function createDropdownMenu() {
  let menuContent = document.createElement("div");
  menuContent.classList.add("menu-content", "display-none");
  menuContent.id = "menu-content";

  let username = document.createElement("p");
  username.innerText = `@${user.username}`;

  let logoutButton = document.createElement("button");
  let logoutImg = document.createElement("img");
  logoutImg.src = "../assets/sign-out-alt.png";
  let logoutText = document.createElement("span");
  logoutText.innerText = "Sair da conta";
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.replace("../index.html");
  });

  logoutButton.append(logoutImg, logoutText);
  menuContent.append(username, logoutButton);

  let dropdownButton = document.querySelector("#dropdown-menu");
  dropdownButton.append(menuContent);
}

getUser();
getCreatePostButton();
dropdownMenu();
