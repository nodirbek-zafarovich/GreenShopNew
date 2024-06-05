import React from 'react'

export const SecondCardItem = ({data}) => {
    console.log(data);
  return (
    <>
      <div className="container">
        <img src={data.image_url} alt="img" />
      </div>
    </>
  );
}
