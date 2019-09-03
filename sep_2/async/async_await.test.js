const {default: xhrMock} = require('xhr-mock');
const { get, post, request } = require('./async_await_lib.js');

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
      content: 'I wish you look, even if you don\'t need it'
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

  test('get user', async () => {
    xhrMock.get(api.userGet.url, (req, res) => {
      return res
        .status(200)
        .body(JSON.stringify(api.userGet.body));
    });

    expect.assertions(2)

    const user = JSON.parse( await get('/users/self') );
    
    expect(user.userName).toBe('JohnWick');
    expect(user.id).toBe(userID);
  
  })

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

      const user = JSON.parse( await get('/users/self') );
      const userId = user.id;

      const msg = JSON.stringify({
        userId: userId,
        content: 'This is my first post after beeing excomunicato'
      });
      /* Had to change post to postt for compiler's sake lol */
      const postt = JSON.parse( await post('/posts', msg) );

      expect(postt.userId).toBe(api.postsPost.body.userId);
      expect(postt.content).toBe(api.postsPost.body.content)
      
  });

  test('like a post', async () => {
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

    const user = JSON.parse( await get('/users/self' ));
    const userId = user.id

    const msg = JSON.stringify({
      userId: userId,
      content: 'This is my first post after beeing excomunicato'
    });
    const postdata = JSON.parse( await post('/posts', msg))
    const postId = postdata.id
    const reqLike = JSON.stringify({
      userId: userId
    });

    const postt = JSON.parse( await request('PUT', `/posts/${postId}/like`,reqLike))
    
    expect(postt.likes).toBe(1);
  });
  
  // test('Set a comment to Mr. John Wick', async () => {
  //   // expect.assertion(2);

  //   const user = JSON.parse( await get('/users/self') );
  //   const userId = user.id;

  //   const msg = JSON.stringify({
  //     userId: userId,
  //     content: 'This is my first post after being excomunicato'
  //   });
  //   const postt = JSON.parse( await post('/posts', msg));
  //   const postId = postt.id;
  //   const commentReq = JSON.stringify({
  //     userId: userId,
  //     content: 'I wish you look, even if you don\'t need it'
  //   });

  //   const comment = JSON.parse( await post(`/posts/${postId}/comments`, commentReq))
  //   console.log(comment.id)
  //   expect(comment.userName).toBe(api.commentsPost.body.userName);
  //   expect(comment.content).toBe(api.commentsPost.body.content)
  // })
});

