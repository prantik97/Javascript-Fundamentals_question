// You are building a shipping application. Write a program that takes the type of package ("standard", 
// "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time 
// based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and 
// "overnight" would be delivered the next day.

function shippingApplication(package) {

    switch (package) {
        case "standard":
            console.log("standard package's estimated delivery time 3-5 days");
            break;
        case "express":
            console.log("express package's estimated delivery time 1-2 days");
            break;
        case "overnight":
            console.log("overnight package's estimated delivery would be the next day");
            break;
        default:
            console.log("Please enter a valid package name");
    }
    return "Thank You";
}

let result = shippingApplication("overnight");
console.log(result); //overnight package's estimated delivery would be the next day
//                     Thank You