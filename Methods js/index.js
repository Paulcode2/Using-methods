// We have a task to calculate the BMI's of two people (John and mark). 
// so i decided to do it two ways;
//  1. By using the normal variable declaration, 
//  2. By using methods


// 1. Simple variable declaration


var johnMass, johnHeight, markMass, markHeight, johnBMI, markBMI;

johnMass = 70;
johnHeight = 182;

johnBMI = johnMass/ (johnHeight * johnHeight);

console.log(johnBMI)

markMass = 80;
markHeight = 170;

markBMI = markMass/ (markHeight * markHeight);

console.log(markBMI)

var higherBMI = markBMI > johnBMI

console.log(higherBMI)

console.log("Is mark's BMI higher than john'S BMI? " + higherBMI)

// 2. By method


let mark = {
    fullName: 'Mark Bulls',
    mass: 80, // Kg 
    height: 170, // Cm
    calcBMI:  function() {
        this.bmi = this.mass / (this.height * this.height); 
        return this.bmi
    } 
};
   
    


let john = {
    fullName: 'John Doe',
    mass: 70, // Kg 
    height: 182, // Cm
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height); 
        return this.bmi
    }
};

john.calcBMI();
mark.calcBMI();

console.log(john, mark)

    if (john.bmi > mark.bmi){
        console.log(john.fullName + ' has a higher BMI of ' + john.bmi)
    } else if (mark.bmi > john.bmi){
        console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi)
    } else {
        console.log("We have a tie")
    }