//problem-1
// Ana to Vori Convert
function anaToVori(ana){
    if (typeof ana === 'string'){
      return 'String or Symbol not allow';
    }
    else if(ana>=0){
      const vori =(ana / 16).toFixed(2);
      const voriNumeric = parseFloat(vori);
      return voriNumeric;
    }else if (ana <= 0){
      return 'Zero or Negative not allow';
    } 
  }
  
  console.log(anaToVori(35));
  console.log(anaToVori(-35));
  console.log(anaToVori("one"));
  console.log(anaToVori(0));


  
//Problem2 
//singra somucha jilapi total price
function pandaCost(singara,somucha,jilapi){
    if( (typeof singara)==="string" || (typeof somucha)==="string" || (typeof jilapi)==="string"){
        return "string or symble not allow"
    }else if(singara<0 || somucha<0 || jilapi<0){
        return "Negative input not allow"
    }else{
  
        const totalSingaraprice=singara * 7;
    const totalSomuchaPrice=somucha * 10;
    const totalJilapiPrice=jilapi * 15;
    const totalPrice=totalSingaraprice+totalSomuchaPrice+totalJilapiPrice;
    return totalPrice;
    }
    
  }
  console.log(pandaCost(3,5,0));
  console.log(pandaCost(3,-5,0));
  console.log(pandaCost(3,"5",0));
  console.log(pandaCost(0,0,0));
  
  

  //problem 3
// total ammount for picnic
function picnicBudget(numberOfMembers) {
    const ForFirst100 = 5000;
    const ForSecond100 = 4000;
    const ForRest = 3000;
    let totalmoney, budgetForFirst100, budgetForSecond100, budgetForRest;

    if (numberOfMembers < 0){
        return 'Negative input not allow';
    }
    else if (numberOfMembers >=0 ) {
        if (numberOfMembers <= 100) {
            budgetForFirst100 = numberOfMembers * ForFirst100;
            totalmoney = budgetForFirst100;
        }
        else if (numberOfMembers <= 200) {
            budgetForFirst100 = 100 * ForFirst100;
            budgetForSecond100 = (numberOfMembers - 100) * ForSecond100;
            totalmoney = budgetForFirst100 + budgetForSecond100;
        }
        else {
            budgetForFirst100 = 100 * ForFirst100;
            budgetForSecond100 = (200 - 100) * ForSecond100;
            budgetForRest = (numberOfMembers - 200) * ForRest;
            totalmoney = budgetForFirst100 + budgetForSecond100 + budgetForRest;
        }
        return totalmoney; 
    }
    else{
        return 'Symbol or String  not Allow!!!!!!';
    }
}

console.log( picnicBudget(350));
console.log( picnicBudget(-350));
console.log( picnicBudget(0));



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
const friends=["Laishh","hasibul","dibos","Sabbir","Rayhan"];
console.log(oddFriend(friends));