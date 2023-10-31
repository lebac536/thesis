document.addEventListener('DOMContentLoaded', function () {
    const movableDiv = document.getElementById('movableDiv');
    const imageElement = document.getElementById('image');
    let leftPosition = 0;
    let topPosition = 0;

    document.addEventListener('keydown', (event) => {
        console.log("Key pressed:", event.key);

        const moveDistance = 10;

        if (event.key === 'ArrowRight') {
            imageElement.src = 'character_views/rightView.png'; // Change to face right
            leftPosition += moveDistance;
        } else if (event.key === 'ArrowLeft') {
            leftPosition -= moveDistance;
            imageElement.src = 'character_views/leftView.png'; // Change to face left
        } else if (event.key === 'ArrowDown') {
            topPosition += moveDistance;
            imageElement.src = 'character_views/frontView.png'; // Change to face forward
        } else if (event.key === 'ArrowUp') {
            topPosition -= moveDistance;
            imageElement.src = 'character_views/backView.png'; // Change to face back
        }

        movableDiv.style.left = leftPosition  + 'px';
        movableDiv.style.top = topPosition + 'px';
    });
});
