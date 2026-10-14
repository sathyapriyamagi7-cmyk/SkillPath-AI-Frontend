const API_BASE_URL = "http://localhost:8080/api";

export async function getUsers() {
  const response = await fetch(`${API_BASE_URL}/user-data`);
  if (!response.ok) {
    throw new Error("Unable to fetch users from the backend.");
  }
  return response.json();
}

export async function getSkills() {
  const response = await fetch(`${API_BASE_URL}/skills`);
  if (!response.ok) {
    throw new Error("Unable to load skills.");
  }
  return response.json();
}

export async function saveSkill(skill) {
  const response = await fetch(`${API_BASE_URL}/skills`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(skill),
  });
  if (!response.ok) {
    throw new Error("Unable to save skill.");
  }
  return response.json();
}

export async function updateSkill(id, skill) {
  const response = await fetch(`${API_BASE_URL}/skills/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(skill),
  });
  if (!response.ok) {
    throw new Error("Unable to update skill.");
  }
  return response.json();
}

export async function getProfile() {
  const response = await fetch(`${API_BASE_URL}/profile`);
  if (!response.ok) {
    throw new Error("Unable to load profile.");
  }
  return response.json();
}

export async function saveProfile(profile) {
  const response = await fetch(`${API_BASE_URL}/profile`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profile),
  });
  if (!response.ok) {
    throw new Error("Unable to save profile.");
  }
  return response.json();
}

export async function registerUser(user) {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Registration failed.");
  return data;
}

export async function loginUser(credentials) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Login failed.");
  return data;
}