const {default: xhrMock} = require('xhr-mock');
const { get, post, request } = require('../aug_29/simple_xhr_cristianp');

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

    return get('/users/self').then((data)=>{
      //console.log(JSON.parse(data));
      data = JSON.parse(data);
      return post('/posts',{userId:data.id,
        content:"This is my first post after beeing excomunicato"});
    })
      .then(data => {
        //console.log(JSON.parse(data));
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
      //console.log(req)
      expect(req.body()).toBe(JSON.stringify(api.likePut.requestBody));
      return res
        .status(200)
        .body(JSON.stringify(api.likePut.body));
    });

    return get('/users/self').then((data)=>{
      //console.log(JSON.parse(data));
      data = JSON.parse(data);
      return post('/posts',{userId:data.id,
        content:"This is my first post after beeing excomunicato"});
    }).then((data)=>{
      //console.log(JSON.parse(data));
      const post = JSON.parse(data);
      return request('PUT', `/posts/${post.id}/like`,{
        userId:post.userId
      })
    })
      // your stuff
      .then(data => {
        const post = JSON.parse(data);
        expect(post.likes).toBe(1);
      });
  });
});
/********************************************************************************************************************/
describe('manipulations with promises, async and await', () => {
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

  test('create a post async and await', async() => {
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
    //de aqui
      const dato = await get('/users/self');
      const res = JSON.parse(dato);
      //console.log(res);
      const poste = await post('/posts',{userId:res.id,
        content:"This is my first post after beeing excomunicato"
      });
      //console.log(poste);
      const datapost = JSON.parse(poste);
      //console.log(datapost);
      expect(datapost.userId).toBe(api.postsPost.body.userId);
      expect(datapost.content).toBe(api.postsPost.body.content);
      //a aqui
  });

  test('like a post async and await', async () => {
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
      //console.log(req)
      expect(req.body()).toBe(JSON.stringify(api.likePut.requestBody));
      return res
        .status(200)
        .body(JSON.stringify(api.likePut.body));
    });

    const dato = await get('/users/self');
    const dat = JSON.parse(dato);

    const poste = await post('/posts',{userId:dat.id,
      content:"This is my first post after beeing excomunicato"});
    const datapost = JSON.parse(poste);
    
    const pute = await request('PUT', `/posts/${datapost.id}/like`,{
      userId:datapost.userId
    });
    const put = JSON.parse(pute);
    //console.log(pute);
    //console.log(datapost);
    expect(put.likes).toBe(1);
  });
});
