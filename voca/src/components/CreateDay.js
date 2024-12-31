import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch.ts";

export default function CreateDay(){


    const days = useFetch(`http://localhost:3001/days`);
    const navi = useNavigate();
    function addDay(){

        fetch(`http://localhost:3001/days/`,{
            method: "POST",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify({
                
                "day": days.length +1
            }),
        }).then(res => {
            if(res.ok){
                alert('저장 성공');
                navi(`/`);    
            }

        });



    }

    return (

    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>


    );




}