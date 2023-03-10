import {
  attEmployeeInfo,
  employeeInfo,
  listSameDeptEmployees,
  listUserDept,
} from "./requests.js";
import { validateUser } from "./security.js";
import { createSnackbar } from "./snackbar.js";
let token = JSON.parse(localStorage.getItem("token"));

function signOut() {
  let signoutButton = document.querySelector("#header-button-signout");
  signoutButton.addEventListener("click", () => {
    localStorage.removeItem("token");
    createSnackbar("you've been logged out!", false);
    setTimeout(() => {
      window.location.replace("../index.html");
    }, 2000);
  });
}

async function getEmployeeInfo() {
  let info = await employeeInfo();
  let userContainer = document.querySelector("#user-info");
  let userInfoContainer = userInfo(info);
  let editUserButton = editButton();

  userContainer.append(userInfoContainer, editUserButton);

  if (info.department_uuid != null) {
    let employees = await listSameDeptEmployees();
    let userCompanyDepts = await listUserDept();

    let companyInfo = document.querySelector("#company-info");
    companyInfo.innerHTML = "";
    companyInfo.classList.add("border-none");

    let companyInfoDiv = document.createElement("div");
    companyInfoDiv.classList.add("company-info-div");

    let companyName = document.createElement("h2");
    companyName.innerText = `${userCompanyDepts.name} - ${employees[0].name}`;
    companyName.classList.add("capitalize");

    let coworkersList = document.createElement("ul");
    coworkersList.classList.add("coworkers-list");

    employees[0].users.forEach((user) => {
      if (user.uuid != info.uuid) {
        let coworkers = document.createElement("li");
        coworkers.classList.add("coworker-card");

        let coworkerName = document.createElement("p");
        coworkerName.innerText = user.username;
        coworkerName.classList.add("capitalize");

        let coworkerProfessionalLevel = document.createElement("p");
        coworkerProfessionalLevel.innerText = user.professional_level;
        coworkerProfessionalLevel.classList.add("capitalize");

        coworkers.append(coworkerName, coworkerProfessionalLevel);
        coworkersList.append(coworkers);
      }
    });
    companyInfoDiv.append(companyName);
    companyInfo.append(companyInfoDiv, coworkersList);
  }
}

function userInfo(info) {
  let allInfoDiv = document.createElement("div");
  allInfoDiv.classList.add("all-info-div");

  let usernameDiv = document.createElement("div");
  usernameDiv.classList.add("username-div");

  let username = document.createElement("h2");
  username.innerText = info.username.toUpperCase();

  let infoDiv = document.createElement("div");
  infoDiv.classList.add("info-div");

  let email = document.createElement("p");
  email.innerText = `Email: ${info.email}`;

  infoDiv.append(email);

  let professionalLevel = document.createElement("p");
  if (info.professional_level != null) {
    professionalLevel.innerText = info.professional_level;
    professionalLevel.classList.add("capitalize");
    infoDiv.append(professionalLevel);
  }

  let kindOfWork = document.createElement("p");
  if (info.kind_of_work != null) {
    kindOfWork.innerText = info.kind_of_work;
    kindOfWork.classList.add("capitalize");
    infoDiv.append(kindOfWork);
  }

  usernameDiv.append(username);
  allInfoDiv.append(usernameDiv, infoDiv);

  return allInfoDiv;
}

function editButton() {
  let editInfoButton = document.createElement("button");
  editInfoButton.classList.add("edit-button");
  editInfoButton.addEventListener("click", () => {
    let dialog = document.querySelector("#dialog");
    dialog.innerHTML = "";
    dialog.showModal();

    let dialogContent = document.createElement("div");
    dialogContent.classList.add("dialog-content");

    let editProfileTitle = document.createElement("h2");
    editProfileTitle.innerText = "Editar Perfil";

    let closeModalButton = document.createElement("button");
    closeModalButton.classList.add("close-modal-button");
    let closeModalButtonImg = document.createElement("img");
    closeModalButtonImg.src = "../assets/x.png";
    closeModalButton.addEventListener("click", () => {
      dialog.close();
    });

    let inputForm = document.createElement("form");

    let editNameInput = document.createElement("input");
    editNameInput.type = "text";
    editNameInput.placeholder = "Seu nome";
    editNameInput.id = "editName";
    editNameInput.classList.add("all-inputs");

    let editEmailInput = document.createElement("input");
    editEmailInput.type = "email";
    editEmailInput.placeholder = "Seu e-mail";
    editEmailInput.id = "editEmail";
    editEmailInput.classList.add("all-inputs");

    let editPasswordInput = document.createElement("input");
    editPasswordInput.type = "password";
    editPasswordInput.placeholder = "Sua senha";
    editPasswordInput.id = "editPassword";
    editPasswordInput.classList.add("all-inputs");

    let editProfileButton = document.createElement("button");
    editProfileButton.innerText = "Editar perfil";
    editProfileButton.type = "submit";
    editProfileButton.classList.add("purple-button", "button-width");
    editProfileButton.addEventListener("click", async (event) => {
      event.preventDefault();
      let nameInput = document.querySelector("#editName").value;
      let emailInput = document.querySelector("#editEmail").value;
      let passwordInput = document.querySelector("#editPassword").value;
      let info = await attEmployeeInfo(nameInput, passwordInput, emailInput);

      if (info != null) {
        let userContainer = document.querySelector("#user-info");
        let userInfoContainer = userInfo(info);
        let editUserButton = editButton();
        userContainer.innerHTML = "";
        userContainer.append(userInfoContainer, editUserButton);
        dialog.close();
      }
    });

    inputForm.append(
      editNameInput,
      editEmailInput,
      editPasswordInput,
      editProfileButton
    );
    closeModalButton.append(closeModalButtonImg);
    dialogContent.append(editProfileTitle, closeModalButton, inputForm);
    dialog.append(dialogContent);
  });

  let infoButtonImg = document.createElement("img");
  infoButtonImg.src = "../assets/editpurple.png";
  infoButtonImg.classList.add("edit-button-img");

  editInfoButton.append(infoButtonImg);
  return editInfoButton;
}

validateUser();
signOut();
getEmployeeInfo();
