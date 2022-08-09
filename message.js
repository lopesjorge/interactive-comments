const json = [{
    "currentUser": {
      "image": { 
        "png": "./images/avatars/image-juliusomo.png",
        "webp": "./images/avatars/image-juliusomo.webp"
      },
      "username": "juliusomo"
    },
    "comments": [
      {
        "id": 1,
        "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        "createdAt": "1 month ago",
        "score": 12,
        "user": {
          "image": { 
            "png": "./images/avatars/image-amyrobson.png",
            "webp": "./images/avatars/image-amyrobson.webp"
          },
          "username": "amyrobson"
        },
        "replies": []
      },
      {
        "id": 2,
        "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        "createdAt": "2 weeks ago",
        "score": 5,
        "user": {
          "image": { 
            "png": "./images/avatars/image-maxblagun.png",
            "webp": "./images/avatars/image-maxblagun.webp"
          },
          "username": "maxblagun"
        },
        "replies": [
          {
            "id": 3,
            "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            "createdAt": "1 week ago",
            "score": 4,
            "replyingTo": "maxblagun",
            "user": {
              "image": { 
                "png": "./images/avatars/image-ramsesmiron.png",
                "webp": "./images/avatars/image-ramsesmiron.webp"
              },
              "username": "ramsesmiron"
            }
          },
          {
            "id": 4,
            "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            "createdAt": "2 days ago",
            "score": 2,
            "replyingTo": "ramsesmiron",
            "user": {
              "image": { 
                "png": "./images/avatars/image-juliusomo.png",
                "webp": "./images/avatars/image-juliusomo.webp"
              },
              "username": "juliusomo"
            }
          }
        ]
      }
    ]
  }
]

function generateTemplate (arrayComment){
const cardMessage = document.querySelector('.card-wrapper')
    
for (let i = 0; i < arrayComment.length; i++){
cardMessage.innerHTML += 
`
<div class="card">
          <div class="menu-like">
            <img class="image-like" src="./images/icon-plus.svg" alt="adicao" />
            <p class="textNumber">${arrayComment[i].comments[0].id}</p>
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
                    src="${arrayComment[i].user.image.png}"
                    alt="${arrayComment[i].user.username}"
                  />
                </div>

                <div class="text-name-persona">
                  <strong class="name-user">${arrayComment[i].user.username}</strong>

                  <strong class="createdAt">${arrayComment[i].createdAt}</strong>
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
                ${arrayComment[i].content}
              </p>
            </div>
          </div>
        </div>

`
}
     ///Fazer loop array comments
     //Gerar array com os comentarios e subcomentários html
     ///array  
} 


function getComments(){
  const comment = []
       for (let i = 0; i < json.length; i++){
           comment.push (json[i].comments)
           console.log(comment)
       }
  }


  
function getReplies(){
  const reply = []
  for (let i = 0; i < json.length; i++){
        for (let j = 0; j < json.length+1; j++){
          var aux = json[i].comments[j].replies
          reply.push(aux)
     }
  }
  console.log(reply)
  return reply
}

const arrObj = getReplies()

var arr = arrObj.map(function(obj) {
  return Object.keys(obj).map(function(key) {
      return obj[key];
  });
});

const array = []

function loop(){
    for(let i= 0; i < arr.length; i++){
         for(let j = 0; j< arr[i].length; j++){
            array.push((arr[i][j]))
         }
    }
}

loop()

//console.log(array)
//console.log(arr);

///console.log(json[0].comments[1].replies[1].content)

/*
function generateTemplate (){
  const cardMessage = document.querySelector('.card-wrapper')
       
  cardMessage.innerHTML += 
  `
  <div class="card">
            <div class="menu-like">
              <img class="image-like" src="./images/icon-plus.svg" alt="adicao" />
              <p class="textNumber">12</p>
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
                      src="${json[0].comments[0].user.image.png}"
                      alt="${json[0].comments[0].user.username}"
                    />
                  </div>
  
                  <div class="text-name-persona">
                    <strong class="name-user">${json[0].comments[0].user.username}</strong>
  
                    <strong class="createdAt">${json[0].comments[0].createdAt}</strong>
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
                  ${json[0].comments[0].content}
                </p>
              </div>
            </div>
          </div>
  
  `
       
       ///Fazer loop array comments
       //Gerar array com os comentarios e subcomentários html
       ///array  
  } 
  
*/  