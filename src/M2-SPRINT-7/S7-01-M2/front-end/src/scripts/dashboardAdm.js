import {
  admAttEmployeeInfo,
  admCreateDept,
  admDeleteDept,
  admDeleteUser,
  admEditDept,
  admFireEmployee,
  admHireEmployee,
  admListAllCompanyDept,
  admListAllDept,
  admListAllUsers,
  admListOpenForWorkUsers,
  listAllCompanies,
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
      window.location.replace("../../index.html");
    }, 2000);
  });
}

async function getSelectCompanies() {
  let companies = await listAllCompanies();
  let allDpts = document.querySelector("#all-dpts");
  allDpts.innerHTML = "";

  let companySelector = document.querySelector("#select-company");
  companySelector.innerHTML = "";

  let defaultOption = document.createElement("option");
  defaultOption.innerText = "Selecionar Empresa";
  defaultOption.value = "";

  companySelector.append(defaultOption);

  companySelector.addEventListener("change", async (event) => {
    let companyDpt = [];
    if (event.target.value != "") {
      companyDpt = await admListAllCompanyDept(event.target.value);
    } else {
      companyDpt = await admListAllDept();
    }
    await showAllDptCards(companyDpt);
  });

  companies.forEach((company) => {
    let companyOption = document.createElement("option");
    companyOption.innerText = company.name;
    companyOption.value = company.uuid;
    companySelector.append(companyOption);
  });
}

async function getCreateDpt() {
  let createDptButton = document.querySelector("#create-dpt");
  createDptButton.addEventListener("click", () => {
    createDptModal();
  });
}

async function createDptCard(dpt) {
  let dptCard = document.createElement("li");
  dptCard.classList.add("dpt-card");

  let dptName = document.createElement("h5");
  dptName.innerText = dpt.name;

  let dptDescription = document.createElement("p");
  dptDescription.innerText = dpt.description;

  let companyName = document.createElement("p");
  if (dpt.uuid != null) {
    let allDpts = await admListAllDept();
    let filteredDpt = allDpts.find((department) => department.uuid == dpt.uuid);
    if (filteredDpt != undefined) {
      companyName.innerText = filteredDpt.companies.name;
    }
  }

  let dptButtons = document.createElement("div");
  dptButtons.classList.add("dpt-all-buttons");

  let dptViewButton = document.createElement("button");

  let dptViewButtonImg = document.createElement("img");
  dptViewButtonImg.src = "../assets/visibility.png";
  dptViewButton.addEventListener("click", () => {
    dptModal(dpt);
  });

  let dptEditButton = document.createElement("button");

  let dptEditButtonImg = document.createElement("img");
  dptEditButtonImg.src = "../assets/editblack.png";
  dptEditButton.addEventListener("click", async () => {
    editDptModal(dpt);
  });

  let dptDeleteButton = document.createElement("button");
  let dptDeleteButtonImg = document.createElement("img");
  dptDeleteButtonImg.src = "../assets/trash.png";
  dptDeleteButton.addEventListener("click", async () => {
    deleteDptModal(dpt.uuid, dpt.name);
  });

  dptDeleteButton.append(dptDeleteButtonImg);
  dptEditButton.append(dptEditButtonImg);
  dptViewButton.append(dptViewButtonImg);
  dptButtons.append(dptViewButton, dptEditButton, dptDeleteButton);
  dptCard.append(dptName, dptDescription, companyName, dptButtons);

  return dptCard;
}

async function getAllUsers() {
  let allUsers = document.querySelector("#all-users");
  allUsers.innerHTML = "";
  let users = await admListAllUsers();
  let userList = document.createElement("ul");
  userList.classList.add("user-list");
  users.forEach(async (user) => {
    if (user.is_admin == false) {
      let userCard = document.createElement("li");
      userCard.classList.add("user-card");

      let userName = document.createElement("h5");
      userName.innerText = user.username;

      let userProfessionalLevel = document.createElement("p");
      userProfessionalLevel.innerText = user.professional_level;

      let userCompany = document.createElement("p");

      if (user.department_uuid != null) {
        let allDpts = await admListAllDept();
        let filteredDpt = allDpts.find(
          (department) => department.uuid == user.department_uuid
        );
        if (filteredDpt != undefined) {
          userCompany.innerText = filteredDpt.companies.name;
        }
      }

      let userButtons = document.createElement("div");
      userButtons.classList.add("user-all-buttons");

      let userEditButton = document.createElement("button");

      let userEditButtonImg = document.createElement("img");
      userEditButtonImg.src = "../assets/editpurple.png";
      userEditButton.addEventListener("click", () => {
        editUserModal(user.uuid);
      });

      let userDeleteButton = document.createElement("button");
      let userDeleteButtonImg = document.createElement("img");
      userDeleteButtonImg.src = "../assets/trash.png";
      userDeleteButton.addEventListener("click", () => {
        removeUserModal(user.uuid, user.username);
      });

      userDeleteButton.append(userDeleteButtonImg);
      userEditButton.append(userEditButtonImg);
      userButtons.append(userEditButton, userDeleteButton);
      userCard.append(
        userName,
        userProfessionalLevel,
        userCompany,
        userButtons
      );
      userList.append(userCard);
      allUsers.append(userList);
    }
  });
}

function editUserModal(id) {
  let dialog = document.querySelector("#dialog1");
  dialog.classList.add("dialog-edit-user");
  dialog.innerHTML = "";
  dialog.showModal();

  let dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog-content-edituser");

  let editUserTitle = document.createElement("h2");
  editUserTitle.innerText = "Editar Usuário";

  let closeModalButton = document.createElement("button");
  closeModalButton.classList.add("close-modal-button");
  let closeModalButtonImg = document.createElement("img");
  closeModalButtonImg.src = "../assets/x.png";
  closeModalButton.addEventListener("click", () => {
    dialog.close();
  });

  let inputForm = document.createElement("form");

  let selectKindOfWork = document.createElement("select");
  selectKindOfWork.id = "kofselect-input";
  selectKindOfWork.name = "kofselect-input";
  selectKindOfWork.classList.add("all-inputs");

  let kofoption1 = document.createElement("option");
  kofoption1.value = "";
  kofoption1.innerText = "Selecionar modalidade de trabalho";
  let kofoption2 = document.createElement("option");
  kofoption2.value = "home office";
  kofoption2.innerText = "Home Office";
  let kofoption3 = document.createElement("option");
  kofoption3.value = "presencial";
  kofoption3.innerText = "Presencial";
  let kofoption4 = document.createElement("option");
  kofoption4.value = "hibrido";
  kofoption4.innerText = "Hibrido";

  selectKindOfWork.append(kofoption1, kofoption2, kofoption3, kofoption4);

  let selectProfessionalLevel = document.createElement("select");
  selectProfessionalLevel.id = "plselect-input";
  selectProfessionalLevel.name = "plselect-input";
  selectProfessionalLevel.classList.add("all-inputs");

  let ploption1 = document.createElement("option");
  ploption1.value = "";
  ploption1.innerText = "Selecionar nível profissional";
  let ploption2 = document.createElement("option");
  ploption2.value = "estágio";
  ploption2.innerText = "Estágio";
  let ploption3 = document.createElement("option");
  ploption3.value = "júnior";
  ploption3.innerText = "Júnior";
  let ploption4 = document.createElement("option");
  ploption4.value = "pleno";
  ploption4.innerText = "Pleno";
  let ploption5 = document.createElement("option");
  ploption5.value = "sênior";
  ploption5.innerText = "Sênior";

  selectProfessionalLevel.append(
    ploption1,
    ploption2,
    ploption3,
    ploption4,
    ploption5
  );

  let editUserButton = document.createElement("button");
  editUserButton.innerText = "Editar";
  editUserButton.type = "submit";
  editUserButton.classList.add("purple-button", "button-width");
  editUserButton.addEventListener("click", async (event) => {
    event.preventDefault();
    let kofInput = document.querySelector("#kofselect-input").value;
    let plInput = document.querySelector("#plselect-input").value;
    await admAttEmployeeInfo(id, kofInput, plInput);
    getAllUsers();
    dialog.close();
  });

  inputForm.append(selectKindOfWork, selectProfessionalLevel, editUserButton);
  closeModalButton.append(closeModalButtonImg);
  dialogContent.append(editUserTitle, closeModalButton, inputForm);
  dialog.append(dialogContent);
}

function removeUserModal(id, name) {
  let dialog = document.querySelector("#dialog2");
  dialog.classList.add("dialog-remove-user");
  dialog.innerHTML = "";
  dialog.showModal();

  let dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog-content-removeuser");

  let editDeleteTitle = document.createElement("h2");
  editDeleteTitle.innerText = `Realmente deseja remover o usuário ${name}?`;

  let closeModalButton = document.createElement("button");
  closeModalButton.classList.add("close-modal-button");
  let closeModalButtonImg = document.createElement("img");
  closeModalButtonImg.src = "../assets/x.png";
  closeModalButton.addEventListener("click", () => {
    dialog.close();
  });

  let deleteUserButton = document.createElement("button");
  deleteUserButton.innerText = "Deletar";
  deleteUserButton.type = "submit";
  deleteUserButton.classList.add("green-button", "button-width");
  deleteUserButton.addEventListener("click", async (event) => {
    event.preventDefault();
    await admDeleteUser(id);
    getAllUsers();
    dialog.close();
  });

  closeModalButton.append(closeModalButtonImg);
  dialogContent.append(editDeleteTitle, closeModalButton, deleteUserButton);
  dialog.append(dialogContent);
}

async function dptModal(dpt) {
  let dialog = document.querySelector("#dialog3");
  dialog.classList.add("dialog-dpt");
  dialog.innerHTML = "";
  dialog.showModal();

  let dialogContent = document.createElement("div");
  dialogContent.id = "dpt-modal";
  dialogContent.classList.add("dialog-content-dpt");

  let createDptTitle = document.createElement("h2");
  createDptTitle.innerText = dpt.name;

  let closeModalButton = document.createElement("button");
  closeModalButton.classList.add("close-modal-button");
  let closeModalButtonImg = document.createElement("img");
  closeModalButtonImg.src = "../assets/x.png";
  closeModalButton.addEventListener("click", () => {
    dialog.close();
  });

  let modalHeaderDiv = document.createElement("div");
  modalHeaderDiv.classList.add("modal-header-div");

  let modalHeaderDivLeft = document.createElement("div");
  modalHeaderDivLeft.classList.add("modal-header-div-left");

  let dptDescription = document.createElement("h5");
  dptDescription.innerText = dpt.description;

  let companyDpt = document.createElement("p");
  companyDpt.innerText = dpt.companies.name;

  let modalHeaderDivRight = document.createElement("div");
  modalHeaderDivRight.classList.add("modal-header-div-right");

  let userSelect = document.createElement("select");
  userSelect.id = "user-select-input";
  userSelect.classList.add("all-inputs");
  await openForWorkOptions(userSelect);

  let hireButton = document.createElement("button");
  hireButton.innerText = "Contratar";
  hireButton.classList.add("green-button");
  hireButton.addEventListener("click", async () => {
    let userId = document.querySelector("#user-select-input").value;
    await admHireEmployee(userId, dpt.uuid);
    await updateHiredUser(dpt);
    let userSelect = document.querySelector("#user-select-input");
    await openForWorkOptions(userSelect);
  });

  let forHireDiv = document.createElement("div");
  forHireDiv.classList.add("for-hire-div");

  let forHireList = document.createElement("ul");
  forHireList.classList.add("for-hire-list");
  forHireList.id = "for-hire";
  let users = await admListAllUsers();
  users.forEach(async (user) => {
    if (user.department_uuid == dpt.uuid) {
      let hiredCard = await createHiredUsers(user, dpt.companies.uuid, dpt);
      forHireList.append(hiredCard);
    }
  });

  modalHeaderDivRight.append(userSelect, hireButton);
  modalHeaderDivLeft.append(dptDescription, companyDpt);
  modalHeaderDiv.append(modalHeaderDivLeft, modalHeaderDivRight);
  closeModalButton.append(closeModalButtonImg);
  forHireDiv.append(forHireList);
  dialogContent.append(
    createDptTitle,
    closeModalButton,
    modalHeaderDiv,
    forHireDiv
  );
  dialog.append(dialogContent);
}

async function createHiredUsers(user, companyId, dpt) {
  let forHireCards = document.createElement("li");
  forHireCards.classList.add("for-hire-cards");

  let userName = document.createElement("p");
  userName.innerText = user.username;

  let userProfessionalLevel = document.createElement("p");
  userProfessionalLevel.innerText = user.professional_level;

  let companyDpts = await admListAllCompanyDept(companyId);
  let userCompany = document.createElement("p");
  userCompany.innerText = companyDpts[0].companies.name;

  let fireButton = document.createElement("button");
  fireButton.id = "fire-button";
  fireButton.innerText = "Desligar";
  fireButton.classList.add("red-button");
  fireButton.addEventListener("click", async () => {
    await admFireEmployee(user.uuid);
    await updateHiredUser(dpt);
    let userSelect = document.querySelector("#user-select-input");
    await openForWorkOptions(userSelect);
  });

  forHireCards.append(userName, userProfessionalLevel, userCompany, fireButton);

  return forHireCards;
}

async function updateHiredUser(dpt) {
  let employees = document.querySelector("#for-hire");
  employees.innerHTML = "";

  let users = await admListAllUsers();
  users.forEach(async (user) => {
    if (user.department_uuid == dpt.uuid) {
      let hiredCard = await createHiredUsers(user, dpt.companies.uuid, dpt);
      employees.append(hiredCard);
    }
  });
}

async function openForWorkOptions(userSelect) {
  userSelect.innerHTML = "";
  let openForWorkUsers = await admListOpenForWorkUsers();
  let defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.innerText = "Selecionar usuário";
  userSelect.append(defaultOption);
  openForWorkUsers.forEach((user) => {
    let option = document.createElement("option");
    option.value = user.uuid;
    option.innerText = user.username;
    userSelect.append(option);
  });
}

async function showAllDptCards(companyDpt) {
  let allDpts = document.querySelector("#all-dpts");
  allDpts.innerHTML = "";

  let dptList = document.createElement("ul");
  dptList.classList.add("dpt-list");

  companyDpt.forEach(async (dpt) => {
    let dptCard = await createDptCard(dpt);
    dptList.append(dptCard);
  });
  allDpts.append(dptList);
}

async function allDepartments() {
  let companyDpt = await admListAllDept();
  await showAllDptCards(companyDpt);
}

async function createDptModal() {
  let dialog = document.querySelector("#dialog4");
  dialog.classList.add("dialog-create-dpt");
  dialog.innerHTML = "";
  dialog.showModal();

  let dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog-content-createdpt");

  let createDptTitle = document.createElement("h2");
  createDptTitle.innerText = "Criar Departamento";

  let closeModalButton = document.createElement("button");
  closeModalButton.classList.add("close-modal-button");
  let closeModalButtonImg = document.createElement("img");
  closeModalButtonImg.src = "../assets/x.png";
  closeModalButton.addEventListener("click", () => {
    dialog.close();
  });

  let inputForm = document.createElement("form");

  let dptName = document.createElement("input");
  dptName.type = "text";
  dptName.placeholder = "Nome do departamento";
  dptName.id = "dept-name-input";
  dptName.name = "dept-name-input";
  dptName.classList.add("all-inputs");

  let dptDescription = document.createElement("input");
  dptDescription.type = "text";
  dptDescription.placeholder = "Descrição";
  dptDescription.id = "dpt-description-input";
  dptDescription.name = "dpt-description-input";
  dptDescription.classList.add("all-inputs");

  let selectCompany = document.createElement("select");
  selectCompany.id = "company-select-input";
  selectCompany.name = "company-select-input";
  selectCompany.classList.add("all-inputs");

  let companies = await listAllCompanies();
  companies.forEach((company) => {
    let option = document.createElement("option");
    option.value = company.uuid;
    option.innerText = company.name;
    selectCompany.append(option);
  });
  let option = document.createElement("option");
  option.value = "";
  option.innerText = "Selecionar empresa";

  selectCompany.append(option);

  let createDptButton = document.createElement("button");
  createDptButton.innerText = "Criar o departamento";
  createDptButton.type = "submit";
  createDptButton.classList.add("purple-button", "button-width");
  createDptButton.addEventListener("click", async (event) => {
    event.preventDefault();
    let dptNameInput = document.querySelector("#dept-name-input").value;
    let dptDescriptionInput = document.querySelector(
      "#dpt-description-input"
    ).value;
    let selectInput = document.querySelector("#company-select-input").value;
    await admCreateDept(dptNameInput, dptDescriptionInput, selectInput);

    let allDpts = document.querySelector("#all-dpts");
    allDpts.innerHTML = "";

    let companySelector = document.querySelector("#select-company");
    companySelector.value = "";
    dialog.close();
  });

  inputForm.append(dptName, dptDescription, selectCompany);
  closeModalButton.append(closeModalButtonImg);
  dialogContent.append(
    createDptTitle,
    closeModalButton,
    inputForm,
    createDptButton
  );
  dialog.append(dialogContent);
}

function editDptModal(dpt) {
  let dialog = document.querySelector("#dialog5");
  dialog.classList.add("dialog-edit-dpt");
  dialog.innerHTML = "";
  dialog.showModal();

  let dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog-content-editdpt");

  let editDptTitle = document.createElement("h2");
  editDptTitle.innerText = "Editar Departamento";

  let closeModalButton = document.createElement("button");
  closeModalButton.classList.add("close-modal-button");
  let closeModalButtonImg = document.createElement("img");
  closeModalButtonImg.src = "../assets/x.png";
  closeModalButton.addEventListener("click", () => {
    dialog.close();
  });

  let inputForm = document.createElement("form");

  let description = document.createElement("textarea");
  description.value = dpt.description;
  description.placeholder = "Valores anteriores da descrição";
  description.id = "description-input";
  description.name = "description-input";
  description.classList.add("all-inputs");

  let editDptButton = document.createElement("button");
  editDptButton.innerText = "Salvar alterações";
  editDptButton.type = "submit";
  editDptButton.classList.add("purple-button", "button-width");
  editDptButton.addEventListener("click", async (event) => {
    event.preventDefault();
    let descriptionInput = document.querySelector("#description-input").value;
    await admEditDept(dpt.uuid, descriptionInput);
    let allDpts = document.querySelector("#all-dpts");
    allDpts.innerHTML = "";

    let companySelector = document.querySelector("#select-company");
    companySelector.value = "";
    await allDepartments();
    dialog.close();
  });

  closeModalButton.append(closeModalButtonImg);
  inputForm.append(description, editDptButton);
  dialogContent.append(editDptTitle, closeModalButton, inputForm);
  dialog.append(dialogContent);
}

function deleteDptModal(id, name) {
  let dialog = document.querySelector("#dialog6");
  dialog.classList.add("dialog-delete-dpt");
  dialog.innerHTML = "";
  dialog.showModal();

  let dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog-content-deletedpt");

  let editDeleteTitle = document.createElement("h2");
  editDeleteTitle.innerText = `Realmente deseja deletar o Departamento ${name} e demitir seus funcionários?`;

  let closeModalButton = document.createElement("button");
  closeModalButton.classList.add("close-modal-button");
  let closeModalButtonImg = document.createElement("img");
  closeModalButtonImg.src = "../assets/x.png";
  closeModalButton.addEventListener("click", () => {
    dialog.close();
  });

  let deleteDptButton = document.createElement("button");
  deleteDptButton.innerText = "Confirmar";
  deleteDptButton.type = "submit";
  deleteDptButton.classList.add("green-button", "button-width");
  deleteDptButton.addEventListener("click", async (event) => {
    event.preventDefault();
    await admDeleteDept(id);
    let allDpts = document.querySelector("#all-dpts");
    allDpts.innerHTML = "";

    let companySelector = document.querySelector("#select-company");
    companySelector.value = "";
    await allDepartments();
    dialog.close();
  });

  closeModalButton.append(closeModalButtonImg);
  dialogContent.append(editDeleteTitle, closeModalButton, deleteDptButton);
  dialog.append(dialogContent);
}

validateUser();
signOut();
getCreateDpt();
getSelectCompanies();
getAllUsers();
allDepartments();
