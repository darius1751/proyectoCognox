const TransactionModel = function(id,accountSend,accountGet,cash,date = new Date()){
    this.id = id;
    this.accountSend = accountSend;
    this.accountGet = accountGet;
    this.date = date;
    this.cash = cash;
};
module.exports = TransactionModel;