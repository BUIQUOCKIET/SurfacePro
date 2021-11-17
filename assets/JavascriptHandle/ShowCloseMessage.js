const $ = document.querySelector.bind(document);

var messageElement =$('#message-contact');
var messageOptions =$('#message-option');

$('#message-button').addEventListener('click', function() {
    messageElement.classList.toggle('hide-message');
    messageElement.classList.toggle('show-message');
});

$('#heading-control__close').addEventListener('click', function() {
    messageElement.classList.remove('show-message');
    messageElement.classList.add('hide-message');
});

$('#headding-control__ellipsis').addEventListener('click', function() {
    messageOptions.classList.toggle('message-option--hide');
});
