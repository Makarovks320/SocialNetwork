import { rerenderEntireTree } from "./render";

let state = {
  profilePage: {
    posts: [
      {
        id: '3',
        datetime: '2019-11-18T09:54',
        author: 'Anastacia Zavorotnyuk',
        text: 'Скиньте деньги на лечение, пожалуйста!',
        likesCount: '289'
      },
      {
        id: '2',
        datetime: '2017-11-18T09:54',
        author: 'Anastacia Zavorotnyuk',
        text: 'adsasdas',
        likesCount: '150'
      },
      {
        id: '1',
        datetime: '2016-11-18T09:54',
        author: 'Anastacia Zavorotnyuk',
        text: 'Post content: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi sed facilis eos, dolorum enim vel distinctio doloremque molest',
        likesCount: '64'
      }
    ],
    newPostText: ''
  },
  messagesPage: {
    dialogs: [
      {
        name: "Volodya",
        surname: "Putler",
        author_id: "1",
      },
      {
        name: "Louis",
        surname: "Suarez",
        author_id: "2",
      },
      {
        name: "Evgen",
        surname: "Bajenov",
        author_id: "3",
      },
      {
        name: "Alexander",
        surname: "Pushkin",
        author_id: "4",
      },
      {
        name: "Bari",
        surname: "Alibasov",
        author_id: "5",
      }
    ],  
    messages: [
      { id: 1,
        message: "Плоти нологе!",
        author_id: 1},
      { id: 2,
        message: "Let's grab a bite!",
        author_id: 2},
      { id: 3,
        message: "For you and for Sashka!",
        author_id: 3},
      { id: 4,
        message: "The less a woman we love, the easier she likes us...",
        author_id: 4},
      { id: 5,
        message: "Let's get some hype?!",
        author_id: 5},
    ]
  }

}
export let addPost = () => {
  let newPost = {
    id: +state.profilePage.posts[0].id+1,
    datetime: '2019-11-18T09:54',
    author: 'Anastacia Zavorotnyuk',
    text: state.profilePage.newPostText,
    likesCount: 0
  }
  if (state.profilePage.newPostText !== '') {
  state.profilePage.posts.unshift(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree({state});
  }
}
export let updatePost = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree({state});
}

export default state;