import React from 'react';
import { container } from '../styles/PicRow.css';
import PicListContext from '../context/PicListContext';
import deleteItemService from '../services/deleteItemService';
const PicRow = ({ itemName, id }) => {
  const handleDelete = () => {
    const response = deleteItemService.handleDeleteService(parseInt(id));
    console.log(response);
  };
  return (
    <div key={id} className='container'>
      <div>
        <div>{itemName}</div>
        <div className='ui vertical animated button' onClick={handleDelete}>
          <div className='hidden content'>Delete</div>
          <div className='visible content'>
            <i className='trash alternate icon'></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PicRow;
