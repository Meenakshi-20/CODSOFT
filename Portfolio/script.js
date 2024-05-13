document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    // You can handle form data submission here, like sending it to a server
    // Example: 
    // fetch('submit.php', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
    alert("Form submitted successfully!"); // For demonstration purposes
});
