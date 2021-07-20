var counter = 0;

document.getElementsByClassName("center")[0].addEventListener('click', animation);

function animation(){

    //first count the clicks
    counter += 1;

    //second: evaluate the counter as even or odd and based upon its value, apply animation
    switch(counter%2){
        // odd : add animation classes to corresponding strips in css
        case 1 :  document.getElementsByClassName("top-strip")[0].classList.remove("reverse-animation-top-strip");
                  document.getElementsByClassName("top-strip")[0].classList.add("animation-top-strip");


                  document.getElementsByClassName("middle-strip")[0].classList.remove("reverse-animation-middle-strip");
                  document.getElementsByClassName("middle-strip")[0].classList.add("animation-middle-strip");

                   document.getElementsByClassName("bottom-strip")[0].classList.remove("reverse-animation-bottom-strip");
                  document.getElementsByClassName("bottom-strip")[0].classList.add("animation-bottom-strip");

                  break;
           
        case 0 :  document.getElementsByClassName("top-strip")[0].classList.remove("animation-top-strip");
                  document.getElementsByClassName("top-strip")[0].classList.add("reverse-animation-top-strip");


                  document.getElementsByClassName("middle-strip")[0].classList.remove("animation-middle-strip");
                  document.getElementsByClassName("middle-strip")[0].classList.add("reverse-animation-middle-strip");


                  document.getElementsByClassName("bottom-strip")[0].classList.remove("animation-bottom-strip");
                  document.getElementsByClassName("bottom-strip")[0].classList.add("reverse-animation-bottom-strip");


                  break;

    }

}
