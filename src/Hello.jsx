
import './Hello.css';
export default function Hello({name=BroadcastChannel,surname="blah",weight=20}) {
       return (
        <>
        <img src="logo.png" width="200" height="200"/>
        <h1>Hello,{name}
                {surname}
                {weight} kg
        </h1>
        </>
        );
}