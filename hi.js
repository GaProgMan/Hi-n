/* Hi\n in vanilla JS
 * see: http://esolangs.org/wiki/Hi%5Cn for more details */

// instantiates the string "eat pie" 98 times using a for loop.
for (var i = 0; i < 98; i++) {
	var eatPie = "eat pie";
}

// sets the variable 'x' to a string with exactly 1,000,000 'a's.
/* note: uses += rather than concat() because of performance. See
 * http://jsperf.com/concat-vs-plus-vs-join for more info */
var count = 0;
var x = '';
while (count <= 999999) {
	x += 'a';
	count++;
}

// sets the variable 'squiggly' to the square root of 5.
var squiggly = Math.sqrt(5);

// it prints 'hi' with a trailing newline
alert("hi\n");