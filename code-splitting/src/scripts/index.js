// import '../styles/main.css';
// import contacts from './contacts';
// import filter from 'lodash.filter';
// import $ from 'jquery';
// import axios from 'axios';

// const inputContactForm = document.querySelector('#inputContactForm');
// const inputName = document.querySelector('#inputName');
// const inputNumber = document.querySelector('#inputNumber');
// const inputType = document.querySelector('#inputType');

// const showContactForm = document.querySelector('#showContactForm');
// const contactType = document.querySelector('#contactType');

// const contactContainer = document.querySelector('#contacts');

// inputContactForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const contact = {
//     id: new Date().valueOf().toString(),
//     name: inputName.value,
//     number: inputNumber.value,
//     type: inputType.value,
//   };
//   contacts.push(contact);
// });

// showContactForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   contactContainer.innerHTML = '';

//   // Split code 1
//   import('lodash.filter')
//     .then((module) => module.default)
//     .then(filterContacts)
//     .catch((error) => alert(error));
// });

// const filterContacts = (filter) => {
//   filter(
//     contacts,
//     contactType.value === 'all' ? {} : { type: contactType.value }
//   ).forEach(renderContact);
// };

// const renderContact = (contact) => {
//   contactContainer.innerHTML += `
//            <li>
//                <h4>${contact.name} (${contact.type})</h4>
//                <p>${contact.number}</p>
//            </li>
//   `;
// };

import '../styles/main.css';
import filter from 'lodash.filter';
import contacts from './contacts';
import $ from 'jquery';
// import axios from 'axios';

const inputContactForm = document.querySelector('#inputContactForm');
const inputName = document.querySelector('#inputName');
const inputNumber = document.querySelector('#inputNumber');
const inputType = document.querySelector('#inputType');

const showContactForm = document.querySelector('#showContactForm');
const contactType = document.querySelector('#contactType');

const contactContainer = document.querySelector('#contacts');

inputContactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const contact = {
    id: new Date().valueOf().toString(),
    name: inputName.value,
    number: inputNumber.value,
    type: inputType.value,
  };
  contacts.push(contact);
});

showContactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactContainer.innerHTML = '';

  filter(
    contacts,
    contactType.value === 'all' ? {} : { type: contactType.value }
  ).forEach(renderContact);
});

const renderContact = (contact) => {
  contactContainer.innerHTML += `
           <li>
               <h4>${contact.name} (${contact.type})</h4>
               <p>${contact.number}</p>
           </li>
  `;
};