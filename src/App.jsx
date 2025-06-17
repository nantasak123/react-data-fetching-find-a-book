import "./App.css";
import axios from "axios";
import { useState,useEffect } from "react";

function App() {
  let [textBook,setTextBook] = useState("")
  let [bookData,setBookData] = useState([])


  useEffect(() => {
    if(textBook.length <= 0){
      setBookData([])
    }
    getBookData(textBook)
  },[textBook])

 let getBookData = async(text) => {
    try {
      let result = await axios.get("https://www.googleapis.com/books/v1/volumes?q="+text)
    setBookData(result.data.items)
  }catch(error){
    console.log(error)
  }
    }

  return (
  <div className="App">
    <h1>Find a Book</h1>
    <div className="search-book">
      <input type="text" onChange={(even) => setTextBook(even.target.value)} />
    </div>
    <ul>
      {bookData.map((item) => {
        return (<li>{item.volumeInfo.title}</li>)
      })}
    </ul>
  </div>
  )
}

export default App;
