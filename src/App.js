import logo from './logo.svg';
import './App.css';
import ImgComponent from "./imgComponent"
import CheckComponent from './CheckComponent';

import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {


  letImgKnow=(p,x)=>{
    console.log("I am in letImgKnow");
    console.log(p);    
    let arr = this.state.status;
    
    if(p)
    {
      arr[x] = 'on'      
    }
    else
    {
      arr[x] = 'off'      
    }

    this.setState({status: arr});

  }

paramsList={checked:"checked", type:'checkbox' }


constructor(props) {
    super(props);
    this.state = { status: ['off','off','off','off'] };
    this.letImgKnow.bind(this); // prevent reference problems
  }


  render() {
    return  <div className="App">
      <input  {...this.paramsList} />

    <CheckComponent idx={0} callParentWhenUpdate={this.letImgKnow} />
    <ImgComponent status={this.state.status[0]} url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17IautckWSx6-VDw0UI7NAMIDsEqkOZ3i5g&usqp=CAU"/>

    <CheckComponent idx="1" callParentWhenUpdate={this.letImgKnow} />
    <ImgComponent status={this.state.status[1]} url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17IautckWSx6-VDw0UI7NAMIDsEqkOZ3i5g&usqp=CAU"/>
    
    <CheckComponent idx="2" callParentWhenUpdate={this.letImgKnow} />
    <ImgComponent status={this.state.status[2]} url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17IautckWSx6-VDw0UI7NAMIDsEqkOZ3i5g&usqp=CAU"/>
   
    <CheckComponent idx="3" callParentWhenUpdate={this.letImgKnow} />
    <ImgComponent status={this.state.status[3]} url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17IautckWSx6-VDw0UI7NAMIDsEqkOZ3i5g&usqp=CAU"/>  
  </div>;
  }
}