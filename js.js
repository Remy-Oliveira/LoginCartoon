function toggleForm() {
    document.querySelector(".formLogin").style.transform = "translateX(150%)";

    document.querySelector(".formLogin").style.filter = "blur(15px)";

    document.querySelector(".formRegister").style.transform = "translateX(0)";

    document.querySelector(".formRegister").style.filter = "blur(0px)";

    document.querySelector(".wrapper").classList.add("ativar");
}

function toggleLogin() {
    document.querySelector(".formLogin").style.transform = "translateX(0)";

    document.querySelector(".formLogin").style.filter = "blur(0px)";

    document.querySelector(".formRegister").style.transform = "translateX(-110%)";

    document.querySelector(".formRegister").style.filter = "blur(10px)";

    document.querySelector(".wrapper").classList.remove("ativar");
}