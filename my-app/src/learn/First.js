import React from 'react'
import Button from './Button'

function photo(){
  return(
    <img
    src='https://images.app.goo.gl/34T6J1yJ663kyV9k6' alt='Lord Ganesh ji'
    />
  );
}

export default function First(){
    return (
        <>
      {/* <div>First</div> */}
      {/* <Button/> */}
      <photo/>

        </>
    )
}
