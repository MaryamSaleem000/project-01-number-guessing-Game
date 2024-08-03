import inquirer from 'inquirer';
async function main() {
    const maxNumber = 100;
    const secretNumber = Math.floor(Math.random() * maxNumber) + 1;
    let guessedCorrectly = false;
    console.log(`Guess a number between 1 and ${maxNumber}`);
    while (!guessedCorrectly) {
        const { guess } = await inquirer.prompt({
            type: 'input',
            name: 'guess',
            message: 'Enter your guess:',
            validate: (input) => {
                const number = Number(input);
                if (isNaN(number) || number < 1 || number > maxNumber) {
                    return `Please enter a number between 1 and ${maxNumber}.`;
                }
                return true;
            },
        });
        const userGuess = Number(guess);
        if (userGuess < secretNumber) {
            console.log('Too low! Try again.');
        }
        else if (userGuess > secretNumber) {
            console.log('Too high! Try again.');
        }
        else {
            console.log('Congratulations! You guessed the number.');
            guessedCorrectly = true;
        }
    }
}
main().catch(err => console.error(err));
