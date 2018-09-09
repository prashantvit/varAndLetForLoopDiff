for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

for (var i = 1; i <= 3; i++) {
  (index => {
    setTimeout(function() {
      console.log(index);
    }, i * 1000);
  })(i);
}

// Standard interview question for diff between var and let
