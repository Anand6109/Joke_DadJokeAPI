// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             document.body.style.backgroundColor = color;
//             resolve();
//         },delay)
//     })
// }




// async function rainbow() {
//     await delayedColorChange('red', 500);
//     await delayedColorChange('green', 500);
//     await delayedColorChange('yellow', 500);
//     await delayedColorChange('blue', 500);
//     await delayedColorChange('', 1000);
//     return console.log("ALL DONE");
// }

// rainbow()
//     .then((res) => {
//         console.log("you got 4 colors ")
//     })
//     .catch((err) => {
//         console.log("you got some error", err)
//     })

// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("Response", res);
//         res.json()
//             .then((data) => {
//                 console.log(data);
//                 return fetch("https://swapi.dev/api/people/2/")
//             })
//             .then((res) => {
//                 console.log("Response", res);
//                 res.json()
//                     .then((data) => {
//                         console.log(data);
//                     })
//             })
//     })


// const loadStarWarsPeople = async (id) => {
//     try {
//         const res = await fetch(`https://swapi.dev/api/people/${id}/`)
//         const data = await res.json()
//         console.log(data);
//     } catch (error) {
//         console.log("ERROR",error);
//     }

// }

//  loadStarWarsPeople(7)
const joke = document.querySelector("#jokes");
const jokeButton = document.querySelector("#joke_buttons");

const getStarWarsPerson = async () =>{

    const config = {headers: {Accept:'application/json'}}
    const res = await axios.get("https://icanhazdadjoke.com/",config)
    value = res.data.joke;
    return value;
   
}

const getDadJoke = async() =>{
   try {
    const jokeText = await getStarWarsPerson()
    const newLI = document.createElement('LI')
    newLI.append(jokeText)
    joke.append(newLI)
   } catch (error) {
    return "No jokes"
   }
}

jokeButton.addEventListener('click',getDadJoke)
