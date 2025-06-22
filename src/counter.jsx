import{useState} from"react";
export default function Counter(){
    const[count,setCount]=useState(0);
    const[value,setValue]=useState("");
    function onTextChange(event){
        console.log("this function is called!"+event.target.value);
        console.error("This is error");
        setValue(event.target.value);
    }
    
    return (<center>
    
    Temperater
    <div/>
    <input value={value} onChange={(event)=>onTextChange(event)}/> Celcius
    <p>you type {value.length} characters</p>
    <p>{value}Celcius to {value*1.8+32} Fahrenheit</p>
    
    Distance
    <div/>
    <input value={value} onChange={(event)=>onTextChange(event)}/> Kilometers
    <p>you type {value.length} characters</p>
    <p>{value}Kilometers to {value*0.62137119} Miles</p>

     Money
    <div/>
    <input value={value} onChange={(event)=>onTextChange(event)}/> Baths
    <p>you type {value.length} characters</p>
    <p>{value}Baths to {value*0.0305} usd</p>

    Vat
    <div/>
    <input value={value} onChange={(event)=>onTextChange(event)}/> Baths
    <p>you type {value.length} characters</p>
    <p>{value}Baths to {value*1.07} include vat7%</p>




         <button onClick={()=>setCount(count+1)}>+1</button>
         <button onClick={()=>setCount(count-1)}>-1</button>
         <button onClick={()=>setCount(0)}>Reset</button>
    <p>You clicked {count} times
    </p>
    
    
    
    
    
    </center>)


}