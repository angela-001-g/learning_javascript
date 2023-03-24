function gradingStudents(grades){ 
    let newGrades = []
    for(let i = 0; i < grades.length; i++){
        let proximMultiplo = ((Math.trunc((grades[i]/5))) + 1) * 5 ; 
        if(grades[i] < 38 || grades[i] === 100 || (proximMultiplo - grades[i] === 0 || proximMultiplo - grades[i] >= 3)){
            newGrades.push(grades[i])
        } else {
            newGrades.push(proximMultiplo) 
        } 
    }
    return newGrades
}
console.log(gradingStudents([4,73, 67, 38, 33]))

// 75, 67, 40, 33

// function gradingStudents(grades){
//     for(let i = 0; i < grades.length; i++){
//         let proximMultiplo = ((Math.trunc((grades[i]/5))) + 1) * 5 ; 
//         console.log(proximMultiplo)    
//     }
    
// }