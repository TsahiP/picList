import React, { useState } from 'react';
import addNewItemService from '../services/addNewItemService';
const AddItem = () => {
  const [NewItem, setNewItem] = useState({ itemName: '' });
  const handleChange = e => {
    setNewItem({ itemName: e.target.value });
    console.log(NewItem);
  };

  const handleClick = () => {
    addNewItemService.handlePostNewItem(NewItem);
    setNewItem({ itemName: '' });
  };

  return (
    <div>
      Add new item
      <div className='ui input focus'>
        <input
          type='text'
          name='itemName'
          value={NewItem.itemName}
          placeholder='Search...'
          onChange={e => handleChange(e)}
        />
      </div>
      <button className='ui primary button' onClick={handleClick}>
        Save
      </button>
    </div>
  );
};

export default AddItem;
