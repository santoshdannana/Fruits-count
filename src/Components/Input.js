import React,{useState} from 'react';
import './Input.css';

function Input(props) {
    const [name, setName] = useState('');
    const changeName = (e) => {
        setName(e.target.value);
    }
    const formSubmit = (e) => {
        e.preventDefault();
        const split = name.split("-");
        const splitted = {
            name:split[0],
            count:split[1],
            id:Date.now(),
        }
        var patt = new RegExp("-");
        var res = patt.test(name);
        if(name===""){
            alert("Enter Name");
        }
        else if(res){
        props.onSave(splitted);
        setName('');
        }
        else{
            alert("Enter correct Pattern");
        }
        
    }
    return (
        <form onSubmit={formSubmit}>
            <input onChange={changeName} type="text" autoComplete="off" id="in" value={name} className="in" placeholder="Enter the Fruit Name. . . ."/>
            <button className="submit" type="submit">Submit</button>
        </form>
    )
}

export default Input
