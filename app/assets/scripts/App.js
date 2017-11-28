import MobilMenu from      './modules/MobilMenu';
import RevealOnScroll from './modules/RevealOnScroll'
import $ from              'jquery';
import StickyHeader from   './modules/StickyHeader';
import Modal from          './modules/Modal';


const mobilMenu = new MobilMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "55%");
const stickyheader = new StickyHeader();
var modal = new Modal();
