(function() {
  const MIN_INTERVAL_DURATION = 10; // Milliseconds

  const menu = document.querySelector('#menu');
  const hamburger = document.querySelector('header .hamburger');
  const hamburgerLines = hamburger.querySelectorAll('.line');
  let menuVisible = false;

  hamburger.addEventListener('click', handleHamburgerClick);

  window.onresize =  function() {
    // Ensure that the menu is hidden when the 
    // page is resized above responsive breakpoint:
    if (window.innerWidth >= 500 && menuVisible) {
      menu.style.display = 'none';
      menuVisible = false;
      horizontaliseHamburger();
      partHambugerLinesVertically();
    }
  };

  function handleHamburgerClick() {
    if (!menuVisible) {
      slideDown(menu, 'flex', 10); // Show menu
      menuVisible = true;
      verticaliseHamburger();
      partHamburgerLinesHorizontally();
    } else {
      slideUp(menu, 10); // Hide menu
      menuVisible = false;
      horizontaliseHamburger();
      partHambugerLinesVertically();
    }
  }

  // Transitions hamburger lines to a
  // vertical state ready for animation:
  function verticaliseHamburger() {
    hamburgerLines.forEach(line => {
      line.style.display = 'none';
    });

    hamburger.style.flexDirection = 'row';
    
    hamburgerLines.forEach(line => {
      line.style.height = '30px';
      line.style.width = '10px';
      line.style.display = 'block';
    });
  }

  // Animates the separation of hamgurger lines
  // when vertical:
  function partHamburgerLinesHorizontally() {
    const targetWidth = 6;
    let currentWidth = 10;
    const intervalID = setInterval(() => {
      if (currentWidth <= targetWidth) {
        clearInterval(intervalID);
      } else {
        currentWidth -= 0.25;
        hamburgerLines.forEach(line => {
          line.style.width = currentWidth + 'px';
        });
      }
    }, 5);
  }

  // Transitions hamburger lines to a
  // horizontal state ready for animation:
  function horizontaliseHamburger() {
    hamburgerLines.forEach(line => {
      line.style.display = 'none';
    });

    hamburger.style.flexDirection = 'column';
    
    hamburgerLines.forEach(line => {
      line.style.height = '10px';
      line.style.width = '30px';
      line.style.display = 'block';
    });
  }

  // Animates the separation of hamburger lines
  // when horizontal:
  function partHambugerLinesVertically() {
    const targetHeight = 6;
    let currentHeight = 10;
    const intervalID = setInterval(() => {
      if (currentHeight <= targetHeight) {
        clearInterval(intervalID);
      } else {
        currentHeight -= 0.25;
        hamburgerLines.forEach(line => {
          line.style.height = currentHeight + 'px';
        });
      }
    }, 5);
  }

  // Slides element down into visibility (similar
  // to jQuery):
  function slideDown(element, displayType, durationFactor) {
    if (element.style.display === displayType) {
      // The element is already displayed.
      // Abort transition.
      return;
    }
  
    // Get the elements display height
    // and prepare for transition:
    element.style.visibility = 'hidden';
    element.style.display = displayType;
    const targetHeight = element.getBoundingClientRect().height;
    element.style.height = 0;
    element.style.visibility = 'visible';
  
    // Perform transition:
    const HEIGHT_INCREMENT = targetHeight / durationFactor;
    let currentHeight = 0;
    const intervalID = setInterval(() => {
      durationFactor -= 1;
      currentHeight += HEIGHT_INCREMENT;
      element.style.height = currentHeight + 'px';
      if (durationFactor === 0) {
        element.style.height = 'auto';
        clearInterval(intervalID);
      }
    }, MIN_INTERVAL_DURATION);
  }

  // Slides element up out of visibility (
  // similar to jQuery):
  function slideUp(element, durationFactor) {
    if (element.style.display === 'none') {
      // The element is already not displayed.
      // Abort transition.
      return;
    }
  
    // Perform transition:
    let currentHeight = element.getBoundingClientRect().height;
    const HEIGHT_INCREMENT = currentHeight / durationFactor;
    const intervalID = setInterval(() => {
      durationFactor -= 1;
      currentHeight -= HEIGHT_INCREMENT;
      element.style.height = currentHeight + 'px';
      if (durationFactor === 0) {
        element.style.display = 'none';
        element.style.height = 'auto';
        clearInterval(intervalID);
      }
    }, MIN_INTERVAL_DURATION);
  }
})();