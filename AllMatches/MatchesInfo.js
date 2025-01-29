import React from 'react';
import './CustomSliderStyle.css'
// import { Link } from 'react-router-dom';

const MatchesInfo = ({ data }) => {

  if (data.Code === 'allMatches') {
    data.Count = data.count || data.Count;    //data.allMatches.Count;

  }
  return (
    <div className='AllMatches'>
      <div className='description'>{data.description}(Count: {data.Count})</div>
      <div>{data.detailDescription}</div>
    </div>
  );
};

export default MatchesInfo;
