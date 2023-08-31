// //for loop

// // In your JavaScript file, create an array of 5 of your interests.
// // Loop through the interests and console log the phrase "One of my interests is: [your interest]." for each of the interests in your array.
// let string = "One of my interests is:" 

// let interestArray = ["reading", "coding", "crying at videos of dogs reuniting with soldiers", "The Marvelous Mrs Maisel", "cryptids"]

// for (let i = 0; i < interestArray.length; i++) {
//     if(interestArray[i] === "cryptids"){
//     console.log(`My absolute favorite interest is: ${interestArray[i]}`)
//     } else {
//     console.log(`One of my interests is: ${interestArray[i]}`)
//     }
//     // console.log(string + " " + interestArray[i])
//   }

//for loop conditional 
//   Refactor your loop from the previous exercise. Pick one of your interests as your absolute favorite interest. Add a conditional to your loop to check if each interest in the array is your favorite. When the loop gets to your favorite interest, it should print "My absolute favorite interest is:" followed by the name of your interest. Any other interests can be printed the same way that they were in the previous exercise.

//conditional

// let englishPersonObject = {
//     firstName: "Sarah",
//     language: "English"
// }
// let spanishPersonObject = {
//     firstName: "Rose",
//     language: "Spanish"
// }
// let frenchPersonObject = {
//     firstName: "Coquette",
//     language: "French"
// }
// //if person language === spanish >> Hola
// if(englishPersonObject.language === "Spanish"){
//     console.log(`Hola ${englishPersonObject.firstName}.`)
// } else if (englishPersonObject.language === "French"){
//     console.log(`Bonjour ${englishPersonObject.firstName}.`)
// } else if (englishPersonObject.language === "English") {
//     console.log(`Hello ${englishPersonObject.firstName}.`)
// }

// if(spanishPersonObject.language === "Spanish"){
//     console.log(`Hola ${spanishPersonObject.firstName}.`)
// } else if (spanishPersonObject.language === "French"){
//     console.log(`Bonjour ${spanishPersonObject.firstName}.`)
// } else if (spanishPersonObject.language === "English") {
//     console.log(`Hello ${spanishPersonObject.firstName}.`)
// }

// if(frenchPersonObject.language === "Spanish"){
//     console.log(`Hola ${frenchPersonObject.firstName}.`)
// } else if (frenchPersonObject.language === "French"){
//     console.log(`Bonjour ${frenchPersonObject.firstName}.`)
// } else if (frenchPersonObject.language === "English") {
//     console.log(`Hello ${frenchPersonObject.firstName}.`)
// }

//nested loops

// Copy and paste the folowing array of grades into your JavaScript file:
// var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
// Loop through the grades with a for loop
// If the current grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.

// How many students got A's?
// How many students got B's?
// Which was the most common letter grade?
// What was the average percentage grade in the class?

// *** I did this in two parts Try A and Try B:

// **** grades as objects! Try A
// let aGrades = {
//     score: 0,
//     actualGrade: "A"
// }
// let bGrades = {
//     score: 0,
//     actualGrade: "B"
// }
// let cGrades = {
//     score: 0,
//     actualGrade: "C"
// }
// let dGrades = {
//     score: 0,
//     actualGrade: "D"
// }
// let fGrades = {
//     score: 0,
//     actualGrade: "F"
// }

//grades as variables Try B
let aGrades = 0;
let bGrades = 0;
let cGrades = 0;
let dGrades = 0;
let fGrades = 0;
let mostCommonGrade = "";
let mostCommonGradeCount = 0
let totalGradePoints = 0

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for (let taco = 0; taco < grades.length; taco++) {
    totalGradePoints += grades[taco]
    if (grades[taco] <= 69) {
        console.log("You got an F")
        fGrades++
        //Try A:
        // fGrades.score++

    } else if (grades[taco] >= 70 && grades[taco] <= 76) {
        console.log("You got a D")
        dGrades++
        //Try A:
        // dGrades.score++

    } else if (grades[taco] >= 77 && grades[taco] <= 84) {
        console.log("You got a C")
        cGrades++
        //Try A:
        //cGrades.score++

    } else if (grades[taco] >= 85 && grades[taco] <= 92) {
        console.log("You got a B")
        bGrades++
        //Try A:
        //bGrades.score++

    } else if (grades[taco] >= 93 && grades[taco] <= 100) {
        console.log("You got an A")
        aGrades++
        //Try A:
        //aGrades.score++
    }
}

//Try B:
for (let i = 0; i < grades.length; i++) {
    if (mostCommonGradeCount < aGrades) {
        mostCommonGradeCount = aGrades
        mostCommonGrade = "A"
    } else if (mostCommonGradeCount < bGrades) {
        mostCommonGradeCount = bGrades
        mostCommonGrade = "B"
    } else if (mostCommonGradeCount < cGrades) {
        mostCommonGradeCount = cGrades
        mostCommonGrade = "C"
    } else if (mostCommonGradeCount < dGrades) {
        mostCommonGradeCount = dGrades
        mostCommonGrade = "D"
    } else if (mostCommonGradeCount < fGrades) {
        mostCommonGradeCount = fGrades
        mostCommonGrade = "F"
    }
}

//Try A
let letterGrades = [aGrades, bGrades, cGrades, dGrades, fGrades]
let highScore = {
    score: 0,
    actualGrade: ""
}

//Try A
for (let i = 0; i < letterGrades.length; i++) {

    if (letterGrades[i].score > highScore.score) {
        highScore = letterGrades[i]
    }
}


//Try B
percentageGrades = totalGradePoints / grades.length

// console.log(highScore)
console.log(mostCommonGrade, mostCommonGradeCount, "Most common grade")
console.log(percentageGrades, "This is an average of grades")
console.log(`The average percent is ${Math.ceil(percentageGrades)}`)
console.log(aGrades, "This is A grades")
console.log(bGrades, "This is B Grades")


