// Quokka.js is a rapid prototyping playground in your editor, Runtime values are displayed in your IDE next to your code, as you type.
//If you think its not working, just press  ctrl + shift + P then Start on Current File
//Docs link - https://quokkajs.com/docs/
//I put this here (css-battles) cause this folder is convenient to access
//When i encounter short js problems i test it here, no need to open browser or install node to see the result

function more4than0(n) {
  // let fourCounter = 0;
  // let zeroCounter = 0;
  // for(let element of n) {
  //   if(element === 4) 
  //     fourCounter++;
  //   else if(element === 0) 
  //     zeroCounter++;
  // } 
  // return fourCounter > zeroCounter ? true : false;
  const countFour = n.filter(e => e === 4).length;
  const countZero = n.filter(e => e === 0).length;
  return countFour > countZero;
}


function counting() {

  let counter = 0;

  for(let i = 0; i < 3; i++) {
    setTimeout(() => {
      counter++;
      console.log(counter);
    },2000);
  }
}

const fun = counting()


