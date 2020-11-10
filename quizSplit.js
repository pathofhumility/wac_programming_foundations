function quiz(text) {
  var newText = '';
  
  for (var i = 0; i < text.length; i++) {
    if (text[i] === '-') {
      newText += '--'
    } else {
      newText += text[i];
    }
    newText.length;
  }
  
  return ('--' + newText + '--').split('-');
}

quiz('careful-is-fast');

// Quiz: Split
// https://watchandcode.com/courses/350615/lectures/23208675
//
// If you run quiz('careful-is-fast'), which of the following statements will be true?
// 
// 1. The function call will return an array that has length 3.
//    a. false 100%
//    b. Evidence: See Q3
// 2. The function call will return an array that has length 6.
//    a. false 100%
//    b. Evidence: See Q3
// 3. The function call will return an array that has length 9.
//    a. true 100%
//    b. Evidence: Check value of line 16 in debugger after function quiz() executes.
// 4. The function call will return an array that has length 12.
//    a. false 100%
//    b. Evidence: See Q3
// 5. At the end of the loop where i = 7, newText will have length 7.
//    a. false 100%
//    b. Evidence: See Q7
// 6. At the end of the loop where i = 7, newText will have length 8.
//    a. false 100%
//    b. Evidence: See Q7
// 7. At the end of the loop where i = 7, newText will have length 9.
//    a. true 100%
//    b. Evidence: Added a line 10 to check condition as loop runs.
// 8. At the end of the loop where i = 7, newText will have length 10.
//    a. false 100%
//    b. Evidence: See Q7