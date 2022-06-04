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
