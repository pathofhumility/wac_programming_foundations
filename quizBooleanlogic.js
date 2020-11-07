// How many times will the value of myBoolean change from true to false?

var myBoolean = false;

if (myBoolean) {
  myBoolean = false;
}

if (myBoolean === false) {
  myBoolean = true;
}

if (myBoolean) {
  myBoolean = true;
} else {
  myBoolean = false;
}

if (myBoolean) {
  myBoolean = false;
}

if (myBoolean === false) {
  myBoolean = true;
}

if (myBoolean) {
  myBoolean = true;
} else {
  myBoolean = false;
}