import React, { useContext } from 'react';
import PicListContext from '../context/PicListContext';
import PicRow from './PicRow';
const PicList = () => {
  const { picList } = useContext(PicListContext);
  return (
    <div>
      {picList
        ? picList.map(pic => {
            return <PicRow itemName={pic.itemName} id={pic.id} />;
          })
        : console.log('dont have')}
    </div>
  );
};
export default PicList;
