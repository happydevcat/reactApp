//import dummyData from "../db/data.json"
import { useParams } from "react-router-dom";
import Word, { Iword } from "./Word.tsx";
//import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch.ts";


export default function Day(){

    const rstParam = useParams<{day: string}>();
    const day = rstParam.day;
    // const wordList = dummyData.words.filter(word =>(
    //     word.day === Number(day)
    // ))
    


    // const [words,setWords] = useState([]);

    // useEffect(()=>{

    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then(res =>{
    //         return res.json()
    //     }).then(data =>{
    //         setWords(data);
    //     })
    // },[day]);    
    const words: Iword[] = useFetch(`http://localhost:3001/words?day=${day}`);


    return (<div>
                <h2>Day {day}</h2>
       

                <table>
                    <tbody>
                        {words.map(word =>(
                            <Word word={word} key={word.id} />
                        ))}
                    </tbody>
                </table>
        </div>);
}