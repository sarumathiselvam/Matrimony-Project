import React from 'react'
import './CustomSliderStyle.css'

// Custom Next Arrow
function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='NextArrowStyle'     
      onClick={onClick}
    >
      <span className='arrowstyle'>&gt;</span>
    </div>
  );
}



export default CustomNextArrow