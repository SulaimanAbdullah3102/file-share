import React from 'react';
import PropTypes from 'prop-types';
import { CiTrash } from "react-icons/ci";

const Selectedplayer = ({ selectedplayer, handleremainingselectedplayer }) => {
  const { id, picture, name, batting_style,price } = selectedplayer;
  return (
    <div className='flex justify-between items-center mb-4'>
      <div className='flex items-center'>
        <img className='w-16 h-16 rounded-full mr-5' src={picture} alt="" />
        <div>
          <p>{name}</p>
          <p>{batting_style}</p>
        </div>
      </div>
      <button onClick={() => handleremainingselectedplayer(id,price)} className='text-2xl text-red-500'><CiTrash /></button>
    </div>

  );
};

Selectedplayer.propTypes = {
  selectedplayer: PropTypes.object.isRequired,
  handleremainingselectedplayer: PropTypes.func
};

export default Selectedplayer;