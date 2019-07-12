import React from 'react';


class CalcButtons extends React.Component{

sendToParent = ()=> {
  this.props.handleClick(this.props.name)
}


  render(){
    return(
      <div className='CalcButtons'>
        <button onClick={this.sendToParent} className='btn'>{this.props.name}</button>
      </div>
    )
  }
}

export default CalcButtons;