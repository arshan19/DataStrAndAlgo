const posts = [
    {title: 'Post one',body : 'this is post one', createdAt: new Date().getTime()},
    {title: 'Post two',body : 'this is post two',createdAt: new Date().getTime()}
];
function getPosts() {
    setTimeout(() => {
        let output = " ";
        posts.forEach((post) => {
            output +=`<li> ${post.title}</li>`;
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
                 resolve(post);
            }else{
                reject('Error : something went wrong');
            }
        }, 1000);
    
    });   
}

//promise.all
// const promise1 = Promise.resolve('hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, 'GoodBye')
// );

// Promise.all([promise1,promise2,promise3]).then(values => console.log(values));

const user = {
    username : 'mohan',
    lastactivitytime : '10th of feb'
}

//I want you to create one more promise called updateLastUserActivityTime.
// Every time the user creates a post, this promise should be parallely called (should execute in 1 second).
//When both the promises (createPost and updateLastUserActivityTime resolve), 
//I want you to console log all the posts created and lastActivityTime of the user.

function updateLastUserActivityTime() { 
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const user = {
                username : 'mohan',
                lastactivitytime : '10th of feb'
            }
            user.lastactivitytime = new Date().getTime();
            resolve(user.lastactivitytime);
        },1000)
})
}

function userupdatesapost(){
    Promise.all([createPost,updateLastUserActivityTime])
    .then(([createPostresolves,updateLastUserActivityTimeresolves]) => {
       console.log(updateLastUserActivityTimeresolves); 
    })
    .catch(err => console.log(err));
}
Promise.all([createPost(),updateLastUserActivityTime()]).then((data)=> console.log(data))
