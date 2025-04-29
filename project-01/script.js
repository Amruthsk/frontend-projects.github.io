// include all the panels
const panels = document.querySelectorAll('.panel');

console.log(panels);

//loop- through each panel
panels.forEach((panel) => {
    //add event listener to each panel for click event activate a fuction
    panel.addEventListener('click', () => {
        //remove active class from all panels
        removeActiveClasses();
        //add active class to the clicked panel but not rectracting
        panel.classList.add('active');
    });
    
})

function removeActiveClasses() {
    //loop through each panel and remove active class
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}