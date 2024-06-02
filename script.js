document.getElementById('saveContact').addEventListener('click', function() {
  const contactNumber = '1231231231';
  const contactName = 'One Stop Solutions';

  const smsUrl = `sms://?body=Save%20${contactName}%20contact:%20${contactNumber}`;

  if (navigator.share) {
    navigator.share({
      url: smsUrl
    })
    .catch(console.error);
  } else {
    window.open(smsUrl, '_blank');
  }
});
