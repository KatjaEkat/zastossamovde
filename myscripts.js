function getRandomFile() {
   var files = [
       "page1.html",
       "page2.html",
       "page3.html",
       "page4.html",
       "page5.html",
       // Add more filenames here
   ];

   var randomIndex = Math.floor(Math.random() * files.length);
   var randomFile = files[randomIndex];

   window.location.href = randomFile;
}