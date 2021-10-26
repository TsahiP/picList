import clientApi from './clientApi';

const END_POINT = '/api/pic_list';

const addNewPic = pic => {
  return clientApi.post(END_POINT, pic);
};
export default { addNewPic };
