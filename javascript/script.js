window.onload = function() {
  const MOBILE = window.matchMedia("(max-width: 720px)");

  var toggleMenuBtn = document.getElementById('toggle-menu-btn');
  var closeMenuBtn = document.getElementById('close-menu-btn');

  var menuBar = document.getElementById('styleguide-menu');
  var content = document.getElementById('styleguide-content');

  var mobileMenuBarWidth = '70%';
  var mobileContentLeftM = '70%';

  var desktopMenuBarWidth = '40%';
  var desktopContentLeftM = '0';

  //navigational javascript
  var mobileLinks = document.getElementById('main-nav-bar-hidden');
  var mobileIcon = document.getElementById('nav-toggle');
  var mobileIconPadding = document.getElementById('nav-toggle-area');
  var mobileLinksA = document.getElementsByClassName('hidden-link');

  var deleteItemLogo = document.getElementsByClassName('delete-item');

  function mobileMenuCloseOpen(e) {
    if (e.target != mobileLinks ) {
      mobileLinks.style.display = 'none';
    }

    if (e.target == mobileIcon || e.target == mobileIconPadding) {
      console.log("clicked!");
      mobileLinks.style.display = 'flex';
    }
  }

  function openNav() {
    menuBar.style.width = mobileMenuBarWidth;
    content.style.marginLeft = mobileContentLeftM;
  }

  function closeNav() {
    menuBar.style.width = "0";
    content.style.marginLeft = "0";
  }

  function checkMobileScreen() {
    if (MOBILE.matches) {
      /*close nav
        - placed here so that the nav closes by default when resized
      */
      closeNav();
      toggleMenuBtn.addEventListener("click", openNav);
      closeMenuBtn.addEventListener("click", closeNav);
    } else {
      toggleMenuBtn.removeEventListener("click", openNav);
      closeMenuBtn.removeEventListener("click", closeNav);

      /*
        - when screen reverts back to desktop, reverts to default sizes
      */
      menuBar.style.width = desktopMenuBarWidth;
      content.style.marginLeft = desktopContentLeftM;
    }
  }

  // TODO: re-implement default width and margin size of menu and content divs
  checkMobileScreen();
  window.onresize = function() {
    checkMobileScreen();
  }

  window.onclick = function(event) {
    mobileMenuCloseOpen(event);
  }
}
