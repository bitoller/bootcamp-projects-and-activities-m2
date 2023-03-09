import { createSnackbar } from "./snackbar.js";

const url = "http://localhost:6278";
let token = JSON.parse(localStorage.getItem("token"));

export async function signUp(username, password, email, seniority) {
  let user = {
    username: username,
    password: password,
    email: email,
    professional_level: seniority,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  await fetch(`${url}/auth/register`, options)
    .then((response) => response.json())
    .then((response) => {
      if (response.hasOwnProperty("error")) {
        createSnackbar(response.error, true);
      } else {
        createSnackbar("sign up successful!", false);
        setTimeout(() => {
          window.location.replace("../pages/signIn.html");
        }, 2000);
      }
    })
    .catch((err) => createSnackbar(err.error, true));
}

export async function signIn(email, password) {
  let user = {
    email: email,
    password: password,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  await fetch(`${url}/auth/login`, options)
    .then((response) => response.json())
    .then((response) => {
      if (response.hasOwnProperty("error")) {
        createSnackbar(response.error, true);
      } else {
        createSnackbar("sign in successful!", false);
        localStorage.setItem("token", JSON.stringify(response.token));
        token = response.token;
        verifyUserType();
      }
    })
    .catch((err) => createSnackbar(err.error, true));
}

export async function listAllCompanies() {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  let companies = [];
  try {
    companies = await fetch(`${url}/companies`, options);
    if (!companies.ok) {
      createSnackbar(companies.json().error, true);
    }
    return companies.json();
  } catch (error) {
    createSnackbar(error.error, true);
  }

  return companies;
}

export async function listCompaniesBySector(sector) {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  let companies = [];
  try {
    companies = await fetch(`${url}/companies/${sector}`, options);
    return companies.json();
  } catch (error) {
    console.log(error);
  }

  return companies;
}

export async function listAllSectors() {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  let sectors = [];
  try {
    sectors = await fetch(`${url}/sectors`, options);
    return sectors.json();
  } catch (error) {
    console.log(error);
  }

  return sectors;
}

export async function employeeInfo() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  let info = {};
  try {
    info = await fetch(`${url}/users/profile`, options);
    return info.json();
  } catch (error) {
    console.log(error);
  }

  return info;
}

export async function listSameDeptEmployees() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  let coworkers = [];
  try {
    coworkers = await fetch(`${url}/users/departments/coworkers`, options);
    return coworkers.json();
  } catch (error) {
    console.log(error);
  }

  return coworkers;
}

export async function listUserDept() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  let dpt = {};
  try {
    dpt = await fetch(`${url}/users/departments`, options);
    return dpt.json();
  } catch (error) {
    console.log(error);
  }

  return dpt;
}

export async function attEmployeeInfo(username, password, email) {
  let user = {
    username: username,
    password: password,
    email: email,
  };

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(user),
  };

  let employee = {};
  try {
    employee = await fetch(`${url}/users`, options);
    if (!employee.ok) {
      createSnackbar("fill in the fields correctly!", true);
      return null;
    }
    createSnackbar("update successful!", false);
    return employee.json();
  } catch (error) {
    createSnackbar(error.error, true);
  }

  return employee;
}

export async function verifyUserType() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  await fetch(`${url}/auth/validate_user`, options)
    .then((response) => response.json())
    .then((response) => {
      if (response.hasOwnProperty("erro")) {
        createSnackbar(response.erro, true);
        setTimeout(() => {
          window.location.replace("../../index.html");
        }, 2000);
      }
      if (response.is_admin) {
        if (!window.location.pathname.includes("dashboardAdm")) {
          setTimeout(() => {
            window.location.replace("../pages/dashboardAdm.html");
          }, 2000);
        }
      } else {
        if (!window.location.pathname.includes("dashboardUser")) {
          setTimeout(() => {
            window.location.replace("../pages/dashboardUser.html");
          }, 2000);
        }
      }
    })
    .catch((err) => createSnackbar(err.error, true));
}

async function admRegisterCompany(name, time, description, sector) {
  let company = {
    name: name,
    opening_hours: time,
    description: description,
    sector_uuid: sector,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(company),
  };

  await fetch(`${url}/companies`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => createSnackbar(err.error, true));
}

export async function admListAllDept() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  let dpts = [];
  try {
    dpts = await fetch(`${url}/departments`, options);
    return dpts.json();
  } catch (error) {
    console.log(error);
  }

  return dpts;
}

export async function admListAllCompanyDept(id) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  let dpts = [];
  try {
    dpts = await fetch(`${url}/departments/${id}`, options);
    return dpts.json();
  } catch (error) {
    console.log(error);
  }

  return dpts;
}

export async function admCreateDept(name, description, id) {
  let company = {
    name: name,
    description: description,
    company_uuid: id,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(company),
  };

  await fetch(`${url}/departments`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => createSnackbar(err.error, true));
}

export async function admHireEmployee(userId, deptId) {
  let employee = {
    user_uuid: userId,
    department_uuid: deptId,
  };

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(employee),
  };

  let user = {};

  try {
    user = await fetch(`${url}/departments/hire`, options);
    if (!user.ok) {
      createSnackbar("something went wrong!", true);
    } else {
      createSnackbar("hire successful!", false);
    }
  } catch (error) {
    createSnackbar(error.error, true);
  }
}

export async function admFireEmployee(id) {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  let user = {};

  try {
    user = await fetch(`${url}/departments/dismiss/${id}`, options);
    if (!user.ok) {
      createSnackbar("something went wrong!", true);
    } else {
      createSnackbar("fire successful!", false);
    }
  } catch (error) {
    createSnackbar(error.error, true);
  }
}

export async function admEditDept(id, description) {
  let dept = {
    description: description,
  };

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(dept),
  };

  let dpt = {};
  try {
    dpt = await fetch(`${url}/departments/${id}`, options);
    if (!dpt.ok) {
      createSnackbar("fill in the fields correctly!", true);
      return null;
    }
    createSnackbar("update successful!", false);
    return dpt.json();
  } catch (error) {
    createSnackbar(error.error, true);
  }
}

export async function admDeleteDept(id) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  let dpt = {};

  try {
    dpt = await fetch(`${url}/departments/${id}`, options);
    if (!dpt.ok) {
      createSnackbar("something went wrong!", true);
    } else {
      createSnackbar("delete successful!", false);
    }
  } catch (error) {
    createSnackbar(error.error, true);
  }
}

export async function admListAllUsers() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  let users = [];
  try {
    users = await fetch(`${url}/users`, options);
    return users.json();
  } catch (error) {
    console.log(error);
  }

  return users;
}

export async function admListOpenForWorkUsers() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  let users = [];
  try {
    users = await fetch(`${url}/admin/out_of_work`, options);
    return users.json();
  } catch (error) {
    console.log(error);
  }

  return users;
}

export async function admAttEmployeeInfo(id, work, seniority) {
  let user = {
    kind_of_work: work,
    professional_level: seniority,
  };

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(user),
  };

  let employees = [];

  try {
    employees = await fetch(`${url}/admin/update_user/${id}`, options);
    if (!employees.ok) {
      createSnackbar("fill in the fields correctly!", true);
      return null;
    }
    createSnackbar("update successful!", false);
    return employees.json();
  } catch (error) {
    createSnackbar(error.error, true);
  }
  return employees;
}

export async function admDeleteUser(id) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  let user = {};

  try {
    user = await fetch(`${url}/admin/delete_user/${id}`, options);
    if (!user.ok) {
      createSnackbar("something went wrong!", true);
    } else {
      createSnackbar("delete successful!", false);
    }
  } catch (error) {
    createSnackbar(error.error, true);
  }
}
