function getComputerChoice()
{
    // NOTE: I have used console.log() instead of normal returns as this is an early version of this project. V1 will orient around the console and V2 will utilise a GUI more.

    randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            console.log('rock');
            break;
        case 2:
            console.log('paper');
            break;
        case 3:
            console.log('scissors')
            break;
    }
}

getComputerChoice()