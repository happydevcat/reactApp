


const myPromis = new Promise((resolve, reject)=>{

    console.log("시작=========");

    setTimeout(()=>{
       const text =  prompt("다시말하자면 형이야 라고 말해");
        if( text === '형이야'){
            resolve("Good");
        }else{
            reject("Bad");
        }

    },2000);

});

myPromis
    .then((result) =>{
        console.log("Good");
        return "다시불러봐봐";
    })
    .then((result) =>{
        console.log("promis chaning ::::: %s", result);
    })
    .catch((err) =>{
        console.log("Bad");
    })
    .finally(()=>{
        console.log("END==========")
    })