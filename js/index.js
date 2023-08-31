var app = document.getElementById("element");

var typewriter = new Typewriter(app, {
	loop: true,
	delay: 75,
});


typewriter
	.pauseFor(10)
	.typeString("I am a Software developer.")
	.pauseFor(1000)
	.deleteChars(21) // Adjust the number of characters to delete
	.typeString("the founder of Redo IO.")
	.pauseFor(1000)
	.deleteChars(32) // Adjust the number of characters to delete
	.typeString('Or you can call me a coder.')
	.pauseFor(1000)
	.start();
