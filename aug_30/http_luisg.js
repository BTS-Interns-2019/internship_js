function ajax(){
    const http = new XMLHttpRequest();
    const url = 'https://reqres.in/api/users/2'
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        }
    }
    http.open("GET",url);
    http.send();
}

ajax();