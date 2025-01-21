import $ from "jquery";

let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`{count} clicks on the button`)
}

$('body').append('<p>ALX Dashboard</p>')
$('body').append('<p>Dashboard data for the students</p>')
$('body').append('<button>Click here to get started</button>'>)
$('body').append('<p id='count'></p>')
$('body').append('<p>Copyright - ALX</p>')

// Add a click event listener to the button
$('button').click(updateCounter);
