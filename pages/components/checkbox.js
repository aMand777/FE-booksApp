import React from 'react';

const CheckBox = ({ checked, onChange, ...rest }) => {

return (
  <div className='relative inline-block w-9 h-6'>
    <input
      type='checkbox'
      className='opacity-0 z-50 h-6 w-9 absolute'
      checked={checked}
      onChange={onChange}
      {...rest}
    />
    <div className={`block rounded-full h-5 w-9 ${checked ? 'bg-indigo-700' : 'bg-white'}`}>
      <div className={`absolute w-6 h-5 rounded-full bg-slate-300 ${checked ? 'right-0' : 'left-0'} transition-transform duration-200 transform ${checked ? 'translate-x-0' : 'translate-x-0'}`}></div>
    </div>
  </div>
);
};

export default CheckBox;