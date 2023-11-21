import './App.css';


function App({data}) {
  // code here
  
  return <div className='App'>
    {
      data.map((image)=>{
        return <div key={image.id}
        className='image-container'>
          <img src={image.img} alt="y"/>

        </div>
      })
    }
  </div>
}

export default App;
