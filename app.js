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


//////////////////////////////////////////////////////////////////////////////////////////// 


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//////////////////////////////////////////////////////////////////////////////////////////// 


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
    else if(slide5.checked == true) {
      slide5.checked = false;
      slide6.checked = true;
    }
    else {
      slide6.checked = false;
      slide1.checked = true;
    }
}, 7000);
}


//////////////////////////////////////////////////////////////////////////////////////////// 


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


//////////////////////////////////////////////////////////////////////////////////////////// 


function sendComments() {
  var inp1 = document.getElementById('input1');
  var inp2 = document.getElementById('input2');
  var subject = document.getElementById('subject');
  var commnets = document.getElementById('comments');
  if((inp1.value == '') || (inp2.value == '') || (subject.value == '') || (commnets.value == '')) {
    alert('First fill all the fields to post your comment!');
  }
  else {
    inp1.value = '';
    inp2.value = '';
    subject.value = '';
    commnets.value = '';
    alert('Your comment has been recorded successfully!' + '\n' + 'You can also contact us through other provided channels.');
  }
}