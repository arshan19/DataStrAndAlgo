console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

    const wifePromiseToBringTickets = new Promise ((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000)
    });

    const getPopcorn = new Promise((resolve,reject)=> resolve( `popcorn`));

    const butterOnPopcorn =  new Promise((resolve,reject)=> resolve(`butter`));

    const getColdDrinks = new Promise((resolve,reject)=> resolve(` cold drinks `))
      
    let ticket = await wifePromiseToBringTickets;
        
    console.log(`wife : i have the ${ticket}` );
    console.log('husband: we should go in');
    console.log('wife: no i m hungry');

    let popcorn = await getPopcorn;

    console.log(`husband : you got your ${popcorn}`);
    console.log('husband : shall we go now?');
    console.log('wife : no, i want butter on my popcorn');

    let butter = await butterOnPopcorn;

    console.log(`husband : i got some ${butter} on popcorn`);
    console.log(`husband : anythink else madam?`);

    let coldDrinks = await getColdDrinks;

    console.log(`wife : can i get ${coldDrinks} as well`);
    console.log(`husband : here your ${coldDrinks} as well `);
    console.log(`wife : let go we are getting late`);
    console.log(`husband ; thanks for reminder *grinds*`);

    return ticket;

}
 
preMovie().then((m)=>console.log(`person3 : shows ${m}`));

console.log('person4 shows ticket');
console.log('person5 shows ticket');

//Now create a new promise called getColdDrinks which come after husband gets butter. 
//Integrate the code in both async and await and also promises' code
