import {
  listAllCompanies,
  listAllSectors,
  listCompaniesBySector,
} from "./requests.js";

function menuButton() {
  const button = document.querySelector(".button-open");
  button.addEventListener("click", () => {
    let buttons = document.querySelector(".header-buttons-show");
    buttons.classList.toggle("show");
    let btnImg = document.querySelector(".menu-button-img");
    if (buttons.classList.contains("show") == true) {
      btnImg.src = "./assets/x.png";
    } else {
      btnImg.src = "./assets/menu.png";
    }
  });
}

function buttons() {
  const signInHeader = document.querySelector("#header-button-signin");
  const signUpHeader = document.querySelector("#header-button-signup");
  signInHeader.addEventListener("click", signInRedirect);
  signUpHeader.addEventListener("click", signUpRedirect);
}

function signInRedirect() {
  window.location.replace("../../../S7-01-M2/front-end/pages/signIn.html");
}

function signUpRedirect() {
  window.location.replace("../../../S7-01-M2/front-end/pages/signUp.html");
}

async function getSectors() {
  let sectorSelect = document.querySelector("#sector-filter");

  let sectors = await listAllSectors();
  sectors.forEach((sector) => {
    let option = document.createElement("option");
    option.value = sector.description;
    option.innerText = sector.description;
    sectorSelect.append(option);
  });
  sectorSelect.addEventListener("change", getCompaniesBySector);
}

async function getCompaniesBySector(event) {
  let companies = await listCompaniesBySector(event.target.value);
  let renderCompanies = document.querySelector("#companies-list");
  renderCompanies.innerHTML = "";
  companies.forEach((company) => {
    let list = createCompanyCard(company);
    renderCompanies.append(list);
  });
}

async function getCompanies() {
  let renderCompanies = document.querySelector("#companies-list");
  renderCompanies.innerHTML = "";
  let companies = await listAllCompanies();
  companies.forEach((company) => {
    let list = createCompanyCard(company);
    renderCompanies.append(list);
  });
}

function createCompanyCard(company) {
  let companiesList = document.createElement("li");

  let companyCard = document.createElement("div");
  companyCard.classList.add("card");

  let companyName = document.createElement("h5");
  companyName.innerText = company.name;

  let openingHours = document.createElement("p");
  openingHours.innerText = company.opening_hours;

  let sector = document.createElement("p");
  sector.innerText = company.sectors.description;
  sector.classList.add("white-button", "round");

  companyCard.append(companyName, openingHours, sector);
  companiesList.append(companyCard);
  return companiesList;
}

menuButton();
buttons();
getSectors();
getCompanies();
