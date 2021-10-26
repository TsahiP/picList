import clientApi from './clientApi';

const END_POINT = '/api/pic_list';
const getPicList = () => {
  return clientApi.get(END_POINT);
};
export default { getPicList };
