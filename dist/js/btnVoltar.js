const btnVoltar = document.querySelector(".voltarTopo");
const doc = document.documentElement;

document.addEventListener("scroll", function(e) {
    if (doc.scrollTop == 0){
        btnVoltar.style.display = "none";
    }
    else{
        btnVoltar.style.display = "block";
    }
});

btnVoltar.addEventListener("click",function (){
    window.scrollTo({top: 0, behavior: 'smooth'});
});