import { useState } from "react";


interface Iprops {
    word: Iword;
}

export interface Iword {
    day: string,
    eng: string,
    kor: string,
    isDone: boolean,
    id: number,
}

export default function Word({word: propsWord}: Iprops){
    const [word, setWord] = useState(propsWord);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone(){
       
        fetch(`http://localhost:3001/words/${word.id}`,{
            method: "PUT",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify({...word, isDone: !isDone}),
        }).then(res => {
            if(res.ok){
                setIsDone(!isDone);
            }

        });
    }


    function wordDel(){

        if(window.confirm('삭제할래?')){
            fetch(`http://localhost:3001/words/${word.id}`,{
                method: "DELETE",
            }).then(res => {
                if(res.ok){
                    setWord({
                        ...word,
                        id: 0
                    });
                }
            });  
        }

    }


    if(word.id === 0 ){
        return null;
    }

    return (
        <tr className={isDone ? 'off':''}>
            <td><input type="checkbox" checked={isDone} onChange={toggleDone}/></td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
                <button className="btn_del" onClick={wordDel}>삭제</button>
            </td>
        </tr>
    );
}