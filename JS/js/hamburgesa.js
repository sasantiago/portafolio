function themes (){
const theme = document.getElementById("theme");
const body = document.getElementById("body");

if (theme.value == 1){
    body.classList.add("theme-white");
    body.classList.remove("theme-dark");
    body.classList.remove("theme-free");
    localStorage.setItem("fondo",theme.value);
}else if (theme.value == 2){
    body.classList.add("theme-dark");
    body.classList.remove("theme-white");
    body.classList.remove("theme-free");
    localStorage.setItem("fondo",theme.value);
}
else if (theme.value == 3){
    body.classList.add("theme-free");
    body.classList.remove("theme-white");
    body.classList.remove("theme-dark");
    localStorage.setItem("fondo",theme.value);
}

}
window.addEventListener("DOMContentLoaded", ()=>{
    let valorLocalStorage = localStorage.getItem("fondo")
    //console.log(localStorage);
    if (valorLocalStorage === "1"){
        body.classList.add('theme-white');
        body.classList.remove('theme-free');
        body.classList.remove('theme-dark');
    }

    else if (valorLocalStorage === "2"){
        body.classList.add('theme-dark');
        body.classList.remove('theme-free');
        body.classList.remove('theme-white')
    }

    else if (valorLocalStorage === "3"){
        body.classList.add('theme-free');
        body.classList.remove('theme-white');
        body.classList.remove('theme-dark')
    }
});
