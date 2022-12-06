/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

/**global navigation variables  */
const navigation = document.getElementById('navbar__list');

/**global section variables */
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

/** build the nav */
function navBuild() {
    function setActiveClass(e){
        var currentSection = e.target.innerHTML;
        var selectedSections = Array.from(document.getElementsByTagName("section"));
        for (var current in selectedSections) {
            if (selectedSections[current].dataset.nav === currentSection){
                selectedSections[current].setAttribute('class', "your-active-class");
            }
            else{
                selectedSections[current].setAttribute('class', "");
            }
        }
        
    }
    var selectedSections = Array.from(document.getElementsByTagName("section"));
    // section loop
    for (var current in selectedSections) {
        var sectionID = selectedSections[current].id;
        var sectionDataNav = selectedSections[current].dataset.nav;
        // create the li element and add to the navigation bar */
        const newLi = document.createElement('li');
        navigation.appendChild(newLi);
        // create the a element and add to the new li element */
        const navButton = document.createElement('a');
        navButton.setAttribute('class', 'menu__link');
        navButton.setAttribute('href', `#${sectionID}`);
        navButton.textContent = sectionDataNav;
        newLi.appendChild(navButton);
        navButton.addEventListener('click', function (e) {
            setActiveClass(e)
        });
    }
}

function callback(e) {
    var e = window.e || e;
    var selectedSections = Array.from(document.getElementsByTagName("section"));
    console.log(sections[0])
    console.log(e.target.attributes.href.value)
    for (var current in selectedSections) {
        selectedSections[current].class="";
    }
}


navBuild();
console.log('test')

// Scroll to section on link click
let elem = document.querySelector('div');
let rect = elem.getBoundingClientRect();
for (const key in rect) {
  if (typeof rect[key] !== 'function') {
    let para = document.createElement('p');
    para.textContent = `${key} : ${rect[key]}`;
    document.body.appendChild(para);
  }
}



// on window scroll
window.addEventListener('scroll', (e) => {

    // get all sections on the page
    var sections = Array.from(document.getElementsByTagName("section"));
  
    // loop through each section
    sections.forEach( section => {
  
      // get px distance from top
      const topDistance = section.getBoundingClientRect().top;
  
      // if the distance to the top is between 0-100px
      if (topDistance > -50 && topDistance < 150) {
        section.classList.add('your-active-class');
      }
      // otherwise, remove the class
      
      
      else {
        section.classList.remove('your-active-class');
      }
    });
  });


// Shows which section is in viewport

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu


// Set sections as active
