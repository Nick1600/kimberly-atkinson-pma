//hover social logo to grey:
const facebookContainer = document.querySelector('#facebook-link')
const facebook = document.querySelector('#facebook-path');
const instagramContainer = document.querySelector('#instagram-link')
const instagram = document.querySelector('#instagram-path');
const instagramInner = document.querySelector('#instagram-logo-inner')

function facebookTurnGrey() {
    facebook.style.fill = 'lightgrey';
}
function facebookTurnBlack() {
    facebook.style.fill = 'black';
}

function instagramTurnGrey() {
    instagram.style.fill = 'lightgrey';
    instagramInner.style.fill = 'lightgrey'
}
function instagramTurnBlack() {
    instagram.style.fill = 'black';
    instagramInner.style.fill = 'black'
}

facebookContainer.addEventListener
('mouseenter', facebookTurnGrey);
facebookContainer.addEventListener
('mouseleave', facebookTurnBlack);

instagramContainer.addEventListener
('mouseenter', instagramTurnGrey);
instagramContainer.addEventListener
('mouseleave', instagramTurnBlack);