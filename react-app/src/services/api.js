const API_BASE_URL = 'http://localhost:8080/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      Accept: 'application/json',
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers
    },
    ...options
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || `Request failed with status ${response.status}`);
  }

  return data;
}

export function submitVolunteer(volunteer) {
  return request('/volunteers', {
    method: 'POST',
    body: JSON.stringify(volunteer)
  });
}

export function submitContactMessage(message) {
  return request('/contact', {
    method: 'POST',
    body: JSON.stringify(message)
  });
}

export function fetchEvents() {
  return request('/events');
}

export function fetchPrograms() {
  return request('/programs');
}
