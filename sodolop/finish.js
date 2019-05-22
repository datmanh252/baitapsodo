
function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  return image;
}/*tao anh*/

function onThumbnailClick(event) {
  const image = createImage(event.currentTarget.src);
  document.body.classList.add('no-scroll');
  modalView.style.top = window.pageYOffset + 'px';
  modalView.appendChild(image);
  modalView.classList.remove('hidden');
}

function onModalClick() {
  document.body.classList.remove('no-scroll');
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
}

// Main

const albumView = document.querySelector('#album-view');
  const image = createImage('apple.jpg');
  var huy=document.querySelector('#album-view');
  image.addEventListener('click', onThumbnailClick);
  albumView.appendChild(image);


const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);
$(document).ready(function(){
  $(".ban_to1").click(function() {
      alert('huy');
    });
 });


