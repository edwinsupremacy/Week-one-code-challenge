
// Annual Taxable Pay (Ksh)	 Rate of Tax (%)
// Up to 288,000                10.0 done
// 288,001 - 388,000	        25.0 done
// 388,001 - 6,000,000         	30.0 done
// 6,000,001 - 9,600,000	    32.5
// Above 9,600,000            	35.0
let tax;
let basicSalary = prompt("Enter your basic salary")
// let benefits = prompt("Enter your benefits")
// let basicSalary = 40000000; 
let rate1 = 288000 * 0.1;
let rate2 = (388000 - 288001) * 0.25;
let rate3 = (6000000 - 388001) * 0.3;
let rate4 = (9600000 - 6000001) * 0.325;
function taxes(basicSalary) {
    if (basicSalary <= 288000) {
        return basicSalary * 0.1;
    }
    else if (basicSalary > 288000 && basicSalary <= 388000) {
        return rate1 + ((basicSalary - 288001) * 0.1);
    }
     else if (basicSalary > 388000 && basicSalary <= 6000000) {
        return rate1 + rate2 + ((basicSalary - 388001) * 0.25);
    }
     else if (basicSalary > 6000000 && basicSalary <= 9600000) {
        return rate1 + rate2 + rate3 + ((basicSalary - 6000001) * 0.3);
    }
     else if (basicSalary > 9600000) {
        return rate1 + rate2 + rate3 + rate4 + ((basicSalary - 9600001) * 0.325);
    }
}

const paye = taxes(basicSalary);
const netTax = (basicSalary - paye)
console.log(`Your net tax is ${paye}`)
// the tax to be paid
console.log(`Your net salary is Ksh.${netTax}`)
// the net salary

