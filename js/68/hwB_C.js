(function () {
    'use strict';
    function performTransaction(amount) {
        this.balance += amount;
    }

    function createAccount() {
        return {
            balance: 0
        };
    }
    const account1 = createAccount();
    const account2 = createAccount();

    performTransaction.call(account1, 500);
    performTransaction.call(account1, -50);
    console.log('account 1: ', account1.balance);

    performTransaction.apply(account2, [45]);
    performTransaction.apply(account2, [-55]);
    console.log('account 2: ', account2.balance);

    const deposit50Account2 = performTransaction.bind(account2, 50);
    deposit50Account2();
    console.log('account 2: ', account2.balance);
}());