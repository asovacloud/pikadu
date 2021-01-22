class FetchData {
  getResourse = async url => {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error(`Something went wrong ${res.status}`)
    }

    return res.json()
  }

  getPost = () => this.getResourse('./db/database.json')
}

class Post {
  constructor({
    userName,
    nickname: nickName,
    postDate,
    text,
    img,
    likes = 0,
    id,
  }) {
    this.userName = userName
    this.nickName = nickName
    this.postDate = postDate ? new Date(postDate) : new Date()
    this.text = text
    this.img = img
    this.likes = likes
    this.liked = false
    this.id = id || this.generateID()
  }

  changeLike() {
    this.liked = !this.liked
    if (this.liked) {
      this.likes++
    } else {
      this.likes--
    }
  }

  generateID() {
    return (
      (+new Date()).toString(32) +
      Math.random()
        .toString(32)
        .substring(2, 9)
    )
  }

  getDate = () => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }

    return this.postDate.toLocaleDateString('ru-RU', options)
  }
}

class Posts {
  constructor({posts = []} = {}) {
    this.posts = posts
  }

  addPost = tweets => {
    const post = new Post(tweets)
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
    const fetchData = new FetchData()
    this.tweets = new Posts()
    this.elements = {
      listElem: document.querySelector(listElem),
    }

    fetchData.getPost().then(data => {
      data.forEach(this.tweets.addPost)
      this.showAllPost()
    })

    console.log('this.tweets: ', this.tweets)
  }

  renderPosts(tweets) {
    this.elements.listElem.textContent = ''

    tweets.forEach(({id, userName, nickName, text, img, likes, getDate}) => {
      this.elements.listElem.insertAdjacentHTML(
        'beforeend',
        `
        <li>
          <article class="tweet">
              <div class="row">
                  <img class="avatar" src="images/${nickName}.jpg" alt="Аватар пользователя ${nickName}">
              <div class="tweet__wrapper">
              <header class="tweet__header">
                <h3 class="tweet-author">${userName}
                  <span class="tweet-author__add tweet-author__nickname">@${nickName}</span>
                  <time class="tweet-author__add tweet__date">${getDate()}</time>
                </h3>
                <button class="tweet__delete-button chest-icon" data-icon="${id}"></button>
              </header>
              <div class="tweet-post">
                  <p class="tweet-post__text">${text}></p>
                  ${
                    img
                      ? `
                    <figure class="tweet-post__image">
                      <img src="${img}" alt="${text}">
                    </figure>  
                  `
                      : ''
                  }
              </div>
            </div>
            </div>
            <footer>
              <button class="tweet__like" id="test-like">
                ${likes}
              </button>
            </footer>
          </article>
        </li>
      `,
      )
    })
  }

  showUserPost() {}

  showLikesPost() {}

  showAllPost() {
    this.renderPosts(this.tweets.posts)
  }

  openModal() {}
}

const twitter = new Twitter({
  listElem: '.tweet-list',
})

console.log(twitter)

/*twitter.tweets.addPost({
  userName: 'Sofia',
  nickName: 'sofka',
  postDate: '22.01.2021',
  text: 'Super girl!!!',
  img: "<img src='picture.jpg' />",
  likes: '200',
  liked: true,
});*/
