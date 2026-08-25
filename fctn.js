function toggleDetails(button) {
  const details = button.nextElementSibling;
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}


// document.getElementById("header").innerHTML =

//     "<div class='container'>"

//     + "<div class='all'>"
//             + "<button onclick='location.href = `index.html`;'> Accueil </button>"
//             + "<button onclick='location.href = `projets.html`;'> Projets </button>"
//             + "<button onclick='location.href = `contacts.html` ;'> Contacts CV </button>"
//         + "</div>"
   
     
//     + "</div>"
//     + "<hr class = 'hrHeader' />"
// ;

