const API_URL = "http://127.0.0.1:8000";

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getServices() {
  const response = await fetch(`${API_URL}/services`);

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  return response.json();
}