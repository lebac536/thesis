document.addEventListener('DOMContentLoaded', function () {
    const movableDiv = document.getElementById('movableDiv');
    const background = document.getElementById('background')
    const imageElement = document.getElementById('image');
    let leftPosition = 0;
    let topPosition = 0;
    const jumpHeight = 30;
    let isJumping = false;



        // Define boundaries for the movableDiv
        const minX = 0;
        const maxX = background.clientWidth - movableDiv.clientWidth;
        const minY = 0;
        const maxY = background.clientHeight - movableDiv.clientHeight;

    document.addEventListener('keydown', (event) => {
        console.log("Key pressed:", event.key);

        const moveDistance = 20;
        

        if (event.key === 'ArrowRight' && leftPosition < maxX) {
            leftPosition += moveDistance;
          imageElement.src = "character_views_pixel/french/right_french.png";
            
        

             } else if (event.key === 'd' && leftPosition < maxX) {
            leftPosition += moveDistance;
            imageElement.src = "character_views_pixel/french/right_french.png"; // Change to face right
    


        } else if (event.key === 'ArrowLeft' && leftPosition > minX) {
            leftPosition -= moveDistance;
            imageElement.src = "character_views_pixel/french/left_french.png"; // Change to face left

             } else if (event.key === 'a'&& leftPosition > minX) {
            leftPosition -= moveDistance;
            imageElement.src = "character_views_pixel/french/left_french.png"; // Change to face left





        } else if (event.key === 'ArrowDown' && topPosition < maxY) {
            topPosition += moveDistance;
            imageElement.src = "character_views_pixel/french/front_french.png"; // Change to face forward

             } else if (event.key === 's' && topPosition < maxY) {
            topPosition += moveDistance;
            imageElement.src = "character_views_pixel/french/front_french.png"; // Change to face forward

       


        } else if (event.key === 'ArrowUp' && topPosition > minY) {
            topPosition -= moveDistance;
            imageElement.src = "character_views_pixel/french/back_french.png"; // Change to face back
        
        } else if (event.key === 'w' && topPosition > minY) {
            topPosition -= moveDistance;
            imageElement.src = "character_views_pixel/french/back_french.png"; // Change to face back
 
        } else if (event.key === ' ' && !isJumping) { // Space bar pressed
            // Jump when the space bar is pressed
           isJumping= true;
           jump ()

        }

        

        movableDiv.style.left = leftPosition  + 'px';
        movableDiv.style.top = topPosition + 'px';

    });

    function jump() {
        let jumpHeightReached = 0;
        const jumpInterval = setInterval(() => {
            if (jumpHeightReached < jumpHeight) {
                topPosition -= 7; // Adjust the jump speed as needed
                movableDiv.style.top = topPosition + 'px';
            } else {
                clearInterval(jumpInterval);
                fallBack();
            }
        }, 20);
    }

    function fallBack() {
        const fallInterval = setInterval(() => {
            if (topPosition < maxY) {
                topPosition += 5; // Adjust the fall speed as needed
                movableDiv.style.top = topPosition + 'px';
            } else {
                topPosition = maxY;
                isJumping = false;
                clearInterval(fallInterval);
            }
        }, 20);
    }


        

});
