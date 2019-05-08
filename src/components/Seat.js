import React from 'react'
const Seat = (props) => {
  const {
    seat,
    seatSelectHandler,
    clearSeatHandler,
    seatType,
    seatLayoutTypeRow
  } = props;

  return (
    seat.expensive
      ?
      <span className={`${seat.selected ? 'seat-selected': 'seat-expensive'}`}  onClick={(e) => seatSelectHandler(e, seat, seatLayoutTypeRow, seatType)}>{seat.seatNo}</span>
      :
      seat.isBooked
        ?
        <span className='seat-booked' onClick={clearSeatHandler}>{seat.seatNo}</span>
        :
        <span className={`${seat.selected ? 'seat-selected': 'seat'}`} onClick={(e) => seatSelectHandler(e, seat, seatLayoutTypeRow, seatType)}>{seat.seatNo}</span>

  )
};

export default Seat;
