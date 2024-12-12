fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
.then(response =>{
    // console.log('response:', response);
    return response.json();
})
.then(data =>{

    // console.log("response :: ", data);
    return data.filter(obj => obj.id > 3);
})
.then(result =>{

    console.log("response :: ", result);
    
})
.catch(err => {
    console.log("Error :: ", err);
})
.finally( ()=>{

    console.log("마무리... finally");
})