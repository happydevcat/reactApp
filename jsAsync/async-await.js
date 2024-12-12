

function getUser(userId){

    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            try {
                const user = userId === 999 ? {id:userId, name:'형'} : null;
                resolve(user);
            } catch (error) {
                reject(error);
            }
        },2000);
    });
}

function runPrimise(){
    getUser(9929)
    .then(user =>{
        if(user){
            console.log("user ::", user);
        }else{
            console.log("user 없어");
        }
    })
}

async function runAsyncAwait(){
    const user = await getUser(999);
    if(user){
        console.log("user ::", user);
    }else{
        console.log("user 없어");
    }
}

runAsyncAwait();
// runPrimise();