// 5. Event Listeners & Event Object
// Add a button to HTML. Attach a click event that logs the event object.


document.querySelector("button").addEventListener('click', (e) => {
    console.log(e);
})