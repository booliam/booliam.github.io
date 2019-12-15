var button = document.querySelector('#submit-button');

   braintree.dropin.create({
     authorization: 'CLIENT_AUTHORIZATION',
     container: '#dropin-container'
   }, function (createErr, instance) {
     button.addEventListener('click', function () {
       instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
         // Submit payload.nonce to your server
       });
     });
   });

   braintree.dropin.create({
     authorization: 'CLIENT_AUTHORIZATION',
     container: '#dropin-container',
     venmo: {
       allowNewBrowserTab: false
     }
   }, callback);
