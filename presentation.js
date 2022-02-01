//typewriter//
const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    loop : true ,
    delay : 75 , 
})

.typeString('Bonjour,')
.pauseFor(400)
.typeString(' je m\'appelle Rudy!')
.pauseFor(600)
.deleteChars(27)
.typeString(' Je suis developpeur web!')
.pauseFor(600)
.deleteChars(4)
.typeString(' <span style="color:#ff9300"> HTML')
.pauseFor(600)
.deleteChars(4)
.typeString(' <span style="color:blue"> CSS')
.pauseFor(600)
.deleteChars(3)
.typeString('<span style="color:#faff00"> Javascript')
.pauseFor(600)
.start()

// menu //
const menuIcon = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("Change");
});


// icon discord //
const discord = document.getElementById("discord");

discord.addEventListener("click", () => {
    alert("</Разработчик>#3202")
});

