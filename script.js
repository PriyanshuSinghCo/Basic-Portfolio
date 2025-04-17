
let tablinks = document.getElementsByClassName("tab-links");

let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


// function opentab(tabName) {
//     let tablinks = document.getElementsByClassName("tab-links");
//     let tabcontents = document.getElementsByClassName("tab-contents");
  
//     for (let link of tablinks) {
//       link.classList.remove("active-link");
//     }
//     for (let content of tabcontents) {
//       content.classList.remove("active-tab");
//     }
  
//     // Add a tiny delay to trigger reflow for animation
//     const target = document.getElementById(tabName);
//     setTimeout(() => {
//       target.classList.add("active-tab");
//     }, 10);
  
//     event.currentTarget.classList.add("active-link");
//   }
  





const scriptURL = "https://script.google.com/macros/s/AKfycbw3ZBM5l_VDNxrwNvDNY1_G7dzPFPb6YsDhDTCZ43mME_4GLf7xHcSuwjl6smwmvpaHeA/exec"
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})