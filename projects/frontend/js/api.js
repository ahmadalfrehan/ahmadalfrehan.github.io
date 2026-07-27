// Change this if your backend runs somewhere other than localhost:8000
const API_BASE = "http://localhost:8000/api";

const Auth = {
  getToken() { return localStorage.getItem("cb_token"); },
  getRole() { return localStorage.getItem("cb_role"); },
  getUsername() { return localStorage.getItem("cb_username"); },
  isLoggedIn() { return !!this.getToken(); },
  isAdmin() { return this.getRole() === "admin"; },
  save(token, role, username) {
    localStorage.setItem("cb_token", token);
    localStorage.setItem("cb_role", role);
    localStorage.setItem("cb_username", username);
  },
  clear() {
    localStorage.removeItem("cb_token");
    localStorage.removeItem("cb_role");
    localStorage.removeItem("cb_username");
  },
  requireLogin() {
    if (!this.isLoggedIn()) window.location.href = "login.html";
  },
};

async function apiRequest(path, { method = "GET", body = null, isForm = false } = {}) {
  const headers = {};
  const token = Auth.getToken();
  if (token) headers["Authorization"] = `Bearer ${token}`;
  if (body && !isForm) headers["Content-Type"] = "application/json";

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? (isForm ? body : JSON.stringify(body)) : undefined,
  });

  if (res.status === 401) {
    Auth.clear();
    window.location.href = "login.html";
    throw new Error("Session expired. Please log in again.");
  }

  if (!res.ok) {
    let detail = `Request failed (${res.status})`;
    try {
      const data = await res.json();
      if (data.detail) detail = typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail);
    } catch (_) { /* no JSON body */ }
    throw new Error(detail);
  }

  if (res.status === 204) return null;

  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) return res.json();
  return res;
}

const Api = {
  login: (username, password) =>
    apiRequest("/login", { method: "POST", body: { username, password } }),

  getDashboard: () => apiRequest("/dashboard"),

  getTransactions: (params = {}) => {
    const q = new URLSearchParams(params).toString();
    return apiRequest(`/transactions${q ? `?${q}` : ""}`);
  },

  deposit: (payload) =>
    apiRequest("/transactions/deposit", { method: "POST", body: payload }),

  withdraw: (payload) =>
    apiRequest("/transactions/withdraw", { method: "POST", body: payload }),

  updateTransaction: (id, payload) =>
    apiRequest(`/transactions/${id}`, { method: "PUT", body: payload }),

  deleteTransaction: (id) =>
    apiRequest(`/transactions/${id}`, { method: "DELETE" }),

  exportCsvUrl: (params = {}) => {
    const q = new URLSearchParams(params).toString();
    return `${API_BASE}/transactions/export/csv${q ? `?${q}` : ""}`;
  },
};

function showToast(message, type = "success") {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = message;
  el.className = `show ${type}`;
  clearTimeout(el._timer);
  el._timer = setTimeout(() => { el.className = ""; }, 3500);
}

function formatMoney(n) {
  return Number(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function renderTopbar(activePage) {
  const el = document.getElementById("topbar");
  if (!el) return;
  const role = Auth.getRole();
  const username = Auth.getUsername();
  el.innerHTML = `
    <div class="brand">💰 Cash Box</div>
    <nav>
      <a href="index.html" class="${activePage === "dashboard" ? "active" : ""}">Dashboard</a>
      <a href="transactions.html" class="${activePage === "transactions" ? "active" : ""}">Transactions</a>
    </nav>
    <div class="user-info">
      <span>${username}</span>
      <span class="role-badge ${role}">${role}</span>
      <button class="btn btn-sm" id="logoutBtn">Log out</button>
    </div>
  `;
  document.getElementById("logoutBtn").addEventListener("click", () => {
    Auth.clear();
    window.location.href = "login.html";
  });
}
