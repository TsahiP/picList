import picListApi from '../apis/picListApi';

const handleGetPicList = async () => {
  const response = await picListApi.getPicList();
  if (!response.ok) return response.data;
  return response.data;
};

export default { handleGetPicList };
