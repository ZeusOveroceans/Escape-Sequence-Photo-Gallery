const imageSources = [
  "assets/trail.jpg",
  "assets/lakesunset.jpg",
  "assets/cabin.jpg",
  "assets/doe.jpg",
  "assets/starrynight.jpg",
];

function addThumbnail(imageSources) {
  // 1.1 Create the element
   var imgElement = document.createElement("img");
  // 1.2 Customize the element
  imgElement.src = imageSources;
  imgElement.classList.add("thumbnail");
  // 1.3 Append the element
  document.getElementById("thumbnail-container").appendChild(imgElement);
  // 1.4 Add the onclick
  imgElement.onclick = function() {
          document.getElementById("fullsize-image").src = imageSources;
          document.getElementById("fullsize-image").style.display = "block";
      };
  }


function addAllThumbnails() {
  // 2.1 Loop through imageSources
   for (var i = 0; i < imageSources.length; i++) {
  // 2.2 Call addThumbnail each iteration 
     addThumbnail(imageSources[i]);
     }
}

// 2.3 Call addAllThumbnails

addAllThumbnails([
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
]);


// LevelUp Display the first image on page load

// Automatically display the first image fullsize when the page loads

function displayFullsizeImage(imageSource) {
    document.getElementById("fullsize-image").src = imageSource;
    document.getElementById("fullsize-image").style.display = "block";
}

window.onload = function() {
    var firstThumbnail = document.querySelector(".thumbnail");
    if (firstThumbnail) {
        var firstImageSource = firstThumbnail.src;
        displayFullsizeImage(firstImageSource);
    }
};
