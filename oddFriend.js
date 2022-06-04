//Problem 4

function oddFriend(friends){
    let errormesseage=false;
    for(let friend of friends){
        if(friend.length % 2 != 0){
            return friend;
        }else{
            errormesseage=true;
        }
    }
    if(errormesseage==true){
        return "All names are even number of letters"
    }
}
const friends=["hasibul","Laish","dibos","Sabbir","Rayhan"];
console.log(oddFriend(friends));