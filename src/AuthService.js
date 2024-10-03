// src/AuthService.js

const API_BASE_URL = 'http://localhost:3000';

const AuthService = {
  async getRegistrationOptions() {
    const response = await fetch(`${API_BASE_URL}/webauthn/register/options`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    });
    return response.json();
  },

  async register(credential) {
    const response = await fetch(`${API_BASE_URL}/webauthn/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ credential }),
    });
    return response;
  },

  async getAuthenticationOptions() {
    const response = await fetch(`${API_BASE_URL}/webauthn/authenticate/options`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    });
    return response.json();
  },

  async authenticate(credential) {
    const response = await fetch(`${API_BASE_URL}/webauthn/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ credential }),
    });
    return response.json();
  },
};

export default AuthService;