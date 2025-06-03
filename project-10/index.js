//variable
let likesCounter = 0;
const likebutton = document.getElementById("likebutton");

// const addLike = () => {
//     likesCounter += 1;
// };

//  function that increments number of likes with parameter
const addLike = (incrementBy) => {
  likesCounter += incrementBy;
  console.log(likesCounter);
  // update the button text when clicked
  likebutton.innerText = `Like (${likesCounter})`;
  // if else - if user clicks on a button 10 times - congrats

  if (likesCounter === 10) {
    alert("congrats! You have clicked 10 times!");
  }
};

addLike(1);

// listen to event and update counter
likebutton.addEventListener("click", () => {
  addLike(1);
});



//console.log(likesCounter); // 1000

// listen to events
//document - object - has entire html page
console.log(document); //- returns entire html page
console.log(document.body); //- returns body tag
// console.log(document.getElementById("likebutton")); //
// console.log(document.getElementById("likebutton").addEventListener("click", () => {addLike(1000)})
