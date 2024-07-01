// Get elements from the DOM
const search = document.querySelector('.search');
const captions = document.querySelectorAll('.caption');

// Add a input event
// This event fires whenever you type something in the input field
search.addEventListener('input', ()=>{
    // If the search bar isn't empty
    if(search.value!==""){
        //Loop through all panels
        panels.forEach(caption=>{
            // Get the panel heading
            const captionHeading = caption.querySelector('h2');
            // Convert input value to lowercase letters
            const captionHeadingText = captionHeading.innerHTML.toLowerCase();
            // Convert input value to lowercase letters
            // This will make the search case Unsensitive
            const inputText = search.value.toLowerCase();
            // If the heading text DOESN'T(!) contain what is in the search bar
            if(!captionHeadingText.includes(inputText)){
                // Hide that panel
                captionHeading.parentElement.style.display = "none";
            }
            else{
                // But if it does then make sure to show that panel
                captionHeading.parentElement.style.display = "block";
            }
        });
    }
    else{
        // If the search bar is empty
        // Show all of the panels
        captions.forEach(caption=>{
            caption.style.display="block";
        });
    }
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};
