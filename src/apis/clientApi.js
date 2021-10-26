import { create } from 'apisauce';

const clientApi = create({
  baseURL: 'http://localhost:3000',
});

export default clientApi;
