import React from 'react';







class Screen extends React.Component{
  render(){
    return(
      <div className='screen'>
        <span>{this.props.result}</span>
        <p>{this.props.current}</p>
      </div>
    )
  }
}

export default Screen;