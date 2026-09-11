// ============================================================
// API SERVICE
// ============================================================
// Thin wrapper around fetch() for talking to the Spring Boot
// backend. All endpoints are public GET endpoints — no auth
// headers or tokens are involved anywhere in this file.
// ============================================================

import businessConfig from '../config/businessConfig';

const BASE_URL = businessConfig.API_BASE_URL;

async function getJson(path) {
  const response = await fetch(`${BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${path}`);
  }

  return response.json();
}

export function fetchBusinessInfo() {
  return getJson('/business');
}

export function fetchServices() {
  return getJson('/services');
}

export function fetchServiceById(id) {
  return getJson(`/services/${id}`);
}

export function fetchAllPackages() {
  return getJson('/packages');
}

export function fetchHourlyPackages() {
  return getJson('/packages/hourly');
}

export function fetchMonthlyPackages() {
  return getJson('/packages/monthly');
}

export function fetchVehicleCategories() {
  return getJson('/vehicle-categories');
}
