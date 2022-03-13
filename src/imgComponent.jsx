
import React from "react";
import ReactDOM from "react-dom";

export default class ImgComponent extends React.Component {

constructor(props) {
    super(props);
    this.state = { isOn: true };
  }

  render() {
      let show=<img src={this.props.url}  width="100" height="100"  />;
    return  <div>
        
        {
            
            (this.props.status==="on")? show:""
        
        }
        </div>;

     
  }
}


