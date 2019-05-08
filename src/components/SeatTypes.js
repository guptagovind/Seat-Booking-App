import React from 'react';

const SeatType = () => (
  <div className='seat-type'>
    <div className='flex-seat'>
      <label className='seat-type-text'>Available Seat:</label>
      <div className='avail-seat'/>
    </div>
    <div className='flex-seat'>
      <label className='seat-type-text'>Booked Seat:</label>
      <div className='booked-seat'/>
    </div>
    <div className='flex-seat'>
      <label className='seat-type-text'>Extra charge Seat(Rs. 500):</label>
      <div className='expensive-seat'/>
    </div>
    <div className='flex-seat'>
      <label className='seat-type-text'>Selected Seat:</label>
      <div className='selected-seat'/>
    </div>
  </div>
);

export default SeatType;
