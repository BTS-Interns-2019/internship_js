const {default: xhrMock} = require('xhr-mock');

xhrMock.setup()

const userID = '_' + Math.random().toString(36).substr(2, 9);
const postID = '_' + Math.random().toString(36).substr(2, 9);

function put(url, onsuccess, onerror,dataString){
  const http = new XMLHttpRequest();
  http.open("PUT", url);

  http.onload = function(){

      if( this.status >= 200 && this.status < 299){
          var resultado = this.responseText;
          onsuccess(resultado);
      console.log(resultado);    
      }else if(this.status > 299){
          var resultado = JSON.stringify(this.responseText);
          onerror(resultado);
      }
  }
dataString = JSON.stringify(dataString);
http.send(dataString);


}


// function request(method, url, onsuccess, onerror,dataString){
//   if(method == 'GET'){
//       get(url,onsuccess,onerror);
//   }else if(method == 'POST'){
//       post(url, onsuccess, onerror,dataString)
//   }else if(method == 'PUT'){
//       put(url, onsuccess, onerror,dataString)
//   }

  
// };





function get(url, onsuccess, onerror){
  const http = new XMLHttpRequest();
  http.open("GET", url);

  http.onload = function(){

  if(this.readyState == 4 && this.status == 200){
      var resultado = this.responseText;
      console.log(resultado);
      
      onsuccess(resultado);
      
      
  }else if(this.status > 299){
      var resultado = JSON.parse(this.responseText);
      onerror(resultado);
  }
}
http.send();

};



function post(url, onsuccess, onerror, dataString){

  const http = new XMLHttpRequest();
  http.open("POST", url);

  http.onload = function(){

      if( this.status >= 200 && this.status < 299){
          var resultado = this.responseText;
          onsuccess(resultado);
      console.log(resultado);    
      }else if(this.status > 299){
          var resultado = JSON.stringify(this.responseText);
          onerror(resultado);
      }
  }
dataString = JSON.stringify(dataString);
http.send(dataString);

};

function postPromise(url,body){
  
  return new Promise((resolve, reject) => {
    
    post(url, resolve,reject,body);
  })
}




function getPromise(url){
  return new Promise((resolve, reject) => {
    get(url, resolve,reject);
  })
}

function putPromise(url,data){
  return new Promise((resolve, reject) => {
    put(url, resolve,reject,data);
  })
}

const api = {
  userGet: {
    method: 'get',
    url: '/users/self',
    body: {
      id: userID,
      userName: 'JohnWick',
      email: 'john@wickservices.com'
    }
  },
  postsPost: {
    method: 'post',
    url: '/posts',
    requestBody: {
      userId: userID,
      content: 'This is my first post after beeing excomunicato'
    },
    body: {
      id: postID,
      userName: 'JohnWick',
      userId: userID,
      content: 'This is my first post after beeing excomunicato',
      likes: 0,
      comments: [],
    }
  },
  likePut: {
    method: 'put',
    url: `/posts/${postID}/like`,
    requestBody: {
      userId: userID
    },
    body: {
      id: postID,
      userName: 'JohnWick',
      userId: userID,
      content: 'This is my first post after beeing excomunicato',
      likes: 1,
      comments: [],
    }
  },
  commentsPost: {
    method: 'post',
    url: `/posts/${postID}/comments`,
    requestBody: {
      userId: userID,
      content: 'I whish you look, even if you don\'t need it'
    },
    body: {
      id: '12qwasd121',
      userName: 'JohnWick',
      userId: userID,
      content: 'I whish you look, even if you don\'t need it',
      likes: 0,
      postId: postID,
    }
  }
}

describe('manipulations with promises', () => {
  beforeEach(() => xhrMock.setup());
  afterEach(() => xhrMock.teardown());

  test('get user', () => {
    xhrMock.get(api.userGet.url, (req, res) => {
      return res
        .status(200)
        .body(JSON.stringify(api.userGet.body));
    });


    expect.assertions(2)
    return getPromise('/users/self')
      .then(data => {
        console.log(data);
        
        const user = JSON.parse(data);
        console.log(user);
        
        expect(user.userName).toBe('JohnWick');
        expect(user.id).toBe(userID);
      });
  });

  test('create a post', () => {
    expect.assertions(3);

    xhrMock.get(api.userGet.url, (req, res) => {
      return res
        .status(200)
        .body(JSON.stringify(api.userGet.body));
    });

    xhrMock.post(api.postsPost.url, (req, res) => {
      expect(req.body()).toBe(JSON.stringify(api.postsPost.requestBody));
      return res
        .status(200)
        .body(JSON.stringify(api.postsPost.body));
    });

    xhrMock.put(api.likePut.url, (req, res) => {
      expect(req.body()).toBe(JSON.stringify(api.likePut.requestBody));
      return res
        .status(200)
        .body(JSON.stringify(api.likePut.body));
    });

    return getPromise('/users/self')
    .then((data) => {
      
      
      const user = JSON.parse(data);
      return postPromise('/posts',{userId:user.id,content: 'This is my first post after beeing excomunicato'})
    })
    
    // promise
      // your stuff
      .then(data => {
        
        console.log(data);
        let postData = JSON.parse(data);
        console.log("ME CARGA LA RECONTRA VERRRRR...#&$%=TUO%RHI#HR)TOU$%Y");
        console.log(postData);
        
        // expect(typeof postData).toBe('object');
        expect(postData.userId).toBe(api.postsPost.body.userId);
        expect(postData.content).toBe(api.postsPost.body.content)
      });
  });

  test('like a post', () => {
    expect.assertions(3);

    xhrMock.get(api.userGet.url, (req, res) => {
      return res
        .status(200)
        .body(JSON.stringify(api.userGet.body));
    });

    xhrMock.post(api.postsPost.url, (req, res) => {
      expect(req.body()).toBe(JSON.stringify(api.postsPost.requestBody));
      return res
        .status(200)
        .body(JSON.stringify(api.postsPost.body));
    });

    xhrMock.put(api.likePut.url, (req, res) => {
      console.log(req)
      expect(req.body()).toBe(JSON.stringify(api.likePut.requestBody));
      return res
        .status(200)
        .body(JSON.stringify(api.likePut.body));
    });

    return getPromise('/users/self')
    .then((data) => {
      
      
      const user = JSON.parse(data);
      return postPromise('/posts',{userId:user.id,content: 'This is my first post after beeing excomunicato'})
    })
    .then((data) => {
      const lik2 =  JSON.parse(data);
      console.log(lik2.userId);
      
      return putPromise(`/posts/${lik2.id}/like`,{userId: lik2.userId})
    })
    
    //promise
      // your stuff
      .then(data => {
        const post = JSON.parse(data);
        expect(post.likes).toBe(1);
      });
  });


});
//
///
//
//
//
//
describe('manipulations with asing/await', () => {
  beforeEach(() => xhrMock.setup());
  afterEach(() => xhrMock.teardown());

  test('get user', async () => {
    xhrMock.get(api.userGet.url, (req, res) => {
      return res
        .status(200)
        .body(JSON.stringify(api.userGet.body));
    });


    expect.assertions(2)
    const data = await getPromise('/users/self')
       
        console.log(data);
        
        const user = JSON.parse(data);
        console.log(user);
        
        expect(user.userName).toBe('JohnWick');
        expect(user.id).toBe(userID);
      
  });

  test('create a post', async () => {
    expect.assertions(3);

    xhrMock.get(api.userGet.url, (req, res) => {
      return res
        .status(200)
        .body(JSON.stringify(api.userGet.body));
    });

    xhrMock.post(api.postsPost.url, (req, res) => {
      expect(req.body()).toBe(JSON.stringify(api.postsPost.requestBody));
      return res
        .status(200)
        .body(JSON.stringify(api.postsPost.body));
    });

    xhrMock.put(api.likePut.url, (req, res) => {
      expect(req.body()).toBe(JSON.stringify(api.likePut.requestBody));
      return res
        .status(200)
        .body(JSON.stringify(api.likePut.body));
    });

    const data = await getPromise('/users/self')
    
      
      
      const user = JSON.parse(data);
      const postP = await postPromise('/posts',{userId:user.id,content: 'This is my first post after beeing excomunicato'})
    
    
    // promise
      // your stuff
      

        let postData = JSON.parse(postP);
        console.log("ME CARGA LA RECONTRA VERRRRR...#&$%=TUO%RHI#HR)TOU$%Y");
        console.log(postData);
        
        // expect(typeof postData).toBe('object');
        expect(postData.userId).toBe(api.postsPost.body.userId);
        expect(postData.content).toBe(api.postsPost.body.content)
      
  });

  test('like a post', async() => {
    expect.assertions(3);

    xhrMock.get(api.userGet.url, (req, res) => {
      return res
        .status(200)
        .body(JSON.stringify(api.userGet.body));
    });

    xhrMock.post(api.postsPost.url, (req, res) => {
      expect(req.body()).toBe(JSON.stringify(api.postsPost.requestBody));
      return res
        .status(200)
        .body(JSON.stringify(api.postsPost.body));
    });

    xhrMock.put(api.likePut.url, (req, res) => {
      console.log(req)
      expect(req.body()).toBe(JSON.stringify(api.likePut.requestBody));
      return res
        .status(200)
        .body(JSON.stringify(api.likePut.body));
    });

    const data = await getPromise('/users/self')
      
      
      const user = JSON.parse(data);
      const postP1 = await postPromise('/posts',{userId:user.id,content: 'This is my first post after beeing excomunicato'})
    
    
      const lik2 =  JSON.parse(postP1);
      console.log(lik2.userId);
      
      const putP = await putPromise(`/posts/${lik2.id}/like`,{userId: lik2.userId})
  
    
    //promise
      // your stuff
      
        const post = JSON.parse(putP);
        expect(post.likes).toBe(1);
      
  });


});