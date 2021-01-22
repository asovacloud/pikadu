class Post {
  constructor(param) {
    this.userName = param.userName
    this.nickName = param.nickName
    this.postDate = param.postDate
    this.text = param.text
    this.img = param.img
    this.likes = param.likes
    this.liked = false
  }

  changeLike() {
    this.liked = !this.liked
    if (this.liked) {
      this.likes++
    } else {
      this.likes--
    }
  }
}

class Posts {
  constructor({posts = []} = {}) {
    this.posts = posts
  }

  addPost(tweet) {
    const post = new Post(tweet)
    this.posts.push(post)
  }

  deletePost(id) {
    return id
  }

  likePost(id) {
    return id
  }
}

class Twitter {
  constructor({listElem}) {
    this.tweets = new Posts()
    this.elements = {
      listElem: document.querySelector(listElem),
    }
  }

  renderPosts() {}

  showUserPost() {}

  showLikesPost() {}

  showAllPost() {}

  openModal() {}
}

const twitter = new Twitter({
  listElem: '.tweet-list',
})

twitter.tweets.addPost({
  userName: 'Sofia',
  nickName: 'sofka',
  postDate: '22.01.2021',
  text: 'Super girl!!!',
  img: "<img src='picture.jpg' />",
  likes: '200',
  liked: true,
})

console.log(twitter)
