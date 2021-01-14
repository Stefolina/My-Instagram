// Img-Section Changing
function changeImg() {
    setTimeout(function () {
        document.getElementById('img4').style = 'display: none';
    }, 3000);

    setTimeout(function () {
        document.getElementById('img3').style = 'display: none';
    }, 6000);

    setTimeout(function () {
        document.getElementById('img2').style = 'display: none';
    }, 9000);

    setTimeout(function () {
        document.getElementById('img1').style = 'display: absolute';
    }, 12000);

    setTimeout(function () {
        document.getElementById('img2').style = 'display: absolute';
    }, 15000);

    setTimeout(function () {
        document.getElementById('img3').style = 'display: absolute';
    }, 18000);

    setTimeout(function () {
        document.getElementById('img4').style = 'display: absolute';
    }, 21000);

    setTimeout(changeImg, 24000);
}


// Post Definition
let posts = [{
    'author': 'Martinabackt',
    'image': 'img/Tarte.jpeg',
    'text': 'Heute gab es seit langem mal wieder eine leckere Tarte. <br>Als Topping mit frischen Beeren',
    'location': 'Fürstenfeldbruck',
    'comments': []
},
{
    'author': 'Speedy',
    'image': 'img/audi.jpeg',
    'text': 'Neues Spielzeug! <br><b>#audi #tt #rs #carlove</b>',
    'location': 'Munich',
    'comments': []
},
{
    'author': 'Reiselust',
    'image': 'img/italy.jpeg',
    'text': 'Throwback: Toskana 2019 <br> <b>#tb #toskana #italy #volterra</b>',
    'location': 'Volterra, Italy',
    'comments': []
},
{
    'author': 'Leen92',
    'image': 'img/kitty.jpeg',
    'text': 'Mein fotogener Mitbewohner<3',
    'location': 'MünchenCity',
    'comments': []
},
{
    'author': 'Keygo',
    'image': 'img/car.jpeg',
    'text': 'Photography by FotoLichtblick',
    'location': 'Köln',
    'comments': []
},
{
    'author': 'Travelblog',
    'image': 'img/natur.jpeg',
    'text': 'Stille <3',
    'location': 'Mother Earth',
    'comments': []
}
];


// Show
function show() {
    document.getElementById('postcontainer').innerHTML = '';

    updateComments();


    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        let commentsHTML = '';

        for (let j = 0; j < post.comments.length; j++) {
            const comment = post.comments[j];
            commentsHTML += `<div>${comment}</div>`;
        }

        console.log('Meine Kommentare:', commentsHTML);

        document.getElementById('postcontainer').innerHTML += `
            <div class="postcontainer">
                <div class="author">${post['author']} </div>
                <div class="location">${post['location']}</div>
                <img src="${post['image']}" class="post-img">
                <div class="iconsrow"><img src="icons/likes.png" class="icons">
                <img src="icons/message.jpg" class="icons"></div>
                <div class="text">${post['text']}</div>
                <div class="commentrow" id="comments">
                        ${commentsHTML}
                </div>
                <input id="comment${i}" placeholder="Schreibe einen Kommentar">
                <botton class="botton" onclick="addComment(${i})">Post</botton>  
            </div>
            `;
    }
}

function loadOldComments() {
    myComment = localStorage.getItem('comment');
    document.getElementById('comments').innerHTML =+ `${commentsHTML}`;
}

// Badge Input: Number of Comments
function updateComments(){
    
    let numberOfComments = 0;

    for (let index = 0; index < posts.length; index++) {
        const post = posts[index];
    
        for (let j = 0; j < post['comments'].length; j++) {
            const element = post['comments'];
            numberOfComments += 1; 
        }
    }

    document.getElementById('badge').innerText = numberOfComments;
}


// addComment(1)
function addComment(postIndex) {
    let myComment = document.getElementById('comment' + postIndex).value;
    posts[postIndex].comments.push(myComment);
    show(); // Update HTML

    //LocalStorage Stuff
    localStorage.setItem('comment', myComment); 
}


// Responsive Menu
function showMenu() {
    document.getElementById('menu').classList.remove('d-none');
    document.getElementById('menu').classList.add('overlay-menu');
}

function closeMenu() {
    document.getElementById('menu').classList.remove('overlay-menu');
    document.getElementById('menu').classList.add('d-none');

}
