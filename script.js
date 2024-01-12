const evilButton = document.getElementById("evil-button");
const OFFSET = 100;
const goodButton = document.getElementById("good-btn");
const gifContainer = document.getElementById("gif-container");
const paragraph = document.getElementById("paragraph");

goodButton.addEventListener('click', () => {
    // Creating a new div with the updated content
    const newDiv = document.createElement('div');
    newDiv.id = 'gif-container';
    newDiv.innerHTML = `
    <div style="width:100%;height:0;padding-bottom:66%;position:relative;"><iframe src="https://giphy.com/embed/YHhrBQZQWHiIt98T7C" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed-new" allowFullScreen></iframe></div>
    `;
    // Replacing the existing div with the new one
    gifContainer.parentNode.replaceChild(newDiv, gifContainer);

    const newP = document.createElement('p');
    newP.id = 'paragraph';
    newP.innerHTML = `
    <p>Yaaaaay</p>`

    paragraph.parentNode.replaceChild(newP, paragraph);

    // Hiding both buttons
    goodButton.style.display = 'none';
    evilButton.style.display = 'none';
});

evilButton.addEventListener('click', () => {
    alert('Nice Try');
    window.close();
});

document.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;
    const buttonBox = evilButton.getBoundingClientRect();
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width);
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height);
    const threshold = 50; // Adjust this threshold as needed

    if (Math.abs(horizontalDistanceFrom) <= threshold && Math.abs(verticalDistanceFrom) <= threshold) {
        const horizontalOffset = buttonBox.width / 2 + OFFSET;
        const verticalOffset = buttonBox.height / 2 + OFFSET;

        setButtonPosition(
            buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
            buttonBox.y + verticalOffset / verticalDistanceFrom * 10
        );
    }
});

function setButtonPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect();
    const buttonBox = evilButton.getBoundingClientRect();

    if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
        left = windowBox.left + OFFSET;
    }
    if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
        left = windowBox.right - buttonBox.width - OFFSET;
    }
    if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
        top = windowBox.top + OFFSET;
    }
    if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
        top = windowBox.bottom - buttonBox.height - OFFSET;
    }

    evilButton.style.left = `${left}px`;
    evilButton.style.top = `${top}px`;
    console.log(left, top);
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2;
}

// Setting the initial position when the page loads
setButtonPosition(goodButton.getBoundingClientRect().left, goodButton.getBoundingClientRect().bottom + 50);
