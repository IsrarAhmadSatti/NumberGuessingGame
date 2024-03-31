#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("Welcome to Guessing Game"));
console.log(chalk.blue("Guess the number between 1 to 10"));
let randomNumber = Math.floor(Math.random() * 10) + 1;
while (true) {
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "Guess",
            message: chalk.red("Guess the number!!!! "),
        },
    ]);
    let guess = Number(answer.Guess);
    if (guess === randomNumber) {
        console.log(chalk.green("You are right"));
        break;
    }
    else {
        console.log(chalk.red("You are wrong!!! Try Again"));
        let answer = await inquirer.prompt([
            {
                type: "input",
                name: "continue",
                message: "Do you want to continue the game: yes or No",
            }
        ]);
        if (answer.continue === "yes") {
            continue;
        }
        else if (answer.continue === "no") {
            console.log(chalk.blueBright("Game Over"));
            console.log(chalk.blueBright("The number is: " + randomNumber));
            console.log(chalk.bgBlueBright("Goodbye"));
            break;
        }
        else {
            console.log(chalk.red("!!! Invalid input: Restart the game"));
            break;
        }
    }
}
