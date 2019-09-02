const {default: xhrMock} = require('xhr-mock');
function get(url){
  return new Promise(function (resolve,reject){
    let http=new XMLHttpRequest();
    http.open("GET",url,true);
    http.send();
    http.onload=()=>{
      if(http.status<400){
          console.log("success");
          resolve(http.responseText);
      }else{
          console.log("fail");
          reject(http.status,http.statusText);
      }
    }
    http.onerror=(e)=>{
        console.log("Error: ",e)
    }
  })
}

function post(url,dataString){
  return new Promise(function(resolve, reject){
    let http=new XMLHttpRequest();
    http.open("POST",url,true);
    http.setRequestHeader("Content-type","aplication/json");
    http.send(dataString);
    setTimeout(function(){
      http.onload=()=>{
        if(http.status<400){
            console.log("success");
            resolve(http.responseText);
            /*onsuccess(http.responseText);*/
        }else{
            console.log("fail");
            reject(http.status,http.statusText);
        }
      }
      http.onerror=(e)=>{
          console.log("Error: ",e);
      }
    },10000)
  })
}

xhrMock.setup()

const userID = '_' + Math.random().toString(36).substr(2, 9);
const postID = '_' + Math.random().toString(36).substr(2, 9);

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
    return get('/users/self')
      .then(data => {
        const user = JSON.parse(data);
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

    return post('/posts').then(data => {
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

    /*return //promise
      // your stuff
      .then(data => {
        const post = JSON.parse(data);
        expect(post.likes).toBe(1);
      });*/
  });


});
