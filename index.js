document.addEventListener('DOMContentLoaded', function () {

    const payouts = [
        // 1 Mine
        [1.01, 1.08, 1.12, 1.18, 1.24, 1.30, 1.37, 1.46, 1.55, 1.65, 1.77, 1.90, 2.06, 2.25, 2.47, 2.75, 3.09, 3.54, 4.12, 4.95, 6.19, 8.25, 12.37, 24.75],

        // 2 Mines
        [1.08, 1.17, 1.29, 1.41, 1.54, 1.70, 1.87, 2.18, 2.43, 2.83, 3.30, 3.87, 4.57, 5.40, 6.60, 8.25, 10.61, 14.14, 19.80, 29.70, 49.50, 99, 297],

        // 3 Mines
        [1.12, 1.29, 1.48, 1.71, 2.00, 2.35, 2.79, 3.35, 4.07, 5.10, 6.20, 7.96, 10.35, 13.97, 18.97, 27.11, 40.66, 65.06, 113.85, 227.70, 569.25, 2277],

        // 4 Mines
        [1.18, 1.41, 1.70, 2.08, 2.58, 3.23, 4.09, 5.26, 6.76, 8.88, 11.63, 15.32, 20.35, 27.93, 37.95, 59.64, 99.39, 178.91, 357.81, 834.90, 2504],

        // 5 Mines
        [1.24, 1.61, 2.00, 2.58, 3.39, 4.45, 5.82, 7.58, 9.82, 12.75, 16.58, 21.66, 28.58, 38.14, 51.13, 79.34, 139.63, 277.33, 834.90, 2504],

        // 6 Mines
        [1.30, 1.74, 2.35, 3.23, 4.32, 5.68, 7.41, 9.63, 12.53, 16.31, 21.29, 28.53, 38.78, 53.31, 74.59, 126.08, 237.33, 379.53, 834.90],

        // 7 Mines
        [1.37, 1.94, 2.58, 3.63, 5.14, 6.89, 9.14, 12.09, 16.04, 21.36, 28.68, 38.45, 52.50, 74.71, 119.85, 237.33, 500.38, 834.90],

        // 8 Mines
        [1.46, 2.18, 2.85, 4.09, 5.82, 7.93, 10.67, 14.31, 19.18, 25.64, 34.44, 47.64, 71.01, 126.44, 237.33, 834.90],

        // 9 Mines
        [1.55, 2.43, 3.30, 4.57, 6.76, 9.21, 12.23, 16.11, 21.29, 28.39, 38.17, 52.23, 71.11, 119.75, 237.33],

        // 10 Mines
        [1.65, 2.83, 3.85, 5.26, 7.63, 10.35, 13.82, 18.53, 24.80, 33.55, 46.00, 64.54, 119.85, 237.33],

        // 11 Mines
        [1.77, 3.36, 4.65, 6.26, 9.03, 12.33, 16.79, 22.88, 31.01, 42.22, 57.14, 99.28, 237.33],

        // 12 Mines
        [1.90, 3.98, 5.50, 7.41, 10.76, 14.82, 20.30, 27.70, 37.86, 52.33, 94.58, 237.33],

        // 13 Mines
        [2.06, 4.65, 6.26, 8.78, 12.88, 17.61, 24.38, 33.75, 46.44, 79.94, 159.88, 237.33],

        // 14 Mines
        [2.25, 5.40, 7.31, 10.35, 15.32, 21.11, 29.34, 40.70, 99.28, 237.33, 834.90],

        // 15 Mines
        [2.47, 6.60, 8.88, 12.23, 18.53, 24.80, 35.42, 79.34, 237.33, 834.90],

        // 16 Mines
        [2.75, 8.25, 10.61, 14.82, 22.88, 29.74, 64.54, 237.33, 834.90],

        // 17 Mines
        [3.09, 10.61, 13.19, 18.53, 27.93, 37.86, 79.94, 237.33],

        // 18 Mines
        [3.54, 14.14, 17.61, 24.38, 33.75, 46.44, 99.28],

        // 19 Mines
        [4.12, 19.80, 24.80, 31.01, 42.22, 57.14],

        // 20 Mines
        [4.95, 29.70, 33.75, 46.44, 79.94],

        // 21 Mines
        [6.19, 49.50, 57.14, 99.28],

        // 22 Mines
        [8.25, 99, 159.88],

        // 23 Mines
        [13.28, 297],

        // 24 Mines
        [24.75]
    ];


    let firstBalSubmitted = false;
    let gameIsRunning = false;
    const startingBalArea = document.getElementsByClassName('starting-bal-area');
    const container = document.getElementsByClassName('container');
    const submitStartingBalButton = document.getElementById('submitBalance');
    const startingBalAmount = document.getElementById('startingBal');
    const balElement = document.getElementById('balance');
    const betElement = document.getElementById('bet-amount');
    const mineElement = document.getElementById('mine-amount');
    const profitArea = document.getElementsByClassName('profit-area');
    const doubleButton = document.getElementById('double-button');
    const halfButton = document.getElementById('half-button');
    const popup = document.getElementsByClassName('popup');
    const popupMulti = document.getElementById('popup-multi');
    const popupWin = document.getElementById('popup-win');
    const profitText = document.getElementById('profit-text');
    const profitNumber = document.getElementById('profit-number');
    const betButton = document.getElementById('bet-button');
    const mines = document.querySelectorAll('.box-grid button');
    const bombAudio = document.getElementById('bomb-audio');
    const gemAudio = document.getElementById('gem-audio');
    const cashoutAudio = document.getElementById('cashout-audio');

    let bal = 0;
    let currentBet = 0;
    let currentMineTotal = 0;
    let currentProfit = 0;
    let currentMinesClicked = 0;

    startingBalArea[0].classList.add('animate__animated', 'animate__zoomInDown');

    const generateBombs = () => {
        for (let i = 0; i < currentMineTotal; i++) {
            const randomIndex = Math.floor(Math.random() * mines.length);
            if (mines[randomIndex].classList.contains('bomb')) {
                i--;
                continue;
            }
            mines[randomIndex].classList.add('bomb');
        }
    }

    submitStartingBalButton.onclick = (event) => {
        if (firstBalSubmitted) return;
        bal = parseFloat(startingBalAmount.value);
        balElement.textContent = parseFloat(bal).toFixed(2);
        if (bal === '') return;

        firstBalSubmitted = true;
        startingBalArea[0].classList.remove('animate__zoomInDown');
        startingBalArea[0].classList.add('animate__zoomOut');
        startingBalArea[0].addEventListener('animationend', function() {
            startingBalArea[0].style.display = 'None'; 
            startingBalArea[0].classList.remove('animate__zoomOut');
            container[0].style.display = 'flex';
            container[0].classList.add('animate__animated', 'animate__backInDown');
        }, { once: true });
    }

    const endGame = () => {
        showAllMines();
        betElement.disabled = false;
        mineElement.disabled = false;
        gameIsRunning = false;
        betButton.textContent = 'Bet';
        profitArea[0].style.display = 'none';
        profitText.textContent = "Total Profit (1.00x)";
        profitNumber.value = '0.00';
    }

    betButton.onclick = (event) => {
        if (!firstBalSubmitted) return;
        if (!gameIsRunning) {
            if (betElement.value === '') return;
            if (parseFloat(betElement.value) > bal) return;
            currentBet = betElement.value;
            currentMineTotal = mineElement.value;
            profitArea[0].style.display = 'block';
            betButton.textContent = 'Cash Out';
            betElement.disabled = true;
            mineElement.disabled = true;
            gameIsRunning = true;
            bal -= currentBet;
            balElement.textContent = bal.toFixed(2);
            popup[0].style.display = 'none';
            mines.forEach(mine => {
                mine.classList.remove('bomb');
                mine.classList.remove('clicked');
                mine.classList.remove('animate__pulse');
                mine.classList.add('animate__animated');
                currentProfit = 0;
                currentMinesClicked = 0;
                while (mine.firstChild) {
                    mine.removeChild(mine.firstChild);
                }
            });
            generateBombs();
        } else {
            if (currentMinesClicked == 0) return;
            bal += currentProfit;
            balElement.textContent = bal.toFixed(2);
            multiplier = payouts[currentMineTotal - 1][currentMinesClicked - 1];
            popup[0].style.display = 'flex';
            popupMulti.textContent = String(multiplier) + "x";
            popupWin.textContent = "$" + currentProfit.toFixed(2);
            cashoutAudio.play();
            setTimeout(() => {
                endGame();
            }, 500);
        }
    }

    halfButton.onclick = (event) => {
        if (gameIsRunning) return;
        let amount = betElement.value / 2;
        if (amount > bal) amount = bal;
        betElement.value = (amount).toFixed(2);
    }

    doubleButton.onclick = (event) => {
        if (gameIsRunning) return;
        let amount = betElement.value * 2;
        if (amount > bal) amount = bal;
        betElement.value = (amount).toFixed(2);
    }

    const showAllMines = () => {
        mines.forEach(mine => {
            const img = document.createElement('img');
            (mine.classList.contains('bomb')) ? img.src = 'images/bomb.png' : img.src = 'images/gem.png';
            mine.appendChild(img);
        });
    }

    mines.forEach(mine => {
        mine.onclick = (event) => {
            if (!gameIsRunning) return;
            if (mine.classList.contains('clicked')) return;
            mine.classList.add('clicked');

            if (mine.classList.contains('bomb')) {
                const img = document.createElement('img');
                img.src = 'images/bomb.png';
                mine.classList.add('animate__pulse');
                setTimeout(() => {
                    mine.classList.remove('animate__pulse');
                    mine.appendChild(img);
                    bombAudio.play();
                    setTimeout(() => {
                        endGame();
                    }, 500);
                }, 700);
            } else {
                const img = document.createElement('img');
                img.src = 'images/gem.png';
                mine.classList.add('animate__pulse');
                setTimeout(() => {
                    mine.classList.remove('animate__pulse');
                    mine.appendChild(img);
                    currentMinesClicked++;
                    multiplier = payouts[currentMineTotal - 1][currentMinesClicked - 1];
                    currentProfit = multiplier * currentBet;
                    profitText.textContent = "Total Profit (" + multiplier + "x)";
                    profitNumber.value = String(currentProfit.toFixed(2));
                    gemAudio.play();
                }, 700);
            }
        }
    });

});