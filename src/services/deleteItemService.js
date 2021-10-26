import deleteItemApi from '../apis/deleteItemApi';

const handleDeleteService = async id => {
  const response = await deleteItemApi.deleteItem(id);
  if (!response.ok) return response.data;
  return response.data;
};

export default { handleDeleteService };
