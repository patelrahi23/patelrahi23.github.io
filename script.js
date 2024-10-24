var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sideMenu");
const mssg = document.getElementById("msg");
const scriptURL = 'https://script.google.com/macros/s/AKfycbz6d4sLYNza3tKdvGfUa2g--l0qBrQfIHTLY-OMEnox6ACyXtmol73u8zQr6qz36n7riA/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        mssg.innerHTML = "Message Sent!"
        setTimeout(function(){
          mssg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}

function openmenu(){

  sidemenu.style.right="0px";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}