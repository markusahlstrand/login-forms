const elements = {
  loginForm: "loginForm"
};

async function init() {
  try {
    const loginForm = document.getElementById(elements.loginForm);
    loginForm.onsubmit = login;
  } catch (err) {
    console.log("Error: " + err.messsage);
  }
}

window.onload = init;
