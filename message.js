const json = [
  {
    currentUser: {
      image: {
        png: "./images/avatars/image-juliusomo.png",
        webp: "./images/avatars/image-juliusomo.webp",
      },
      username: "juliusomo",
    },
    comments: [
      {
        id: 1,
        content:
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: "1 month ago",
        score: 12,
        user: {
          image: {
            png: "./images/avatars/image-amyrobson.png",
            webp: "./images/avatars/image-amyrobson.webp",
          },
          username: "amyrobson",
        },
        replies: [],
      },
      {
        id: 2,
        content:
          "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: "2 weeks ago",
        score: 5,
        user: {
          image: {
            png: "./images/avatars/image-maxblagun.png",
            webp: "./images/avatars/image-maxblagun.webp",
          },
          username: "maxblagun",
        },
        replies: [
          {
            id: 3,
            content:
              "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            createdAt: "1 week ago",
            score: 4,
            replyingTo: "maxblagun",
            user: {
              image: {
                png: "./images/avatars/image-ramsesmiron.png",
                webp: "./images/avatars/image-ramsesmiron.webp",
              },
              username: "ramsesmiron",
            },
          },
          {
            id: 4,
            content:
              "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            createdAt: "2 days ago",
            score: 2,
            replyingTo: "ramsesmiron",
            user: {
              image: {
                png: "./images/avatars/image-juliusomo.png",
                webp: "./images/avatars/image-juliusomo.webp",
              },
              username: "juliusomo",
            },
          },
        ],
      },
    ],
  },
];

function generateTemplateComment(comments) {
  const cardMessage = document.querySelector(".card-wrapper");

  comments.forEach((element) => {
    cardMessage.innerHTML += `
  <div class="card">
            <div class="menu-like">
              <img class="image-like" src="./images/icon-plus.svg" alt="adicao" />
              <p class="textNumber">${element.score}</p>
              <img
                class="image-dislike"
                src="./images/icon-minus.svg"
                alt="subtracao"
              />
            </div>
  
            <div class="wrapper-message">
              <div class="wrapper-text-persona">
                <header>
                  <div class="image-persona">
                    <img
                      src="${element.user.image.png}"
                      alt="${element.user.image.username}"
                    />
                  </div>
  
                  <div class="text-name-persona">
                    <strong class="name-user">${element.user.username}</strong>
  
                    <strong class="createdAt">${element.createdAt}</strong>
                  </div>
                </header>
  
                <div class="icon-reply">
                  <img
                    class="icon"
                    src="/images/icon-reply.svg"
                    alt="icon-reply"
                  />
                  <strong class="text-reply">Reply</strong>
                </div>
              </div>
  
              <div class="text-comment">
                <p>
                  ${element.content}
                </p>
              </div>
            </div>
          </div>
  
  `;
  });
}

function generateTemplateReply(commentsReply) {
  const cardMessageReply = document.querySelector(".card-replies-wrapper");
  
  console.log(commentsReply)
  return 

  commentsReply.forEach((reply) => {
    const resultReply = reply.replies;
    console.log(resultReply);
    resultReply.forEach((elementReply) => {
      console.log(elementReply.content);

      cardMessageReply.innerHTML += `
  <div class="card-replies">
            <div class="menu-like">
              <img class="image-like" src="./images/icon-plus.svg" alt="adicao" />
              <p class="textNumber">${elementReply.score}</p>
              <img
                class="image-dislike"
                src="./images/icon-minus.svg"
                alt="subtracao"
              />
            </div>
  
            <div class="wrapper-message">
              <div class="wrapper-text-persona">
                <header>
                  <div class="image-persona">
                    <img
                      src="${elementReply.user.image.png}"
                      alt="${elementReply.user.image.username}"
                    />
                  </div>
  
                  <div class="text-name-persona">
                    <strong class="name-user">${elementReply.user.username}</strong>
                    <strong class="createdAt">${elementReply.createdAt}</strong>
                  </div>
                </header>
  
                <div class="icon-reply-comment">
                  <img
                    class="icon"
                    src="/images/icon-reply.svg"
                    alt="icon-reply"
                  />
                  <strong class="text-reply">Reply</strong>
                </div>
              </div>
  
              <div class="text-comment">
                <p>
                <strong class="repleingTo"> 
                @${elementReply.replyingTo}
                </strong> 
                  ${elementReply.content}
                </p>
              </div>
            </div>
          </div>
  `;
    });
  });
}

function generateTemplateReplyUserAuth(commentsReply) {
  const cardMessageReply = document.querySelector(".card-replies-wrapper");
 
  console.log(commentsReply)

    commentsReply.forEach((elementReply) => {
     console.log(elementReply.user);
   return
      cardMessageReply.innerHTML += `
  <div class="card-replies">
            <div class="menu-like">
              <img class="image-like" src="./images/icon-plus.svg" alt="adicao" />
              <p class="textNumber">${elementReply.score}</p>
              <img
                class="image-dislike"
                src="./images/icon-minus.svg"
                alt="subtracao"
              />
            </div>
  
            <div class="wrapper-message">
              <div class="wrapper-text-persona">
                <header>
                  <div class="image-persona">
                    <img
                      src="${elementReply.user.image.png}"
                      alt="${elementReply.user.image.username}"
                    />
                  </div>
  
                  <div class="text-name-persona">
                    <strong class="name-user">${elementReply.user.username}</strong>
                    <strong class="sent-by-me">you</strong>
                    <strong class="createdAt">${elementReply.createdAt}</strong>
                  </div>
                </header>
  
                <div class="icon-delete">
                <img
                  class="icon-delete-img"
                  src="/images/icon-delete.svg"
                  alt="icon-delete"
                />
                <strong class="text-delete">Delete</strong>
              </div>

              <div class="icon-edit">
                <img
                  class="icon-edit-img"
                  src="/images/icon-edit.svg"
                  alt="icon-edit"
                />
                <strong class="text-edit">Edit</strong>
              </div>
           
              </div>
  
              <div class="text-comment">
                <p>
                  <strong class="repliengTo">
                  @${elementReply.replyingTo}
                  ${elementReply.content}
                </p>
              </div>
            </div>
          </div>
  `;
    });
}

const comments = json[0].comments;

const commentsNoReply = comments.filter((item) => item.replies.length === 0);
const commentsReply = comments.filter((item) => item.replies.length > 0);

/*

const checkComment = () => {  
  comments.forEach((replyNull)=>{
  const resultReply = (replyNull.replies)
  if (resultReply.length === 0){
  console.log('comentario vazio')
  generateTemplateComment(comments)
  }
  else if (resultReply.length > 0){
       console.log('Comentario com respostas')
       generateTemplateReply(comments)
     }
  })
}

*/


checkCurrentUser = () => {
  const currentUser = json[0].currentUser.username
  
  const currentUserCommentsFilter = commentsReply.map(i => {
    return i.replies.filter(item => item.user.username == currentUser)
  })
  
  const notCurrentUserCommentsFilter = commentsReply.map(i => {
    return i.replies.filter(item => item.user.username != currentUser)
  })

  //generateTemplateReply(notCurrentUserCommentsFilter)

  generateTemplateReplyUserAuth(currentUserCommentsFilter)

};


checkCurrentUser();
