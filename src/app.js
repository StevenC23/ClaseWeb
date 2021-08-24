window.onscroll = () => {
  const fakeH = document.querySelector('#fakeHeader');

  if (window.innerWidth > 375) {
    if (window.pageYOffset >= 100) {
      fakeH.style.top = '0px';
      fakeH.style.opacity = '1';
    } else {
      fakeH.style.top = '-75px';
      fakeH.style.opacity = '0';
    }
  }

};

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function (){
  let desplazamiento = window.pageYOffset;
  console.log(window.pageXOffset);

  if(ubicacionPrincipal >= desplazamiento){
    // console.log(1);
    document.getElementById('searchBar').style.top = '0px';
    document.getElementById('footer').style.bottom = '-100px';
  }else{
    // console.log(2);
    document.getElementById('searchBar').style.top = '-100px';
    document.getElementById('footer').style.bottom = '0px';
  }

  ubicacionPrincipal = desplazamiento;
}
