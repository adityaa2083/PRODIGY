document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const registrationDiv = document.getElementById('registration');
    const gameDiv = document.getElementById('game');
    const board = document.getElementById('board');
    const resultDiv = document.getElementById('result');
    const playersDiv = document.getElementById('players');
    const restartButton = document.getElementById('restartButton');

    let player1 = '';
    let player2 = '';
    let currentPlayer = '';
    let boardState = Array(9).fill(null);

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        player1 = document.getElementById('player1').value;
        player2 = document.getElementById('player2').value;
        currentPlayer = player1;

        playersDiv.textContent = `${currentPlayer}'s turn`;

        registrationDiv.style.display = 'none';
        gameDiv.style.display = 'block';
    });

    board.addEventListener('click', (e) => {
        if (e.target.classList.contains('cell')) {
            const index = e.target.dataset.index;
            if (!boardState[index]) {
                boardState[index] = currentPlayer;
                e.target.textContent = currentPlayer === player1 ? 'X' : 'O';
                if (checkWinner()) {
                    resultDiv.textContent = `${currentPlayer} wins!`;
                    board.removeEventListener('click', arguments.callee);
                } else if (boardState.every(cell => cell)) {
                    resultDiv.textContent = 'It\'s a draw!';
                } else {
                    currentPlayer = currentPlayer === player1 ? player2 : player1;
                    playersDiv.textContent = `${currentPlayer}'s turn`;
                }
            }
        }
    });

    restartButton.addEventListener('click', () => {
        boardState = Array(9).fill(null);
        Array.from(board.children).forEach(cell => cell.textContent = '');
        resultDiv.textContent = '';
        currentPlayer = player1;
        playersDiv.textContent = `${currentPlayer}'s turn`;
        board.addEventListener('click', arguments.callee);
    });

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
        });
    }
});