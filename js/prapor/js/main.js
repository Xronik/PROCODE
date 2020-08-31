let flagWidth = null;
let flagHeight = null;
let flagBackgroundLG = null;
let stringOfNumbers = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maxime, quis atque minima modi cum? Maxime quisquam placeat, laudantium accusamus porro nobis ad, facere similique vel officia explicabo.';
let nmbrZero = true - true;
let nmbrTwo = true + true;
let nmbrTwohundred = stringOfNumbers.length;
let nmbrOnehundred = nmbrTwohundred / nmbrTwo;
let nmbrFifty = nmbrOnehundred / nmbrTwo;
let nmbrBig = (nmbrTwohundred + nmbrOnehundred) / nmbrTwo + nmbrOnehundred + nmbrTwo + nmbrTwo + true;

flagHeight = `${nmbrTwohundred + nmbrOnehundred}px`;
flagWidth = `${nmbrTwohundred * nmbrTwo + nmbrOnehundred}px`;
flagBackgroundLG = `rgba(${nmbrZero},${nmbrZero},${nmbrBig}) ${nmbrFifty}%, rgba(${nmbrBig},${nmbrBig},${nmbrZero}) ${nmbrFifty}%`;

flag.style.cssText = `
   height: ${flagHeight};
   width: ${flagWidth};
   background: linear-gradient(${flagBackgroundLG});
`;




