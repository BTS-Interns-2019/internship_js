
function giveMeAJoke(apiUrl,category){ 
    return promise1 = new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve("Éxito!");
        },1000);
    });
    
    giveMEAJoke.then((successMessage) =>{
        console.log("basurita" + successMessage);
        
    })
};