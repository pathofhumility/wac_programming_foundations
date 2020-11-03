var outside = 'outside';

function a() {
  var aVar = 'a';

  function aInner1() {
    var aInner1Var = 'aInner1Var';

    function aInner1Inner() {
      var aInner1InnerVar = 'aInner1InnerVar';
    }
  }

  function aInner2(aInner2Param) {
    var aInner2Var = aInner2Param;
  }
}

function b(bParam) {
  console.log(bParam);
}

// Which of the following statements are true? Select 1 or more.

// - a is visible to b TRUE
/* I found this to be a misleading question as what we are really focusing on in these
*  exercises is scope. Here we are asking is function a() within the scope of function b()?
*  At face value this doesn't really make sense.
*  My approch to this specific question was to consider could function a() be called from
*  within function b() and the answer to that would be yes.
*/

// - b and bParam are visible to a FALSE - parameters are scoped locally to their function.
// - aInner1InnerVar is only visible to aInner1Inner and aInner1 FALSE - aInner1InnerVar is
//   scoped locally to function aInner1Inner() and thus is not visible to function aInner1().

// - aInner1InnerVar is visible to aInner1Inner TRUE - see preceding question.
// - aVar is visible to aInner2 TRUE - aVar is scoped to function a(), and function aInner2()
//   falls within a()'s scope as it is declared within it.

// - aInner1Var is visible to aInner2 FALSE - aInner1Var is locally scoped to function aInner1().
//   function aInner2() falls outside aInner1()'s scope.

// - aInner2Param is visible to aInner1. FALSE - aInner2Param is locally scoped parameter of
//   function aInner2() of which function aInner1() does not fall.
// - None of the above. FALSE