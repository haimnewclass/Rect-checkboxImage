
import React from "react";
import ReactDOM from "react-dom";

export default class CheckComponent extends React.Component {

constructor(props) {
    super(props);
    this.props.callParentWhenUpdate("***");
  // get to server
  // set data in state

  }

  render() {
    return  <div>
        <input type="checkbox" onChange={(e)=>{
            console.log(e.target.checked);
            // update parent (App)
            // render json
            this.props.callParentWhenUpdate(e.target.checked,this.props.idx);
        }} />
        </div>;     
  }
}


