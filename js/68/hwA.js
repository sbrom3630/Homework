(function () {
    'use strict';
    function createAccount() {
        return {
            balance: 0,
            performTransaction(amount) {
                this.balance += amount;
            }
        };
    }
    const account1 = createAccount();
    const account2 = createAccount();

    account1.performTransaction(500);
    account1.performTransaction(-50);
    console.log('account 1: ', account1.balance);

    account2.performTransaction(45);
    account2.performTransaction(-55);
    console.log('account 2: ', account2.balance);
}());