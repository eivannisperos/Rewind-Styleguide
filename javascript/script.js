window.onload = function() {
  const MOBILE = window.matchMedia("(max-width: 720px)");

  var toggleMenuBtn = document.getElementById('toggle-menu-btn');
  var closeMenuBtn = document.getElementById('close-menu-btn');

  var menuBar = document.getElementById('styleguide-menu');
  var content = document.getElementById('styleguide-content');

  var mobileMenuBarWidth = '70%';
  var mobileContentLeftM = '70%';

  var desktopMenuBarWidth = '20%';
  var desktopContentLeftM = '20%';

  //navigational javascript
  var mobileLinks = document.getElementById('main-nav-bar-hidden');
  var mobileIcon = document.getElementById('nav-toggle');
  var mobileIconPadding = document.getElementById('nav-toggle-area');
  var mobileLinksA = document.getElementsByClassName('hidden-link');
  var closeMobileNav = document.getElementById("close-nav");

  var deleteItemLogo = document.getElementsByClassName('delete-item');

  function hideMobileLinks(e) {
    if (e.target != mobileLinks ) {
      hideMobileLinksAction();
    }
  }

  function showMobileLinks() {
    mobileLinks.style.display = 'flex';
  }

  function hideMobileLinksAction() {
    mobileLinks.style.display = 'none';
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

      hideMobileLinksAction();
      mobileIcon.addEventListener("click", showMobileLinks);
      closeMobileNav.addEventListener("click", hideMobileLinks);

    } else {
      toggleMenuBtn.removeEventListener("click", openNav);
      closeMenuBtn.removeEventListener("click", closeNav);

      /*
        - when screen reverts back to desktop, reverts to default sizes
      */
      menuBar.style.width = desktopMenuBarWidth;
      content.style.marginLeft = desktopContentLeftM;
      mobileLinks.style.display = 'flex';

      mobileIcon.removeEventListener("click", showMobileLinks);
    }
  }

  // TODO: re-implement default width and margin size of menu and content divs
  checkMobileScreen();
  window.onresize = function() {
    checkMobileScreen();
  }
}
