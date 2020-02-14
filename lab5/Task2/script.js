var cashbox = {
  amount: 0,
  isValid: function(operation) {
    if (typeof operation === 'object' && typeof operation.amount === 'number' && typeof operation.info === 'string') {
      return true;
    } else {
      return false;
    }
  },
  addPayment: function(payment) {
    if (this.isValid(payment) && payment.amount > 0) {
      this.amount = this.amount + payment.amount;
      console.log('--- Платеж: "' + payment.info + '" успешно завершен!');
      console.log('Текущий баланс: ' + this.amount + ' руб.');
    } else {
      console.log('ОШИБКА');
    }
  },
  refundPayment: function(refund) {
    if (this.isValid(refund) && this.amount > 0 && this.amount - refund.amount >= 0) {
      this.amount = this.amount - refund.amount;
      console.log('--- Снятие со счета: "' + refund.info + '" ' + refund.amount + ' руб.');
      console.log('Текущий баланс: ' + this.amount + ' руб.');
    } else {
      console.log('ОШИБКА');
    }
  }
};

cashbox.addPayment({ amount: -10, info: 'Оплата штрафа' });
cashbox.addPayment({ amount: 10, info: 'Оплата ЖКХ' });

cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' });
cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' });
