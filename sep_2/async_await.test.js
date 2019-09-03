const {default: xhrMock} = require('xhr-mock');
// const {post, request } = require('../aug_29/simple_xhr_sergior.js');

xhrMock.setup()

const userID = '_' + Math.random().toString(36).substr(2, 9);
const postID = '_' + Math.random().toString(36).substr(2, 9);

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

      if(this.readyState == 4 && this.status == 200){
          var resultado = JSON.stringify(this.responseText);
          onsuccess(resultado);
      console.log(resultado.data);    
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
      console.log(user.id);
      return postPromise('/posts',{userId:user.id,content: 'This is my first post after beeing excomunicato'
})
    })
    
    // promise
      // your stuff
      .then(data => {
        const post = JSON.parse(data);
        expect(post.userId).toBe(api.postsPost.body.userId);
        expect(post.content).toBe(api.postsPost.body.content)
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

    return getPromise(api.url,function(dato){
      console.log(dato);
      
    },function(dato){
      console.log(dato);
      
    })
    
    //promise
      // your stuff
      .then(data => {
        const post = JSON.parse(data);
        expect(post.likes).toBe(1);
      });
  });


});