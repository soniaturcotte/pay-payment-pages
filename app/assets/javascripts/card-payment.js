(function () {
  function updateCorporateCardMessage (show) {
    var $corporateCardMessage = $('#corporate-card-message');

    if (show) {
      $corporateCardMessage.show();
    } else {
      $corporateCardMessage.hide();
    }
  };

  function updateTotalAmount (charge) {
    var $totalAmount = $('#total-amount');
    var paymentAmount = 255;

    if (!charge) {
      charge = 0;
    }

    $totalAmount.text('£' + (paymentAmount + charge).toFixed(2));
  }

  function updatePaymentSummary (show) {
    var $paymentSummaryBreakdown = $('#payment-summary-breakdown');

    if (show) {
      $paymentSummaryBreakdown.show();
      updateTotalAmount(2.50);
    } else {
      $paymentSummaryBreakdown.hide();
      updateTotalAmount(0);
    }
  };

  function onCardNumberEntry (event) {
    var cardNumber = event.target.value;

    // if the first 6 characters are digits do a thing
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    if (cardNumber.match(/^\d{6}/)) {
      // show message below
      updateCorporateCardMessage(true);
      // update sidebar
      updatePaymentSummary(true);
    } else { // clear everything
      // show message below
      updateCorporateCardMessage(false);
      // update sidebar
      updatePaymentSummary(false);
    }
  };

  updatePaymentSummary(false);
  updateCorporateCardMessage(false);
  updateTotalAmount();

  // Add keyup event to card number input
  $('#card-number').on('keyup', onCardNumberEntry);
})();
