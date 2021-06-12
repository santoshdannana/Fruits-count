import Input from './Components/Input';
import React,{useState} from 'react';
import './App.css';
import Data from './Components/Data';

const oldData =[
  {
  id:1,
  name:"mango",
  count:10,
  },
  {
    id:2,
    name:"apple",
    count:10,
  },
  {
      id:3,
      name:"strawberry",
      count:10,
  }
];
function App(props) {
  const [data, setData] =useState(oldData);

  const addToList = (e) =>{
    setData(prevData =>{
      return [e,
         ...prevData];
    });
  }
  
  const DeleteItem =(id) =>{
      const newItems = data.filter(i =>i.id !== id);
      setData(newItems);
  }
  

  return (
    <div className="App">
      <Input  onSave={addToList}/>
      <Data handleDelete={DeleteItem} items={data}/>  
    </div>
  );
}

export default App;
