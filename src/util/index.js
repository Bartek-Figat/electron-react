import { create } from 'axios';

export const instance = create({
  baseURL: 'http://localhost:8080/',
});
