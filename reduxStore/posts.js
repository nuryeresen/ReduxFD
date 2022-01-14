//{İD, TİTLE, COMMENTS:[{İD:1, USERID:1 , COMMENT:"J"}], {VOTES:{UP:0, DOWN:0}}}

// ACTİON TYPES
//ADD_POST, REMOVE_POST(İD), UPDATE_POST(İD,TİTLE), ADD_COMMENT(USERID,ID, COMMENT), REMOVE_COMMENT,REMOVE_USER_COMMENTS, ADD_DOWN_VOTE(İD), ADD_UP_VOTE(İD),
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const UPDATE_POST = "UPDATE_POST";
const ADD_COMMENT = "REMOVE_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";
const REMOVE_USER_COMMENTS = "REMOVE_USER_COMMENTS";
const ADD_UP_VOTE = "ADD_UP_VOTE";
const ADD_DOWN_VOTE = "ADD_DOWN_VOTE";
//ACTİON CREATORS

export const addPost = (id, title) => ({
  type: ADD_POST,
  payload: { id, title, comments: [], votes: { up: 0, down: 0 } },
});

export const removePost = (id) => ({
  type: REMOVE_POST,
  payload: id,
});
export const updatePost = (id, title) => ({
  type: UPDATE_POST,
  payload: { id, title, comments: [], votes: { up: 0, down: 0 } },
});
export const addComment = (id, userId, comment) => ({
  type: ADD_COMMENT,
  payload: { id, userId, comment },
});
export const removeComment = (id, userId, comment) => ({
  type: REMOVE_COMMENT,
  payload: { id, userId, comment },
});
export const removeUserComment = (id, title) => ({
  type: REMOVE_USER_COMMENTS,
  payload: { id, title, comments: [], votes: { up: 0, down: 0 } },
});

export const addUpVote = (id) => ({
  type: ADD_UP_VOTE,
  payload: id,
});
export const addDownVote = (id) => ({
  type: ADD_DOWN_VOTE,
  payload: id,
});
//REDUCER
const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...posts, action.payload];

    case REMOVE_POST:
      return posts.filter((item) => item.id !== action.payload);

    case UPDATE_POST:
      return posts.filter((item) => {
        if (item.id === action.payload) {
          return { ...item, title: item.title };
        }
        return item;
      });

    case ADD_COMMENT:
      return posts.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            comments: {
              ...item.comments,
              id: action.payload.id,
              comment: action.payload.comment,
              userId: action.payload.userId,
            },
          };
        }
        return item;
      });

    case REMOVE_COMMENT:
      return posts.filter((item) => {
        if (item.id === action.payload) {
          return { ...item, comments: { ...item.comments, comment: [] } };
        }
        return item;
      });

    case ADD_UP_VOTE:
      return posts.map((item) => {
        if (item.id === action.payload) {
          return { ...item, votes: { ...item.votes, up: item.votes.up + 1 } };
        }
        return item;
      });

    case ADD_DOWN_VOTE:
      return posts.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            votes: { ...item.votes, down: item.votes.down - 1 },
          };
        }
        return item;
      });

    default:
      return posts;
  }
};

export default postsReducer;
