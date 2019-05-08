import React from 'react';
import SeatLayout from '../../config/seatLayout.json';

import SeatTypes from './SeatTypes';
import DropDown from './DropDown';
import Seat from "./Seat";

class SeatSelection extends React.Component{

  state = {
    seatLayout: SeatLayout,
    requiredSeat: 1,
    error:'',
    seatCategory: 'normal',
    seatCategoryOptions: ['normal','club','executive'],
    seatOptions: [1,2,3,4,5,6,7,8,9,10],
    totalAmount: 0
  };

  onRequiredSeats = (e) => {
    e.stopPropagation();
    this.setState({requiredSeat: e.target.value, error: ''});
    this.clearSelectedSeats();
  };

  onCategorySelect = (e) => {
    e.stopPropagation();
    this.setState({seatCategory: e.target.value});
    this.clearSelectedSeats();
  };

  clearSelectedSeats = () => {
    Object.keys(this.state.seatLayout).map((seatType) => {
      Object.keys(this.state.seatLayout[seatType]).map((seatRow) => {
        this.state.seatLayout[seatType][seatRow].map((seatEle) => {
          seatEle.selected=false;
        })
      })
    })
  };



  onSeatSelect = (e, seat, seatRow, SeatType) => {
    e.stopPropagation();
    let totalAmount = 0;
    this.clearSelectedSeats();
    if(SeatType === this.state.seatCategory){
      // All the required Seats
      let adjacentAvailableSeats = seatRow.filter((seatInRow) => (((!(seatInRow.selected || seatInRow.isBooked)) && ((seat.seatNo <= seatInRow.seatNo) && ((seatInRow.seatNo - seat.seatNo) <= this.state.requiredSeat-1)))));
      if(adjacentAvailableSeats.length >= this.state.requiredSeat) {
        adjacentAvailableSeats.map(seatItr => {
            seatItr.selected = true;
            totalAmount = totalAmount + seatItr.price;
        });
      }
    }
    this.setState({
      totalAmount
    });
  };

  onPay = () => {
    console.log('Payment Processing');
  };

  render(){
    return (
      <div>
        <div className="dropdown-header-area">
          <DropDown
            onChangeHandler={this.onRequiredSeats}
            value={this.state.requiredSeat}
            options={this.state.seatOptions}
          />
          <DropDown
            onChangeHandler={this.onCategorySelect}
            value={this.state.seatCategory}
            options={this.state.seatCategoryOptions}
          />
        </div>
        <SeatTypes />
        <div className="seat-layout">
        {
          Object.keys(this.state.seatLayout).map((SeatType) => (
            <div key={SeatType} className="category-separator">
              <div className="row-title">{SeatType.toUpperCase()} - Rs.{SeatType === `club` ? '200.00' : SeatType === `executive` ? '300.00' : '100.00'}</div>

              { Object.keys(this.state.seatLayout[SeatType]).map((seatRow) => (
                <div key={this.state.seatLayout[SeatType]+seatRow} className="seat-row">
                  {seatRow}
                  {
                    this.state.seatLayout[SeatType][seatRow].map((seat, index) => (
                      <Seat
                        key={seat.seatNo+index}
                        seat={seat}
                        seatSelectHandler={this.onSeatSelect}
                        clearSeatHandler={this.clearSelectedSeats}
                        seatType={SeatType}
                        seatLayoutTypeRow={this.state.seatLayout[SeatType][seatRow]}
                      />
                    ))
                  }
                </div>
              ))}
            </div>
          ))
        }
        </div>
          {
            this.state.totalAmount > 0 && <div className="btn" onClick={this.onPay}><span className='btn-text'>Pay Rs.{this.state.totalAmount}</span></div>
          }
      </div>
    )
  }
}

export default SeatSelection;
