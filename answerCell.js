// answerCell

// Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.



// answerCell(false, false, false) → true
// answerCell(false, false, true) → false
// answerCell(true, false, false) → false


function answerCell(isMorning, isMom, isAsleep){
  if((!isMorning && !isMom && !isAsleep) || (isMorning && isMom && !isAsleep) || (!isMorning && isMom && !isAsleep)  ){
    return true;
  }
  return false;
}