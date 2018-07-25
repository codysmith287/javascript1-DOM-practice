let nav = document.querySelector('.myNav');

let div = document.querySelector('.myDiv');

let footer = document.querySelector('.myFoot');

let homeATag = document.createElement('a');
homeATag.setAttribute('href', "#");
homeATag.innerHTML= 'Home';
homeATag.classList.add("pull-left");
nav.appendChild(homeATag);

let aboutATag = document.createElement('a');
aboutATag.setAttribute('href', "#");
aboutATag.innerHTML= 'About';
aboutATag.classList.add("pull-right");
nav.appendChild(aboutATag);

let contactATag = document.createElement('a');
contactATag.setAttribute('href', "#");
contactATag.innerHTML= 'Contact';
contactATag.classList.add("pull-right");
nav.appendChild(contactATag);

let newH1 = document.createElement("h1");
newH1.textContent = "Hello World!";
newH1.classList.add("text-center");
div.appendChild(newH1);

let newP = document.createElement("p");
newP.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus earum consequuntur nisi quidem odio ut error, porro voluptates assumenda hic eveniet cum mollitia, quos iure laborum voluptate itaque consequatur quaerat!";
newP.classList.add("text-left");
div.appendChild(newP);

let footATag = document.createElement('a');
footATag.setAttribute('href', "#");
footATag.innerHTML= 'Befriend Us on FB';
footer.appendChild(footATag);
