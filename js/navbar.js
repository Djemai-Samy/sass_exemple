let isMenuHidden = true;

document.querySelector('nav > img').addEventListener("click", function(){
   let menu = document.querySelector("nav > div")

    menu.style.left = isMenuHidden ? "0" : "-100%";
    isMenuHidden = !isMenuHidden;

    //     if(isMenuHidden){
    //         menu.style.left = "0"
    //         isMenuHidden = false
    //    }else{
    //     menu.style.left = "-100%";
    //     isMenuHidden = true;
    //    } 
})