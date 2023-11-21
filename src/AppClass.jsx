import { Component } from "react";
import "./App.css"


export default class AppClass extends Component{
  render() {
    const {data}=this.props
    return (
      <div className='App'>{
        data.map((image)=>{
          return <div key={image.id} className="image-container"> 
          <img src={image.img} />
          </div>
                })
              }
      </div>
    );
  }
  
}



