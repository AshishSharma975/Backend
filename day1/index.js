// console.log("hello world")
// for(let i=0; i<=10;i++){
//     console.log(i)
// }

// isko run krne ke liye terminal me apne file me jao pehle cd day1 then likho node index.js output mil jayega tumhe waha 




//packages- 
// const catMe = require("cat-me")

// console.log(catMe())





//servers - imp.

// server ek machine hoti hai jiske pass khud ka operating system and khud ka RAM and process hoti hai

// user jo bhi request bhejega uska ek response use mil sake 

// example - amazon 



// create server with express

// 1st - npm init -y
// go to npm website and search express and install it in your terminal with the command npm i express


const exp = require("express")

const app = exp() // server create ho chukka hai

app.listen(3000) // server ko start krta hai

