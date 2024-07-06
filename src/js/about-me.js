import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export const accordionAboutMe = new Accordion('.accordion-container', {
  duration: 500,
  // openOnInit: [0],
  collapse: false
});
