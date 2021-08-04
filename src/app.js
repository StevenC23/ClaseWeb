window.onscroll = () => {
    const fakeH = document.querySelector('#fakeHeader');
    if (window.pageYOffset >= 150) {
        fakeH.style.top = '0px';
        fakeH.style.opacity = '1';
    } else {
        fakeH.style.top = '-75px';
        fakeH.style.opacity = '0';
    }
}