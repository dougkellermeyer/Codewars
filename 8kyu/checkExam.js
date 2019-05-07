// The first input array contains the correct answers to an exam, like ["a", "a", 
//"b", "d"]. The second one is "answers" array and contains student's answers.

// The two arrays are not empty and are the same length. Return the score for 
//this array of answers, giving +4 for each correct answer, -1 for each incorrect 
//answer, and +0 for each blank answer(empty string).

// If the score < 0, return 0.
// For example:

function checkExam(array1, array2){
    var grade = 0;

    for(let i = 0; i < array1.length; i++){
        if(array1[i] === '' || array2[i] === ''){continue}
            array1[i]===array2[i] ? grade += 4 : grade--
    }
    return grade < 0 ? 0 : grade 

}

console.log(checkExam(["a","b","c"], ["a","c","b"])) //=> 2