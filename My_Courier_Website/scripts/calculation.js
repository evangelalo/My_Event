function calculateShippingCostFor(postalCode, weight) {
    const isPostalCodeValid = validatePostalCode(postalCode)

    if (!isPostalCodeValid) {
        console.log(`The postal code is not valid ${postalCode}`);
        return null;
    }

    const isWeightValid = validateWeight(weight)

    if (!isWeightValid) {
        console.log(`The weight is not valid: ${weight}`);
        return null;
    }

    const weightCost = calculateWeightCostFor(postalCode, weight);
    const commission = calculateCommissionFor(postalCode);
    const totalCost = weightCost + commission;

    console.log(`Total cost is ${weightCost} + ${commission} = ${totalCost}`)
    
    return totalCost
}

function isBetween(min, number, max) {
    return min <= number && number <= max;
}

//validate the postal code is filled and a valid 5-digit number
function validatePostalCode(input) {
    const isLengthValid = input.trim().length === 5;

    if (!isLengthValid) {
        console.log("Failed: Valid postal codes contain 5 digits XXXXX");
        return false;
    }

    const parsedPostalCode = parseInt(input, 10);
    
    if (isNaN(parsedPostalCode)) {
        console.log("Failed: Valid postal codes contain 5 numbers like 12345");
        return false;
    }

    const isPostalCodeValid = isBetween(10000, parsedPostalCode, 99999);

    if (!isPostalCodeValid) {
        console.log("Failed: Valid postal codes are between 10000 and 99999");
        return false; 
    }

    return true;
}

//validate that weight is filled and a positive number
function validateWeight(weight) {
    const parsedWeight = parseInt(weight, 10);

    if (isNaN(parsedWeight)) {
        console.log("Failed to parse the weight");
        return false;
    }

    const isPositiveNumber = parsedWeight > 0

    if (!isPositiveNumber) {
        console.log("Failed: The weight should be a positive number");
        return false;
    }

    return parsedWeight;
}

//check if the package is a light or a heavy one
function calculateWeightCostFor(postalCode, weight) {
    // A package under 5 kilοσ is considered a light package
    const isLightPackage = weight <= 5

    if (isLightPackage) {
        return calculateWeightCostForLightPackage(postalCode, weight)
    } else {
        return calculateWeightCostForHeavyPackage(postalCode, weight)
    }
}

//if the package is light!
function calculateWeightCostForLightPackage(postalCode, weight) {
    var costPerKilo = 0;

    if (isBetween(10000, postalCode, 20000)) {
        costPerKilo = 0.5;
    } else if (isBetween(20001, postalCode, 30000)) {
        costPerKilo = 0.5;
    } else if (isBetween(30001, postalCode, 40000)) {
        costPerKilo = 1.5;
    } else if (isBetween(40001, postalCode, 50000)) {
        costPerKilo = 2;
    } else if(isBetween(50001, postalCode, 99999)) {
        costPerKilo =  2.5;
    } else {
        console.log(`The weight cost for postal code: ${postalCode} and weight: ${weight} is unknown`);
        return null;
    }

    return weight * costPerKilo
}

//if the package is heavy then!
function calculateWeightCostForHeavyPackage(postalCode, weight) {
    var costPerKilo = 0;
    var costPerExtraKilo = 0;

    if (isBetween(10000, postalCode, 20000)) {
        costPerKilo = 0.5;
        costPerExtraKilo = 0.3;
    } else if (isBetween(20001, postalCode, 30000)) {
        costPerKilo = 0.5;
        costPerExtraKilo = 0.2;
    } else if (isBetween(30001, postalCode, 40000)) {
        costPerKilo = 1;
        costPerExtraKilo = 0.25;
    } else if (isBetween(40001, postalCode, 50000)) {
        costPerKilo = 1.5;
        costPerExtraKilo = 0.2;
    } else if (isBetween(50001, postalCode, 99999)) {
        costPerKilo = 2;
        costPerExtraKilo = 0.15;
    } else {
        console.log(`The weight cost for postal code: ${postalCode} and weight: ${weight} is unknown`);
        return null;
    }

    // Every kilo after the 5th counts as an extra kilo
    const extraKilos = weight - 5

    return 5 * costPerKilo + extraKilos * costPerExtraKilo
}

//calculate commision based on the postal code
function calculateCommissionFor(postalCode) {
    if (isBetween(10000, postalCode, 20000)) {
        return 0.5;
    } else if (isBetween(20001, postalCode, 30000)) {
        return 1;
    } else if (isBetween(30001, postalCode, 40000)) {
        return 1.5;
    } else if (isBetween(40001, postalCode, 50000)) {
        return 2;
    } else if(isBetween(50001, postalCode, 99999)) {
        return 2.5;
    } else {
        console.log(`The cost for postal code: ${postalCode} is unknown`);
        return null;
    }
}
