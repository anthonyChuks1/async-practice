
let fs = require('fs');

//Now to print it one second apart
let str = ' ';


/**
 * printWord - A recursive function that takes in a text and prints the words in the data one at a time every second
 * @param {String} text - The text string in the file
 * @param {Number} count - The count tracker for the string index in the file
 */
const printWord = function (text, count) {
  //initialize count with a bitwise format(no bit in count then make it 0)
  count = count | 0;
  //here the timeout starts 
  setTimeout(() => {
    //end case
    if (count === text.length) {
      return;
    }
    str += text[count];
    if (text[count] === ' ' || count === text.length - 1) {
      process.stdout.write(`${str}`);
      str = ''
      if (count === text.length - 1) {
        process.stdout.write(`\n`);
      }
    }
    //The recursion has to be in the timeout function so that it repeats in there.
    printWord(text, count += 1);
  }, 100)
}

/**
 * To be passed in the readFile function
 * @param {error} error
 * @param {string} data - the data from the file 
 * @returns 
 */
const pWD = (error, data) => {
  if (error) {
    console.log('error: ', error);
    return;
  }
  printWord(data);
}


fs.readFile('asyncfile.txt', 'utf8', pWD);
