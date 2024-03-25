#! /usr/bin/env node
///upper line called <<<SHIBANG>>>
import inquirer from "inquirer";
let calculator = await inquirer.prompt([
    { type: "number", message: "Enter your first number?", name: "firstNumber" },
    {
        type: "number",
        message: "Enter your second number?",
        name: "secondNumber",
    },
    {
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "select one of operator to perform operation",
        name: "operation",
    },
]);
///if statement
if (calculator.operation === "Addition") {
    //it will check operatot then "add"
    let result = calculator.firstNumber + calculator.secondNumber;
    console.log(`Your value is  ${result}`);
}
else if (calculator.operation === "Subtraction") {
    //it will check operatot then "sub"
    let result = calculator.firstNumber - calculator.secondNumber;
    console.log(`Your value is  ${result}`);
}
else if (calculator.operation === "Multiplication") {
    //it will check operatot then "multiply"
    let result = calculator.firstNumber * calculator.secondNumber;
    console.log(`Your value is  ${result}`);
}
else if (calculator.operation === "Division") {
    //it will check operatot then "divide"
    let result = calculator.firstNumber / calculator.secondNumber;
    console.log(`Your value is  ${result}`);
}
else {
    console.log("Please select a valid option");
}
