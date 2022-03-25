const posts = [
    {title: 'Post one',body : 'this is post one', createdAt: new Date().getTime()} ,
    {title: 'Post two',body : 'this is post two',createdAt: new Date().getTime() }
];

function getPosts() {
    setTimeout(() => {
        let output = " ";
        posts.forEach((post) => {
            output +=`<li> ${post.title} : ${post.body}</li>`;
        });
        document.body.innerHTML = output ;
    }, 1000);
}

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){
                 resolve();
            }else{
                reject('Error : something went wrong');
            }
        }, 1000);
    
    });   
}

createPost({ title: 'Post three', body: 'this is post three'})
      .then(getPosts)
      .catch(errMsg=>console.log(errMsg));


function deletePost() {
    return new Promise((resolve,reject) => {
        
        if(posts.length>0){
                setTimeout(() => {
                    resolve();
           },1000);
        }
        else {
            reject('Error : Array is empty now');
            }
   });
}

const timerId = setInterval(() => {
    deletePost()
    .then(() => {
        posts.pop();
        let lastPost = document.querySelector('body').lastChild;
        lastPost.parentNode.removeChild(lastPost);
    })
    .catch(err =>{
        console.log(err);
        //arrayEmpty = true
        clearInterval(timerId);
    });
}, 2000);

// setTimeout(() => {
//     arrayEmpty = false;
//     while(!arrayEmpty){
//         deletePost()
//         .then(()=>{
//             posts.pop();
//             let lastPost = document.querySelector('body').lastChild;
//             lastPost.parentNode.removeChild(lastPost);
//         })
//         .catch(err =>{
//          console.log(err);
//         });
//     }
// }, 2000);
