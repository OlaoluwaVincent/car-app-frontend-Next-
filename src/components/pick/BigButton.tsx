import React from 'react';
import { FaUpDown } from 'react-icons/fa6';

const BigButton = () => {
  const shadow =
    'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px';
  return (
    <div
      className='rounded-lg flex-shrink-0 p-2 bg-blue-500 w-max h-max'
      style={{
        boxShadow: shadow,
      }}
    >
      <FaUpDown
        size={'30px'}
        className='cursor-pointer'
        style={{ fill: 'white' }}
      />
    </div>
  );
};
export default BigButton;
