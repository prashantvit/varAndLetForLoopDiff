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

// Standard interview question for diff between var and let
