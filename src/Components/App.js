import React from 'react';
import CalcButtons from './CalcButtons'
import Screen from './Screen'



const buttons = ['0', '±', '%','+','7','8','9', 'X','4','5','6','-','1','2','3','AC',',','=']





class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      current:[],
      result:0,
    }
  }
  handleClick = (button)=>{
    const current = [...this.state.current]
    current.push(button)
    this.setState({current})
    

  }


  render(){
    return(
      <div className='App'>
        <h1>Calculator APP</h1>
       <Screen current = {this.state.current} result ={this.state.result}/>
       {buttons.map((item , i)=><CalcButtons handleClick={this.handleClick} key={i} name={item}/>)}
      </div>
    )
  }
}

export default App;
