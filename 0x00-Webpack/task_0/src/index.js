const $ = require('jquery');

const prgh1 = $('<p>').text('Holberton Dashboard');
const prgh2 = $('<p>').text('Dashboard data for the students');
const prgh3 = $('<p>').text('Copyright - Holberton School');

//Append the new elements to the body of the page
$('body').append(prgh1, prgh2, prgh3);
