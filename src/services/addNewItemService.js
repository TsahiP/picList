import addPicApi from '../apis/addPicApi';

const handlePostNewItem = async pic => {
  const response = await addPicApi.addNewPic(pic);
  if (!response.ok) return response.data;
  return response.data;
};

export default { handlePostNewItem };
