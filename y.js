document.getElementById('saveContact').addEventListener('click', function() {
  const contactNumber = '1231231231';
  const contactName = 'One Stop Solutions';

  const contactData = {
    name: contactName,
    tel: [contactNumber]
  };

  if (navigator.contacts) {
    navigator.contacts.create(contactData)
      .then(function(contact) {
        console.log('Contact saved:', contact);
        alert('Contact saved successfully!');
      })
      .catch(function(error) {
        console.error('Error saving contact:', error);
        alert('Error saving contact. Please try again later.');
      });
  } else {
    console.error('Web Contact API not supported');
    alert('Web Contact API is not supported in your browser.');
  }
});
