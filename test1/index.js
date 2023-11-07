document.addEventListener('DOMContentLoaded', function () {
    const movableDiv = document.getElementById('movableDiv');
    const background = document.getElementById('background')
    const imageElement = document.getElementById('image');
    let leftPosition = 0;
    let topPosition = 0;

    document.addEventListener('keydown', (event) => {
        console.log("Key pressed:", event.key);

        const moveDistance = 40;
        

        if (event.key === 'ArrowRight') {
          imageElement.src = "character_views/rightView.png";
            leftPosition += moveDistance;
        

             } else if (event.key === 'd') {
            leftPosition += moveDistance;
            imageElement.src = "character_views/rightView.png"; // Change to face right
    


        } else if (event.key === 'ArrowLeft') {
            leftPosition -= moveDistance;
            imageElement.src = "character_views/leftView.png"; // Change to face left

             } else if (event.key === 'a') {
            leftPosition -= moveDistance;
            imageElement.src = "character_views/leftView.png"; // Change to face left





        } else if (event.key === 'ArrowDown') {
            topPosition += moveDistance;
            imageElement.src = "character_views/frontView.png"; // Change to face forward

             } else if (event.key === 's') {
            topPosition += moveDistance;
            imageElement.src = "character_views/frontView.png"; // Change to face forward

       


        } else if (event.key === 'ArrowUp') {
            topPosition -= moveDistance;
            imageElement.src = "character_views/backView.png"; // Change to face back
        
        } else if (event.key === 'w') {
            topPosition -= moveDistance;
            imageElement.src = "character_views/backView.png" alt; // Change to face back
 
        }

        

        movableDiv.style.left = leftPosition  + 'px';
        movableDiv.style.top = topPosition + 'px';

        background.style.backgroundPosition = `${leftPosition / 2}px ${topPosition / 2}px`;
    });
});
