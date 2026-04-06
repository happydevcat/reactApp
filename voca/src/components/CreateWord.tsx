import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch.ts";
import { useNavigate } from "react-router-dom";
import { IDay } from "./DayList";


export default function CreateWord(){
    
    const days: IDay[] = useFetch('http://localhost:3001/days');
    const navi = useNavigate();
    

    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(e){
        e.preventDefault();

        // console.log(engRef.current.value);
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);

        if(!isLoading && dayRef.current && engRef.current && korRef.current){
            setIsLoading(true);

                
            const setDay = dayRef.current.value;
            const eng = engRef.current.value;
            const kor = korRef.current.value
            const day = Number(dayRef.current.value);

            // 1️⃣ 전체 데이터 조회
              const res = await fetch("http://localhost:3001/words");
              const words = await res.json();

              // 2️⃣ max id 찾기 (문자열 → 숫자 변환)
              const maxId = words.reduce((max, w) => {
                  return Math.max(max, Number(w.id));
              }, 0);

              const newId = maxId + 1;


            fetch(`http://localhost:3001/words/`,{
                method: "POST",
                headers: { "Content-type": "application/json"},
                body: JSON.stringify({
                    id: String(newId),
                    day,
                    eng,
                    kor,
                    isDone: false,
                }),
            }).then(res => {
                if(res.ok){
                    alert('저장 성공');
                    setIsLoading(false);
                    navi(`/day/${setDay}`);    
                }

            });

        }
    }

    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);


    return (
        <form onSubmit={onSubmit}>
          <div className="input_area">
            <label>Eng</label>
            <input type="text" placeholder="computer" ref={engRef} />
          </div>
          <div className="input_area">
            <label>Kor</label>
            <input type="text" placeholder="컴퓨터" ref={korRef} />
          </div>
          <div className="input_area">
            <label>Day</label>
            <select ref={dayRef}>
              {days.map(day => (
                <option key={day.id} value={day.day}>
                  {day.day}
                </option>
              ))}
            </select>
          </div>
          <button
            style={{
              opacity: isLoading ? 0.3 : 1,
            }}
          >
            {isLoading ? "Saving..." : "저장"}
          </button>
        </form>
      );


}