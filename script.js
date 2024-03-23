const fullPath = document.location.pathname;
const lastSlashIndex = fullPath.lastIndexOf("/");
const fileName = fullPath.substring(lastSlashIndex + 1);

if (fileName === "index.html") {
	
} else if (fileName === "login.html") {
	const passwordInput = document.getElementById("password-input");
	const passwordToggle = document.getElementById("password-toggle");
	passwordToggle.addEventListener("click", function () {
		if (passwordInput.type === "password") {
			passwordInput.type = "text";
			passwordToggle.classList.add("password-toggle-visible");
		} else {
			passwordInput.type = "password";
			passwordToggle.classList.remove("password-toggle-visible");
		}
   }); 
}

// Barra de navegação Abrir e Fechar
const sidenavBtn = document.getElementById("sidenav-btn");
if (sidenavBtn) {
	sidenavBtn.addEventListener("click", function toggleSidenavWidth() {
		const sidenav = document.getElementById("sidenav");
		const mainContent = document.getElementById("main-content");
		if (sidenav.style.width !== "280px") {
			sidenav.style.width = "280px";
			//mainContent.style.marginLeft = "280px";  MAIN MOVE-SE PARA O LADO
			mainContent.style.width = "100wv";
	    } else {
			sidenav.style.width = "30px";
			//mainContent.style.marginLeft= "35px";  MAIN MOVE-SE PARA O LADO
			mainContent.style.width = "100wv";
  	    }
	});
}

const image = document.getElementById('logo');
if (image) {
	function checkWindowSize() {
        if (window.innerWidth < 850) {
          image.src = 'original-img/logo.png';
        } else {
          image.src = 'original-img/logo_grande.png';
        }
      }
	window.addEventListener('load', checkWindowSize);
    window.addEventListener('resize', checkWindowSize); 
}



/*
var isDragging = false;
var startY = 0;
var offsetY = 0;
var distance = 0;

sidenavBtn.addEventListener("mousedown", function(e) {
  isDragging = true;
  startY = e.clientY;
  offsetY = parseInt(window.getComputedStyle(sidenavBtn).getPropertyValue("top"));
  distance = 0;
});

sidenavBtn.addEventListener("mousemove", function(e) {
  if (isDragging) {
    var deltaY = e.clientY - startY;
    if (Math.abs(deltaY) > 20) {
      sidenavBtn.style.top = (offsetY + deltaY) + "px";
	  distance = deltaY;
    }
  }
});


sidenavBtn.addEventListener("mouseup", function(e) {
	isDragging = false;
	if (distance <= 20){
		  alert("Click");
	}
});
*/
