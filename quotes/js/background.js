const images = [
    '0.jpeg',
    '1.jpeg',
    '2.jpeg'
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage); 

// create javascript -> add html

const bgImage = document.createElement('img'); // create element
console.log(bgImage);
bgImage.src = `img/${chosenImage}`;
console.log(bgImage); 

// where?
document.body.appendChild(bgImage);