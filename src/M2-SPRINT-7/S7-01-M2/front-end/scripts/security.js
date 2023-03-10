import { verifyUserType } from "./requests.js";

export function validateUser() {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    verifyUserType();
  } else {
    window.location.replace("../index.html");
  }
}
