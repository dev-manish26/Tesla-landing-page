// step 1 : get direction of scrolling
// step 2: get position of where we are 
// step 3: if scrolling up then move to next section or prev sec if scroll down

/* document.lastScrollPosition = 0;
document.lastCentered = 0;

document.addEventListener('scroll', () => {
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')];

    const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
    if (destIndex >= 0 && destIndex < sections.length) {
        console.log({destIndex, direction})
        window.scroll (0, sections[destIndex].offsetTop);
    }

    sections.forEach((section, index ) => {
        if(window.pageYOffset === section.offsetTop) {
            document.lastCentered = index;
        }
    })
}) */