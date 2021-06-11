import Input from './Components/Input';
import React,{useState} from 'react';
import './App.css';
import Data from './Components/Data';
import Display from './Components/Display';
const oldData = [
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
function App() {
  const [data, setData] =useState(oldData);

  const addToList = (e) =>{
    setData(prevData =>{
      return [e,
         ...prevData];
    });
    console.log(data);
  }
  const handleDelete =(id) =>{
      const newItems = data.filter(i =>i.id !== id);
      setData(newItems);
  }

  return (
    <div className="App">
      <Input onSave={addToList}/>
        <div className="container">
        {
        data.map( e =>
        <Display 
          onDelete={handleDelete}
          key={e.id}
          id={e.id}
          name={e.name} 
          count={e.count} />
        )
        }
        </div>
      
    </div>
  );
}

export default App;
