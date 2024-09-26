import { getToken } from '@/utils/credentials';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import * as CryptoJS from 'crypto-js';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const SECRET_KEY = CryptoJS.enc.Hex.parse(
  process.env.ENCRYPT_SECRET_KEY || '0123456789abcdef0123456789abcdef' // 256-bit key in hex
);

const IV = CryptoJS.enc.Hex.parse(
  process.env.ENCRYPT_IV || 'abcdef9876543210abcdef9876543210' // 16-byte IV in hex
);

// Helper function to encrypt data
function encrypt(data: any) {
  const encrypted = CryptoJS.AES.encrypt(data, SECRET_KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString();
}

// Helper function to decrypt data
function decrypt(data: any) {
  const decrypted = CryptoJS.AES.decrypt(data, SECRET_KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}

// Handle response body
const responseBody = (response: AxiosResponse) => {
  if (response.data) {
    try {
      const decryptedData = decrypt(response.data.payload);

      response.data = JSON.parse(decryptedData);
      
    } catch (error) {
      console.error('Error decrypting data:', error);
    }
  }

  return response.data;
};

// Request interceptor for encryption
axios.interceptors.request.use(
  async (config) => {
    const token = await getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.data) {
      try {
        const encryptedData = encrypt(JSON.stringify(config.data));

        config.data = { payload: encryptedData };
      } catch (error) {
        console.error('Error encrypting data:', error);
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  async (response) => response,
  async (err) => {
    if (!err.response) {
      return Promise.reject(err.response);
    }

    const { data, status } = err.response;

    if (status === 401) {
      // await logout();
    }

    return Promise.reject(err.response);
  }
);

const request = {
  get: (url: string, params?: any) =>
    axios.get(url, { params }).then(responseBody),
  post: (url: string, body?: any) => axios.post(url, body).then(responseBody),
  upload: (url: string, body?: any) =>
    axios
      .post(url, body, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(responseBody),
  put: (url: string, body: any) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.post(url).then(responseBody),
};

export default request;
