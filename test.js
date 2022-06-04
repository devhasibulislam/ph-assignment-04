//problem-1
function anaToVori(ana){
     if(ana>=0){
      const VoriValue =(ana / 16);
      const voriNumericValue = parseFloat(VoriValue.toFixed(2));
      return voriNumericValue;
    }else if (ana <= 0){
      return 'Wrong Input';
    } 
  }
  
  console.log(anaToVori(31));
  


  
//Problem2 
function pandaCost(singaravalue,somuchavalue,jilapiValue){
    if(singaravalue<0 || somuchavalue<0 || jilapiValue<0){
        return "Negative input not allow"
    }else{
  
    const Singaraprice=singaravalue * 7;
    const SomuchaPrice=somuchavalue * 10;
    const JilapiPrice=jilapiValue * 15;
    const totalPrice=Singaraprice+SomuchaPrice+JilapiPrice;
    return totalPrice;
    }
    
  }
  console.log(pandaCost(1,1,1));
  
  
  

  //problem 3
function picnicBudget(numberOfMembers) {
    const ForFirst100people = 5000;
    const ForSecond100people = 4000;
    const ForRestPeople = 3000;
    let totalmoney, budgetFirst100, budgetSecond100, budgetForRestNext;

    if (numberOfMembers <= 100) {
        budgetFirst100 = numberOfMembers * ForFirst100people;
        totalmoney = budgetFirst100;
    }
    else if (numberOfMembers <= 200) {
        budgetFirst100 = 100 * ForFirst100people;
        budgetSecond100 = (numberOfMembers - 100) * ForSecond100people;
        totalmoney = budgetFirst100 + budgetSecond100;
    }
    else {
        budgetFirst100 = 100 * ForFirst100people;
        budgetSecond100 = (200 - 100) * ForSecond100people;
        budgetForRestNext = (numberOfMembers - 200) * ForRestPeople;
        totalmoney = budgetFirst100 + budgetSecond100 + budgetForRestNext;
    }
    return totalmoney; 
}

console.log( picnicBudget(300));




//Problem 4

function oddFriend(friends){
    let messeage=false;
    for(let friend of friends){
        if(friend.length % 2 != 0){
            return friend;
        }else{
            messeage=true;
        }
    }
    if(messeage==true){
        return "No odd number of a friend length"
    }
}

console.log(oddFriend(["hasibul","dibos","Sabbir","Bijoy","Rayhan"]));