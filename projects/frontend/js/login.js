// If already logged in, skip straight to the dashboard
if (Auth.isLoggedIn()) {
  window.location.href = "index.html";
}

const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");
const loginBtn = document.getElementById("loginBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorMsg.className = "error-msg";

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  loginBtn.disabled = true;
  loginBtn.textContent = "Signing in...";

  try {
    const data = await Api.login(username, password);
    Auth.save(data.access_token, data.role, data.username);
    window.location.href = "index.html";
  } catch (err) {
    errorMsg.textContent = err.message || "Login failed. Check your credentials.";
    errorMsg.className = "error-msg show";
  } finally {
    loginBtn.disabled = false;
    loginBtn.textContent = "Log in";
  }
});
