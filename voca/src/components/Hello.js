
import { useState } from "react";

const Hello = function(props){

    console.log(props);

    //let name ="jaung";
    const [name,setName] = useState('jaung');
    const [age,setAge] = useState(props.age);
    //function 작성 외부 호출과 내부 호출 
    function showName(){
        const chngName = name ==='jaung' ? 'devcat' : 'jaung';
        setName(chngName);
        console.log({name});
    }

   return (
    <div>
        <h1>Hello {name}~   {age}세</h1>
        <button onClick={showName}>show name</button>
        <button onClick={()=>
           { 
            setAge(age + 1);
            console.log(age); }
        }>show age</button>
    </div>    
   );

};

export default Hello;