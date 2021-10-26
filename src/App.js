import React, { useState, useEffect } from 'react';
import picListService from './services/picListService';
import PicListContext from './context/PicListContext';
import PicList from './components/PicList';
import AddItem from './components/AddItem';
import ShopHeader from './components/ShopHeader';
const App = () => {
  const [picList, setPicList] = useState();
  useEffect(() => {
    loadPicList();
  }, [picList]);
  const loadPicList = async () => {
    const response = await picListService.handleGetPicList();
    // console.log(response);
    setPicList(response);
  };

  return (
    <PicListContext.Provider value={{ picList }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <ShopHeader className='App-header' />
          <PicList />
          <AddItem />
        </div>
      </div>
    </PicListContext.Provider>
  );
};

export default App;
