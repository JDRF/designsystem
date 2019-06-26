// DO NOT EDIT: This file is automatically generated by the project's build task
// NOTICE ///////////////////////////
// This JavaScript is for Demonstration purposes ONLY, it has not been tested for production usage
/////////////////////////////////////

// Disable eslint for these copy/pasted polyfills from MDN
/* eslint-disable */
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}


// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback/*, thisArg*/) {

    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat while k < len.
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator.
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c.
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined.
  };
}

// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
    configurable: true,
    writable: true
  });
}
/* eslint-enable */

class SpiritCardGrid {
  static init() {
    // Get all the card grids in the dom and find any that are carousels
    const carouselGrids = Array.from(document.querySelectorAll('.spirit-card-carousel'));
    carouselGrids.forEach(c => {
      SpiritCardGrid.initializeEachCarousel(c);
    });
  }

  static initializeEachCarousel(c) {
    SpiritCardGrid.addCarouselEventListeners(c);
    if (SpiritCardGrid.carouselIsActive(c)) {
      SpiritCardGrid.setActiveCardAriaAttribute(c, 0); // Make the first card the aria-hidden="false" card
    }
  }

  static addCarouselEventListeners(carousel) {
    const scrollingGrid = carousel.querySelector('.spirit-card-grid');
    const totalCards = carousel.querySelectorAll('.spirit-card').length;
    const paginationButtons = Array.from(carousel.querySelectorAll('.spirit-card-carousel__button'));
    let scrolling;
    let resizing;

    paginationButtons.forEach(b => {
      b.addEventListener('click', function(e) {
        const indicatorDots = Array.from(carousel.querySelectorAll('.spirit-card-carousel__indicator-dot'));
        const activeIndex = indicatorDots.findIndex(dot => dot.classList.contains('spirit-card-carousel__indicator-dot--active')); // Get active index
        let selectedIndex = Math.min(indicatorDots.length, activeIndex + 1); // By default assume the next button was clicked

        if (this.classList.contains('spirit-card-carousel__button--prev')) {
          selectedIndex = Math.max(0, activeIndex - 1); // Go back one card if the previous button was clicked
        }

        SpiritCardGrid.setActiveCardScrollPosition(carousel, selectedIndex);
      });
    });

    scrollingGrid.addEventListener('scroll', function(e) {
      if (scrolling) {
        window.cancelAnimationFrame(scrolling);
      }

      scrolling = window.requestAnimationFrame(() => {
        const scrollPosition = this.scrollLeft;
        const totalScrollDistance = this.scrollWidth - this.clientWidth;

        const cardFloat = 1 / totalCards;
        const indicatorIndex = Math.min(Math.floor(scrollPosition / totalScrollDistance / cardFloat), totalCards - 1);
        SpiritCardGrid.setActiveIndicator(carousel, indicatorIndex);
        SpiritCardGrid.setActiveCardAriaAttribute(carousel, indicatorIndex);
      });
    }, false);

    window.addEventListener('resize', function(e) {
      if (resizing) {
        window.cancelAnimationFrame(resizing);
      }

      resizing = window.requestAnimationFrame(() => {
        // Inspect the carousel to see if the controls are visible, if not, then disable all aria highlighting of the cards since they're all visible
        if (SpiritCardGrid.carouselIsActive(carousel)) { // This checks if the controls are visible, if they're not they'll have on offsetParent === null
          // add carousel aria attributes
          SpiritCardGrid.setActiveCardAriaAttribute(carousel, 0);
        } else {
          // remove carousel aria attributes
          SpiritCardGrid.removeCarouselAriaAttribute(carousel);
        }
      });
    });
  }

  static removeCarouselAriaAttribute(carousel) {
    const cards = Array.from(carousel.querySelectorAll('.spirit-card'));
    cards.forEach(c => c.removeAttribute('aria-hidden'));
  }

  static carouselIsActive(carousel) {
    const controls = carousel.querySelector('.spirit-card-carousel__controls');
    return controls.offsetParent !== null;// This checks if the controls are visible, if they're not they'll have on offsetParent === null
  }

  static setActiveCardScrollPosition(carousel, activeIndex) {
    const cards = Array.from(carousel.querySelectorAll('.spirit-card'));
    const activeCard = cards[activeIndex];
    const scrollingGrid = carousel.querySelector('.spirit-card-grid');
    const cardWidth = activeCard.clientWidth;
    const viewportWidth = window.innerWidth;
    const scrollOffset = (viewportWidth - cardWidth) / 2;
    const scrollPosition = activeCard.offsetLeft - scrollOffset;

    scrollingGrid.scrollLeft = scrollPosition;
  }

  static setActiveCardAriaAttribute(carousel, activeIndex) {
    const cards = Array.from(carousel.querySelectorAll('.spirit-card'));
    const activeCard = cards[activeIndex];
    cards.forEach(c => c.setAttribute('aria-hidden', 'true'));
    activeCard.setAttribute('aria-hidden', 'false');
  }

  static setActiveIndicator(carousel, activeIndex) {
    const dotActiveClass = 'spirit-card-carousel__indicator-dot--active';
    const indicatorDots = Array.from(carousel.querySelectorAll('.spirit-card-carousel__indicator-dot'));
    const cardCount = indicatorDots.length;
    const prevButton = carousel.querySelector('.spirit-card-carousel__button--prev');
    const nextButton = carousel.querySelector('.spirit-card-carousel__button--next');
    indicatorDots.forEach(d => { d.classList.remove(dotActiveClass); });
    indicatorDots[activeIndex].classList.add(dotActiveClass);

    // Enable/Disable prev/next buttons
    if (activeIndex === 0) {
      prevButton.setAttribute('disabled', true);
    } else {
      prevButton.removeAttribute('disabled');
    }

    if (activeIndex === cardCount - 1) {
      nextButton.setAttribute('disabled', true);
    } else {
      nextButton.removeAttribute('disabled');
    }
  }
}

SpiritCardGrid.init();

/* global Inputmask */
class SpiritFormInputMasks {
  static enable() {
    /* eslint-disable new-cap */
    Inputmask({ mask: "99/99/9999", placeholder: "mm/dd/yyyy" }).mask('.spirit-form__input--mask-date');
    Inputmask({ mask: "99/99", placeholder: "mm/yy" }).mask('.spirit-form__input--mask-date-mmyy');
    Inputmask({ mask: "(999) 999-9999" }).mask('.spirit-form__input--mask-tel');
    /* eslint-enable new-cap */
  }
}

SpiritFormInputMasks.enable();

class SpiritFormPasswordToggle {
  static enable() {
    const passwordToggleInputs = Array.from(document.querySelectorAll('.spirit-form__input--password-toggle'));
    passwordToggleInputs.forEach(i => {
      const input = i.querySelector('input');
      const trigger = i.querySelector('a');
      trigger.addEventListener('click', e => {
        if (input.type === 'text') {
          input.type = 'password';
          trigger.textContent = 'Show';
        } else {
          input.type = 'text';
          trigger.textContent = 'Hide';
        }
      });
    });
  }
}

SpiritFormPasswordToggle.enable();

/**
 * Vertical Navigation Setup + Actions -- for Demonstration Purposes
 *
 * @return {void}
 */
const demoPrimaryNavigation = () => {
  const headerNav = document.getElementById('header-nav-demo');

  if (!headerNav) {
    return;
  }

  /**
   * Initialize Each Vertical Nav
   *
   * @return {void}
   */
  const demoNavActions = () => {
    const navTriggers = Array.from(document.querySelectorAll('.header-nav-demo-trigger'));
    const spiritNavActiveClass = '-js-spirit-primary-nav-active';

    if (!navTriggers) {
      return;
    }

    /**
     * Toggle Navigation - add or remove class to body if toggle clicked
     *
     * @param {object} e event
     */
    const toggleNavigation = (e) => {
      e.preventDefault();
      document.body.classList.toggle(spiritNavActiveClass);
    };

    /**
     * Loop through nav triggers
     */
    navTriggers.forEach(n => {
      n.addEventListener('click', toggleNavigation);
    });

  };

  demoNavActions();

};

demoPrimaryNavigation();

/**
 * Vertical Navigation Setup + Actions
 *
 * @return {void}
 */
const spiritVerticalNavigation = () => {
  const vertNavItems = Array.from(document.querySelectorAll('.spirit-vertical-nav'));

  if (!vertNavItems) {
    return;
  }

  /**
   * Initialize Each Vertical Nav
   *
   * @param {object} n Navigation Item
   * @return {void}
   */
  const initializeEachNav = (n) => {
    const parentItems = Array.from(n.querySelectorAll('.spirit-vertical-nav__item-parent'));
    // const parentItemsCount = parentItems.length;

    const menuSubOpen = (closedItem) => {

      closedItem.classList.add('submenu-is-open');
      closedItem.parentNode.classList.add('child-has-focus');
      closedItem.setAttribute('aria-expanded', true);

      if (closedItem.parentNode.querySelector('.spirit-vertical-nav__subnav')) {
        closedItem.parentNode.querySelector('.spirit-vertical-nav__subnav').setAttribute('aria-hidden', 'false');
      }

    }; // menuSubOpen()

    /**
     * Close Sub Menu(s)
     *
     * @param {object} openItem Open Subnav Item
     */
    const menuSubClose = (openItem) => {

      openItem.classList.remove('submenu-is-open');
      openItem.parentNode.classList.remove('child-has-focus');
      openItem.setAttribute('aria-expanded', false);

      if (openItem.parentNode.querySelector('.sub-menu')) {
        openItem.parentNode.querySelector('.sub-menu').setAttribute('aria-hidden', 'true');
      }

    }; // menuSubClose()

    /**
     * Listener Action for Submenu Trigger Click
     * @param {object} e event
     */
    const listnerSubmenuClick = (e) => {
      const target = e.currentTarget;

      if (target.getAttribute('aria-haspopup')) {

        // Stop links from firing
        e.preventDefault();

        // Stop events from bubbling up to parent elements
        e.stopPropagation();

        const parentMenu = target.parentNode;
        const allOpenMenuTriggers = Array.from(n.querySelectorAll('.child-has-focus > a.submenu-is-open:not(.spirit-vertical-nav__link--expanded)'));
        const allOpenMenuTriggersCount = allOpenMenuTriggers.length;

        if (allOpenMenuTriggersCount > 0) {

          // Make sure only 1 menu item can be opened at a time
          allOpenMenuTriggers.forEach(t => {
            // Check if the open menu is top-level, if so, close it
            if (parentMenu.parentNode.parentNode === n && t !== target) {
              menuSubClose(t);
            }
          });

        } // if

        if (e.currentTarget.nodeName === 'A' && target.classList.contains('submenu-is-open')) {

          // The menu is already open, so this should be a close action
          menuSubClose(target);

        } else {

          // The menu is closed, so this click should open it
          menuSubOpen(target);

        }
      }
    };

    /**
     * Listener Action for Submenu Trigger Click
     * @param {object} evt event
     */
    const listnerSubmenuFocus = (evt) => {

      if (!evt.type === 'keyup' || !evt.keyCode === 9) {
        return;
      }

      const target = evt.currentTarget;
      const parentMenu = target.parentNode;
      const allOpenMenuTriggers = Array.from(n.querySelectorAll('.child-has-focus > a.submenu-is-open'));
      const allOpenMenuTriggersCount = allOpenMenuTriggers.length;

      if (allOpenMenuTriggersCount > 0) {

        // Make sure only 1 menu item can be opened at a time
        allOpenMenuTriggers.forEach(t => {
          // Check if the open menu is top-level, if so, close it
          if (parentMenu.parentNode.parentNode === n) {
            menuSubClose(t);
          }
        });
      }

      menuSubOpen(target);
    };

    /**
     * Loop through parent items
     */
    parentItems.forEach(p => {
      const trigger = p.querySelector('a');
      const subNav = p.querySelector('.spirit-vertical-nav__subnav');

      if (!trigger || !subNav) {
        return;
      }

      // Let a screen reader know this menu has a submenu by hooking into the first link
      trigger.setAttribute('aria-haspopup', 'true');
      if (!trigger.hasAttribute('aria-expanded')) {
        trigger.setAttribute('aria-expanded', 'false');
      }

      // Hide and label each sub menu
      subNav.setAttribute('aria-haspopup', 'true');
      subNav.setAttribute('aria-label', 'Submenu');

      trigger.addEventListener('click', listnerSubmenuClick);

      trigger.addEventListener('keydown', listnerSubmenuFocus);

    });
  };

  /**
   * Loop through vertical navigation elements
   */
  vertNavItems.forEach(n => {
    initializeEachNav(n);
  });
};

spiritVerticalNavigation();
