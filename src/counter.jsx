import{useState} from"react";
export default function Counter(){
    const[count,setCount]=useState(0);
    
    return (<center>
    <button onClick={()=>setCount(count+1)}>+1</button>
     <button onClick={()=>setCount(count-1)}>-1</button>
    <p>You clicked {count} times
    </p>
    
    
    
    
    
    </center>)


}