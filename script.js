// Select all draggable and droppable elements and initialize score
const draggableElements = document.querySelectorAll('.box');
const droppableElements = document.querySelectorAll('.drop');
let score = 0;

// Add dragstart event listener to each draggable element
draggableElements.forEach(element => {
    element.addEventListener('dragstart', (dragStart) => {
        // Set data for drag-and-drop
        dragStart.dataTransfer.setData('text', dragStart.target.id);
        // Add a class for styling during dragging
        dragStart.currentTarget.classList.add('draggableFormat');
    });
});

// Add drop and dragover event listeners to each droppable element
droppableElements.forEach(element => {
    element.addEventListener('drop', (dropEvent) => {
        // Prevent default behavior to allow dropping
        dropEvent.preventDefault();

        // Get the id of the dragged and dropped elements
        const droppedElementId = dropEvent.dataTransfer.getData('text');
        const dropZoneId = dropEvent.target.getAttribute('data-draggable-id');
        const draggableElement = document.getElementById(droppedElementId);

        // Move the dragged element to the drop zone
        dropEvent.target.appendChild(document.getElementById(droppedElementId));

        // Check if the dropped element matches the drop zone
        if (droppedElementId === dropZoneId) {
            // Update score and display feedback
            score += 1;
            document.getElementById('remarks').innerText = "Correct!";
            document.getElementById('scores').innerText = score;
        } else {
            // Display feedback for incorrect match
            document.getElementById('remarks').innerText = "Wrong";
        }
    });

    // Add dragover event listener to each droppable element
    element.addEventListener('dragover', (dragOverEvent)
