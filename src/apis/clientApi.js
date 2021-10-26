import { create } from 'apisauce';

const clientApi = create({
  baseURL: 'https://herokupiclist.herokuapp.com',
});

export default clientApi;
