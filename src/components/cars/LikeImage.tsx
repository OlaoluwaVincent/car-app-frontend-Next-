'use client';
import { useState } from 'react';
import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti';

const LikeImage = () => {
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeCar() {
    setIsLiked(true);
  }
  function handleUnlikeCar() {
    if (isLiked) {
      setIsLiked(false);
    }
  }

  return (
    <div>
      {isLiked ? (
        <TiHeartFullOutline
          size={'24px'}
          className='cursor-pointer fill-error-500'
          onClick={handleUnlikeCar}
        />
      ) : (
        <TiHeartOutline
          size={'24px'}
          className='fill-black-300 cursor-pointer'
          onClick={handleLikeCar}
        />
      )}
    </div>
  );
};
export default LikeImage;
