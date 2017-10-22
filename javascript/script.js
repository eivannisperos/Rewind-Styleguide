window.onload = function() {
  var toggleMenuBtn = document.getElementById('toggle-menu-btn');
  var closeMenuBtn = document.getElementById('close-menu-btn');

  var menuBar = document.getElementById('styleguide-menu');
  var content = document.getElementById('styleguide-content');

  function openNav() {
    menuBar.style.width = '70%';
    content.style.marginLeft = "70%";
  }

  function closeNav() {
    menuBar.style.width = "0";
    content.style.marginLeft = "0";
  }

  toggleMenuBtn.onclick = function() {
    openNav();
  }

  closeMenuBtn.onclick = function() {
    closeNav();
  }
}
