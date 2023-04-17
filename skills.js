let circularprogress = document.querySelector(".circular-progress"),
 progressvalue = document.querySelector(".progress-value");

 let progressStartvalue=0,
 progressEndvalue=90,
 speed=200;

 let progress=setInterval(() => {
    progressStartvalue++;
    progressvalue.textContent =`${progressStartvalue}%`
    circularprogress.style.background =`conic-gradient(#7d2ae8 ${progressStartvalue*3.6}deg,#ededed 0deg)`
    if(progressStartvalue==progressEndvalue){
        clearInterval(progress);
    }
    
 },speed);
 let socialprogress= document.querySelector(".social-progress"),
 gressvalue = document.querySelector(".gress-value");

 let gressStartvalue=0,
 gressEndvalue=70,
 peed=200;

 let gress=setInterval(() => {
    gressStartvalue++;
    gressvalue.textContent =`${gressStartvalue}%`
    socialprogress.style.background =`conic-gradient(#7d2ae8 ${gressStartvalue*3.6}deg,#ededed 0deg)`
    if(gressStartvalue==gressEndvalue){
        clearInterval(gress);
    }
    
 },peed);
