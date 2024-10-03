// src/WebAuthn.js

import {
  startRegistration,
  startAuthentication,
  verifyRegistrationResponse,
  verifyAuthenticationResponse,
} from '@simplewebauthn/browser';
import AuthService from './AuthService';

const WebAuthn = {
  async registerUser() {
    const options = await AuthService.getRegistrationOptions();

    const registrationResponse = await startRegistration(options);
    debugger
    // const attResp = await startRegistration(options);
    const verificationResponse = await AuthService.register(registrationResponse);

    if (verificationResponse.ok) {
      alert('Registration successful!');
    } else {
      alert('Registration failed.');
    }
  },

  async authenticateUser() {
    const options = await AuthService.getAuthenticationOptions();

    const authenticationResponse = await startAuthentication(options);
    const verificationResponse = await AuthService.authenticate(authenticationResponse);

    if (verificationResponse.authenticated) {
      alert('Authentication successful!');
    } else {
      alert('Authentication failed.');
    }
  },
};

export default WebAuthn;
