// Declare your genre arrays here
let rnb=["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/FLO_at_the_FLO_Live_Tour_in_Manchester.jpg/742px-FLO_at_the_FLO_Live_Tour_in_Manchester.jpg, https://pmstudio.com/pmstudio/images/FLO4.jpg,  "]

let hippop = ["https://app.hiphopdx.com/wp-content/uploads/2024/06/doechii-says-she-feels-more-understood-by-queer-people-than-the-hip-hop-community.jpg?w=1200 "]

let genre = document.querySelector(".genre-button");

let submit = document.querySelector(".submit-button");

let links = document.querySelector(".links-button");

let suggest = document.querySelector(".suggest-button");

let music = document.querySelector(".music-button");




// Make sure to declare your HTML elements as variables! 
let suggestButton= document.querySelector(".suggest");

let genreInput= document.querySelector(".genre");

let suggestInput=document.querySeclector(".links");

let music=document.querySelector(".music"); 
    
// Submit Button 
let Button = document.querySelector("button");
submitButton.onclick = function() {
  
if(genreInput.value ==="music" || genreInput.value ===="music"
)
for(let mus of music)
  
  music.insertAdjacentHTML("afterbegin", "<img src=" + mus + ">")
   }

}

};