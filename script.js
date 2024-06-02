document.getElementById('saveContact').addEventListener('click', function() {
  const contactNumber = '1231231231';
  const contactName = 'One Stop Solutions';

  const contactData = {
    name: contactName,
    tel: contactNumber
  };

  const contactPicker = new google.contacts.ContactPicker(contactData);

  contactPicker.openContactViewer();
});
