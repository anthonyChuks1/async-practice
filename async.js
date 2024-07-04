const startWashingMachine = () => {
  console.log('Washing Machine Started.');

  setTimeout(()=> {
    console.log('Washing Machine Finished.');
  }, 5000);

  setTimeout(() => {
    dustShelves();
  } , 10000)
};

const startDishWasher = () => {
  console.log('Dishwasher Started.');
  
  setTimeout(() =>{
    console.log('Dishwasher Finished.');
  }, 8000);
};

const dustShelves = () => {
  console.log('Dusting SHelves.');
};

const mopFLoor = () => {
  console.log('Mapping FLoor.');
}


//Call async
startWashingMachine();
startDishWasher();

//Call func
dustShelves();
mopFLoor();