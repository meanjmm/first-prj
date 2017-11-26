import MobilMenu from './modules/MobilMenu';
import RevealOnScroll from './modules/RevealOnScroll'
import $ from 'jquery';


const mobilMenu = new MobilMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "55%");

//
//
// const revealonscroll = new RevealOnScroll;

