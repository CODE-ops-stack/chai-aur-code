const accountId = 144553
let accountEmail = "harsh@gmial.com"
var accountPassword="12345"
accountCity="Jaipur"

// accountId = 2 // not allowed
console.log(accountId);
accountEmail="hr@hr.com"
accountPassword="090909"
accountCity="Patna"
let accountState;

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountState])

/* prefer not to use var 
beacause of issue in block scope and functional scope
*/