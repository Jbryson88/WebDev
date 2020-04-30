window.onload = () => {
// fetch HTML element by this ID
var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create new element form
createform.setAttribute("action", ""); // Setting action attribute on form
createform.setAttribute("method", "post"); // Setting method attribute on form
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of form
heading.innerHTML = "Contact Form";
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row after heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // create label for name field
namelabel.innerHTML = "Your Name : "; // Set field labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // create label for email
emaillabel.innerHTML = "Your Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // create input field for email
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Your Message : ";
createform.appendChild(messagelabel);

var textareaelement = document.createElement('textarea');
textareaelement.setAttribute("name", "dmessage");
createform.appendChild(textareaelement);

var messagebreak =  document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);

}