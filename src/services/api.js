//const API_URL = "http://localhost:5000/api/candidates";
const API_URL = "https://prueba-tecnica-backend-sp.onrender.com/api/candidates";
export async function getCandidates() {
  const response = await fetch(API_URL);
  return await response.json();
}

export async function createCandidate({ data }) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function updateCandidate({ id, newCandidate }) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCandidate),
  });
  return await response.json();
}

export async function deleteCandidate({ id }) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return await response.json();
}
