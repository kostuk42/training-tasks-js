/*
Telephone Number ValidatorPassed
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number.
 The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
 Your job is to validate or reject the US phone number based on any combination of the formats provided above.
  The area code is required. If the country code is provided, you must confirm that the country code is 1. 
  Return true if the string is a valid US phone number; otherwise return false.
*/
function telephoneCheck(str) {
    str = str.split('');
    function isNumber(...index) {
        for (let i = 0; i < str.length; i += 1) {
            if (index.includes(i)) {
                continue;
            }
            if (isNaN(+str[i])) {
                return false;
            }
        }
        return true;
    }
    if (str.length > 16 || str.length < 10) { return false }
    if (str.length === 10) {
return str.some(symb => isNaN(+symb)) ? false : true
    }
    if (str.length === 12) {
        
        if ((str[3] === '-' && str[7] === '-') ||
            (str[3] === ' ' && str[7] === ' ')) {
            return isNumber(3,7)
        }
        return false
    }
    if (str.length === 13) {
        if (str[0] === '(' && str[4] === ')' && str[8] ==='-') {
            return isNumber(0,4,8)
        }
        return false
    }
    if (str.length > 13 && str[0] !== '1') {return false}
    if (str.length === 14) {
        if (str[0] === '(' && str[4] === ')' && (str[5] === ' ' || str[5] === '-') && str[9] === '-'){
            return isNumber(0,4,5,9)
        }

        if ((str[1] === ' ' && (str[5] === ' '||str[5] === '-')) || (str[1] === '(' && str[5] === ')')
         && (str[9] === ' ' || str[9] === '-')) {
            
            return isNumber(1,5,9)
        }
        return false
    }
    if (str.length === 16) {
        
        if (str[1] === ' ' && str[2] === '(' && str[6] === ')' && str[7] === ' ' && str[11] === '-') {
            return isNumber(1,2,6,7,11)
        }
    }
  return false
}

console.log(telephoneCheck("1(555)555-5555"));
