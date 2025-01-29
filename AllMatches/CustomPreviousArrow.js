import React from 'react'
import './CustomSliderStyle.css'

//Custom Previous Arrow
function CustomPreviousArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='PreviousArrowStyle'
      onClick={onClick}
    >
      <span className='arrowstyle'>&lt;</span>
    </div>
  );
}



export default CustomPreviousArrow