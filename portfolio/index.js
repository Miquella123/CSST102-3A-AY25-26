let buttons = document.querySelectorAll(".change-image").length; //determine the index values or buttons = 2
let images = [
    "Images/test.jpg",
    "Images/anothertest.jpg",
    'Images/rani.jpg',
    'Images/weather.png'
]// put the list of image in an array
let index = 0;
for (let i = 0; i < buttons; i++) {// use a for loop to add a click event on both buttons
 document.querySelectorAll(".change-image")[i].addEventListener("click", function() {
    //click event functions begin
  switch (index) {
    case 0:
        document.querySelector("img").setAttribute ("src", images[1]);
        index++;
        break;
    case 1:
        document.querySelector("img").setAttribute ("src", images[2]);
        index++;
        break;
    case 2:
        document.querySelector("img").setAttribute ("src", images[3]);
        index ++;
        break;
    default:
        document.querySelector("img").setAttribute ("src", images[0]);
        index = 0;
        break;
  }//switch statement to determine if the image is test.jpg = 0 then move to anotheri index which is anothertest.jpg
 });
}
