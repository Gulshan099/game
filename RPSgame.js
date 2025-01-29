function play(playerchoice){
    const choices = ['rock','paper','scissor']
    const computerchoice = choices[Math.floor(Math.random()*choices.length)]
    let result = '';
    if (playerchoice === computerchoice) {
        result = 'It\'s a tie!';
        } else if (playerchoice === 'rock') {
            if (computerchoice === 'scissor') {
                result = 'Rock smashes scissors! You win!';
                } else {
                    result = 'Paper covers rock! You lose!';
                    }
                    } else if (playerchoice === 'paper') {
                        if (computerchoice === 'rock') {
                            result = 'Paper covers rock! You win!';
                            } else {
                                result = 'Scissors cuts paper! You lose!';
                                }
                                } else if (playerchoice === 'scissor') {
                                    if (computerchoice === 'paper') {
                                        result = 'Scissors cuts paper! You win!';
                                        } else {
                                            result = 'Rock smashes scissors! You lose!';
                                            }
                                            }
    document.getElementById('Result').innerText = result;
                                            
}