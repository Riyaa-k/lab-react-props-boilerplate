import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const images=imageData();
  return <div className='App'>
    {
      images.map((image)=>{
        return <div key={image.id}
        className='image-container'>
          <img src={image.img} alt="y"/>

        </div>
      })
    }
  </div>
}

export default App;
