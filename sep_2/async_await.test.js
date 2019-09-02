const { default: xhrMock } = require('xhr-mock');
const { get, post, put } = require('../aug_29/simple_xhr_hectors');

xhrMock.setup();

const userID = `_${Math.random().toString(36).substr(2, 9)}`;
const postID = `_${Math.random().toString(36).substr(2, 9)}`;

const api = {
  userGet: {
    method: 'get',
    url: '/users/self',
    body: {
      id: userID,
      userName: 'JohnWick',
      email: 'john@wickservices.com',
    },
  },
  postsPost: {
    method: 'post',
    url: '/posts',
    requestBody: {
      userId: userID,
      content: 'This is my first post after being excomunicato',
    },
    body: {
      id: postID,
      userName: 'JohnWick',
      userId: userID,
      content: 'This is my first post after beeing excomunicato',
      likes: 0,
      comments: [],
    },
  },
  likePut: {
    method: 'put',
    url: `/posts/${postID}/like`,
    requestBody: {
      userId: userID,
    },
    body: {
      id: postID,
      userName: 'JohnWick',
      userId: userID,
      content: 'This is my first post after beeing excomunicato',
      likes: 1,
      comments: [],
    },
  },
  commentsPost: {
    method: 'post',
    url: `/posts/${postID}/comments`,
    requestBody: {
      userId: userID,
      content: 'I whish you look, even if you don\'t need it',
    },
    body: {
      id: '12qwasd121',
      userName: 'JohnWick',
      userId: userID,
      content: 'I whish you look, even if you don\'t need it',
      likes: 0,
      postId: postID,
    },
  },
};

/**
 * Promises
 */
describe('manipulations with promises', () => {
  beforeEach(() => xhrMock.setup());
  afterEach(() => xhrMock.teardown());

  test('get user', () => {
    xhrMock.get(api.userGet.url, res => res.status(200).body(JSON.stringify(api.userGet.body)));

    expect.assertions(2);
    return get('/users/self')
      .then((data) => {
        const user = JSON.parse(data);
        expect(user.userName).toBe('JohnWick');
        expect(user.id).toBe(userID);
      });
  });

  test('create a post', () => {
    expect.assertions(3);

    xhrMock.get(api.userGet.url, res => res.status(200).body(JSON.stringify(api.userGet.body)));

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

    return get('/users/self').then((data) => {
      const user = JSON.parse(data);
      return post('/posts', {
        userId: user.id,
        content: 'This is my first post after being excomunicato',
      }).then((postData) => {
        const postPosted = JSON.parse(postData);
        expect(postPosted.userId).toBe(api.postsPost.body.userId);
        expect(postPosted.content).toBe(api.postsPost.body.content);
      });
    });
  });

  test('like a post', () => {
    expect.assertions(3);

    xhrMock.get(api.userGet.url, res => res.status(200).body(JSON.stringify(api.userGet.body)));

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

    return get('/users/self').then((data) => {
      const user = JSON.parse(data);
      return post('/posts', {
        userId: user.id,
        content: 'This is my first post after being excomunicato',
      })
        .then((postData) => {
          const postPosted = JSON.parse(postData);
          return put(`/posts/${postPosted.id}/like`, {
            userId: postPosted.userId,
          })
            .then((postLikedData) => {
              const postLiked = JSON.parse(postLikedData);
              expect(postLiked.likes).toBe(1);
            });
        });
    });
  });
});

/**
 * Async - Await
 */
describe('manipulations with async-await', () => {
  beforeEach(() => xhrMock.setup());
  afterEach(() => xhrMock.teardown());

  test('get user', async () => {
    xhrMock.get(api.userGet.url, res => res.status(200).body(JSON.stringify(api.userGet.body)));

    expect.assertions(2);
    // get the user once the promise is settled and resolved
    const user = await get('/users/self').then(data => JSON.parse(data));
    expect(user.userName).toBe('JohnWick');
    expect(user.id).toBe(userID);
  });

  test('create a post', async () => {
    expect.assertions(3);

    xhrMock.get(api.userGet.url, res => res.status(200).body(JSON.stringify(api.userGet.body)));

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

    // get user once promise is settled and resolved
    const user = await get('/users/self').then(data => JSON.parse(data));
    // get post by obtained user once promise is settled and resolved
    const postPosted = await post('/posts', {
      userId: user.id,
      content: 'This is my first post after being excomunicato',
    }).then(data => JSON.parse(data));

    expect(postPosted.userId).toBe(api.postsPost.body.userId);
    expect(postPosted.content).toBe(api.postsPost.body.content);
  });

  test('like a post', async () => {
    expect.assertions(3);

    xhrMock.get(api.userGet.url, res => res.status(200).body(JSON.stringify(api.userGet.body)));

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

    // get user once promise is settled and resolved
    const user = await get('/users/self').then(data => JSON.parse(data));
    // get post by obtained user once promise is settled and resolved
    const postPosted = await post('/posts', {
      userId: user.id,
      content: 'This is my first post after being excomunicato',
    }).then(data => JSON.parse(data));
    // modify obtained post to put a like in it once promise is settled and resolved
    const postLiked = await put(`/posts/${postPosted.id}/like`, {
      userId: postPosted.userId,
    }).then(data => JSON.parse(data));

    expect(postLiked.likes).toBe(1);
  });
});
