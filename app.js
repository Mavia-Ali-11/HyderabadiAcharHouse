var navbar = document.querySelector('nav')
var mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('scrolled')
        mybutton.style.display = "block";
    } else {
        navbar.classList.remove('scrolled')
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mySlider() {
  var slide1 = document.getElementById('slide1');
  var slide2 = document.getElementById('slide2');
  var slide3 = document.getElementById('slide3');
  var slide4 = document.getElementById('slide4');
  var slide5 = document.getElementById('slide5');


setInterval(
  function(){ 
    if(slide1.checked == true) {
      slide1.checked = false;
      slide2.checked = true;
    }
    else if(slide2.checked == true) {
      slide2.checked = false;
      slide3.checked = true;
    }
    else if(slide3.checked == true) {
      slide3.checked = false;
      slide4.checked = true;
    }
    else if(slide4.checked == true) {
      slide4.checked = false;
      slide5.checked = true;
    }
    else {
      slide5.checked = false;
      slide1.checked = true;
    }
}, 5000);
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

function openImage(img,caption) {
  modal.style.display = "block";
  modalImg.src = img;
  captionText.innerHTML = caption;
}

function closeImg() {
  modal.style.display = 'none';
}




























// var modal0 = document.getElementById("myModal0");
// var modal1 = document.getElementById("myModal1");
// var modal2 = document.getElementById("myModal2");
// var modal3 = document.getElementById("myModal3");
// var modal4 = document.getElementById("myModal4");
// var modal5 = document.getElementById("myModal5");
// var modal6 = document.getElementById("myModal6");
// var modal7 = document.getElementById("myModal7");
// var modal8 = document.getElementById("myModal8");
// var modal9 = document.getElementById("myModal9");
// var modal10 = document.getElementById("myModal10");
// var modal11 = document.getElementById("myModal11");
// var modal12 = document.getElementById("myModal12");
// var modal13 = document.getElementById("myModal13");
// var modal14 = document.getElementById("myModal14");

// var img0 = document.getElementById("myImg0");
// var img1 = document.getElementById("myImg1");
// var img2 = document.getElementById("myImg2");
// var img3 = document.getElementById("myImg3");
// var img4 = document.getElementById("myImg4");
// var img5 = document.getElementById("myImg5");
// var img6 = document.getElementById("myImg6");
// var img7 = document.getElementById("myImg7");
// var img8 = document.getElementById("myImg8");
// var img9 = document.getElementById("myImg9");
// var img10 = document.getElementById("myImg10");
// var img11 = document.getElementById("myImg11");
// var img12 = document.getElementById("myImg12");
// var img13 = document.getElementById("myImg13");
// var img14 = document.getElementById("myImg14");

// var modalImg0 = document.getElementById("img0");
// var modalImg1 = document.getElementById("img1");
// var modalImg2 = document.getElementById("img2");
// var modalImg3 = document.getElementById("img3");
// var modalImg4 = document.getElementById("img4");
// var modalImg5 = document.getElementById("img5");
// var modalImg6 = document.getElementById("img6");
// var modalImg7 = document.getElementById("img7");
// var modalImg8 = document.getElementById("img8");
// var modalImg9 = document.getElementById("img9");
// var modalImg10 = document.getElementById("img10");
// var modalImg11 = document.getElementById("img11");
// var modalImg12 = document.getElementById("img12");
// var modalImg13 = document.getElementById("img13");
// var modalImg14 = document.getElementById("img14");

// var captionText0 = document.getElementById("caption0");
// var captionText1 = document.getElementById("caption1");
// var captionText2 = document.getElementById("caption2");
// var captionText3 = document.getElementById("caption3");
// var captionText4 = document.getElementById("caption4");
// var captionText5 = document.getElementById("caption5");
// var captionText6 = document.getElementById("caption6");
// var captionText7 = document.getElementById("caption7");
// var captionText8 = document.getElementById("caption8");
// var captionText9 = document.getElementById("caption9");
// var captionText10 = document.getElementById("caption10");
// var captionText11 = document.getElementById("caption11");
// var captionText12 = document.getElementById("caption12");
// var captionText13 = document.getElementById("caption13");
// var captionText14 = document.getElementById("caption14");
// img0.onclick = function () {
//     modal0.style.display = "block";
//     modalImg0.src = this.src;
//     captionText0.innerHTML = this.alt;
// }
// img1.onclick = function () {
//     modal1.style.display = "block";
//     modalImg1.src = this.src;
//     captionText1.innerHTML = this.alt;
// }
// img2.onclick = function () {
//     modal2.style.display = "block";
//     modalImg2.src = this.src;
//     captionText2.innerHTML = this.alt;
// }
// img3.onclick = function () {
//     modal3.style.display = "block";
//     modalImg3.src = this.src;
//     captionText3.innerHTML = this.alt;
// }
// img4.onclick = function () {
//     modal4.style.display = "block";
//     modalImg4.src = this.src;
//     captionText4.innerHTML = this.alt;
// }
// img5.onclick = function () {
//     modal5.style.display = "block";
//     modalImg5.src = this.src;
//     captionText5.innerHTML = this.alt;
// }
// img6.onclick = function () {
//     modal6.style.display = "block";
//     modalImg6.src = this.src;
//     captionText6.innerHTML = this.alt;
// }
// img7.onclick = function () {
//     modal7.style.display = "block";
//     modalImg7.src = this.src;
//     captionText7.innerHTML = this.alt;
// }
// img8.onclick = function () {
//     modal8.style.display = "block";
//     modalImg8.src = this.src;
//     captionText8.innerHTML = this.alt;
// }
// img9.onclick = function () {
//     modal9.style.display = "block";
//     modalImg9.src = this.src;
//     captionText9.innerHTML = this.alt;
// }
// img10.onclick = function () {
//     modal10.style.display = "block";
//     modalImg10.src = this.src;
//     captionText10.innerHTML = this.alt;
// }
// img11.onclick = function () {
//     modal11.style.display = "block";
//     modalImg11.src = this.src;
//     captionText11.innerHTML = this.alt;
// }
// img12.onclick = function () {
//     modal12.style.display = "block";
//     modalImg12.src = this.src;
//     captionText12.innerHTML = this.alt;
// }
// img13.onclick = function () {
//     modal13.style.display = "block";
//     modalImg13.src = this.src;
//     captionText13.innerHTML = this.alt;
// }
// img14.onclick = function () {
//     modal14.style.display = "block";
//     modalImg14.src = this.src;
//     captionText14.innerHTML = this.alt;
// }

// var span0 = document.getElementsByClassName("close0")[0];
// var span1 = document.getElementsByClassName("close1")[0];
// var span2 = document.getElementsByClassName("close2")[0];
// var span3 = document.getElementsByClassName("close3")[0];
// var span4 = document.getElementsByClassName("close4")[0];
// var span5 = document.getElementsByClassName("close5")[0];
// var span6 = document.getElementsByClassName("close6")[0];
// var span7 = document.getElementsByClassName("close7")[0];
// var span8 = document.getElementsByClassName("close8")[0];
// var span9 = document.getElementsByClassName("close9")[0];
// var span10 = document.getElementsByClassName("close10")[0];
// var span11 = document.getElementsByClassName("close11")[0];
// var span12 = document.getElementsByClassName("close12")[0];
// var span13 = document.getElementsByClassName("close13")[0];
// var span14 = document.getElementsByClassName("close14")[0];

// span0.onclick = function () {
//     modal0.style.display = "none";
// }
// span1.onclick = function () {
//     modal1.style.display = "none";
// }
// span2.onclick = function () {
//     modal2.style.display = "none";
// }
// span3.onclick = function () {
//     modal3.style.display = "none";
// }
// span4.onclick = function () {
//     modal4.style.display = "none";
// }
// span5.onclick = function () {
//     modal5.style.display = "none";
// }
// span6.onclick = function () {
//     modal6.style.display = "none";
// }
// span7.onclick = function () {
//     modal7.style.display = "none";
// }
// span8.onclick = function () {
//     modal8.style.display = "none";
// }
// span9.onclick = function () {
//     modal9.style.display = "none";
// }
// span10.onclick = function () {
//     modal10.style.display = "none";
// }
// span11.onclick = function () {
//     modal11.style.display = "none";
// }
// span12.onclick = function () {
//     modal12.style.display = "none";
// }
// span13.onclick = function () {
//     modal13.style.display = "none";
// }
// span14.onclick = function () {
//     modal14.style.display = "none";
// }



