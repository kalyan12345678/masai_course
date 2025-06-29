import React from 'react';

const ProfileCard = ({
  name ="",
  age,
  bio = ""
}) => {
  const truncateBio = (text) => {
    return text.length > 100 ? text.slice(0, 100) + '… Read More' : text;
  };

  return (
    <div >
      <h2>{name}</h2>
      <p >Age: {age}</p>
      <p>{truncateBio(bio)}</p>
    </div>
  );
};

export default ProfileCard;