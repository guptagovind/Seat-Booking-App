import React from 'react';

class DropDown extends React.Component{

  render(){
    return (
      <div className="dropdown-area">
        <label className="label-text">{this.props.label}</label>
        <select onChange={this.props.onChangeHandler} value={this.props.value}>
          {
            this.props.options.map((option, index) => (
              <option key={option+index} value={option}>{option}</option>
            ))
          }
        </select>
      </div>
    )
  }
}

export default DropDown;
