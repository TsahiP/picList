import clientApi from './clientApi';
const END_POINT = '/api/pic_list';
const deleteItem = id => {
  console.log(id);

  return clientApi.delete(END_POINT + '/' + id);
};
export default { deleteItem };
