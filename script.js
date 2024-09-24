//Chapter 43-48

//Question No 1:
document.getElementById("alertLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    alert("You clicked the link!");
  });


//Question No 2:  
  function showAlert(message) {
    alert(message);
}


//Question No 3:  
function deleteRow(button) {
    // Find the row that contains the button
    var row = button.closest('tr');
    
    // Remove the row from the table
    row.remove();
    
    // Optional: Display an alert or log to console
    alert("Record deleted successfully.");
}

// //Question No 5:
   // Initial counter value
   var counter = 0;

   // Get elements from the DOM
   var counterValue = document.getElementById('counterValue');
   var increaseBtn = document.getElementById('increaseBtn');
   var decreaseBtn = document.getElementById('decreaseBtn');

   // Function to update the displayed counter value
   function updateCounter() {
       counterValue.textContent = counter;
   }

   // Event listener for increase button
   increaseBtn.addEventListener('click', function() {
       counter++;
       updateCounter();
   });

   // Event listener for decrease button
   decreaseBtn.addEventListener('click', function() {
       counter--;
       updateCounter();
   });