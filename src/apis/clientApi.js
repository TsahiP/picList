import { create } from 'apisauce';

const clientApi = create({
  baseURL: 'http://cs.cbtgroup.ml:27015/',
});

export default clientApi;
