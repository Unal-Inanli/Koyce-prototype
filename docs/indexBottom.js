import * as nav from "./js/bottom/nav.js";
import * as gallery from './js/top/gallery.js';
import * as modal from './js/bottom/modal.js';
import * as scroll from './js/bottom/scroll.js';

scroll.default();
scroll.animateBlocks();

modal.openModal();
modal.closeModal();

gallery.gallery();

nav.navToggle();
// nav.navLinkHover();
nav.smoothScroll();
nav.smoothScrollNav();
// nav.revealHeader();