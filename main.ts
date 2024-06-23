// Q No.30 of Day 10 of 100 days of coding challenge

let usernames : string [] = ["Admin", "user1", "user2" , "user3"];

usernames.forEach(username =>{
    if (username === "admin"){
        console.log("Hello admin, would you like to see a status report. ");
        
    } else {
        console.log(`Hello ${username}, Thank you for logging in again.`);
        
    }
});