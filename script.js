// Select the elements
let btns = document.querySelectorAll(".btn");
let turn1 = true; // player1 and player2
let board = Array(9).fill(""); // To keep track of the board state
let lin = document.querySelector(".line");////////
let lon = document.querySelector(".lon");//////
let ala = document.querySelector(".ala");////
let man = document.querySelector(".main");
let li = document.querySelector(".l");/////////////
let i = document.querySelector(".l2");////////
let ii = document.querySelector(".l3");
let lo = document.querySelector(".l4");
let l70 = document.querySelector(".l7");



// alert customization--
// Custom alert function
function customAlert(message) {
    let alertModal = document.getElementById("alertModal");
    let alertMessage = document.getElementById("alertMessage");
    let closeButton = document.getElementById("closeButton");
    let alertOkButton = document.getElementById("alertOkButton");

    alertMessage.innerText = message;
    alertModal.style.display = "block";

    closeButton.onclick = function() {
        alertModal.style.display = "none";
    };

    alertOkButton.onclick = function() {
        alertModal.style.display = "none";
    };

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == alertModal) {
            alertModal.style.display = "none";
        }
    };
}




// Winning patterns
let patt = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Add click event to each button
btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (turn1) {
            btn.innerHTML = "X";
            board[index] = "X";
            turn1 = false;
        } else {
            btn.innerHTML = "O";
            board[index] = "O";
            turn1 = true;
        }
        btn.disabled = true;

        let winningPattern = checkWinner(board, "X");
        if (winningPattern) {
            setTimeout(()=>{
                customAlert("X Have won");
               
            },2)
            console.log("Player X is the winner!");
            displayLine(winningPattern);
           
        } else {
            
            winningPattern = checkWinner(board, "O");
            if (winningPattern) {
                setTimeout(()=>{
                    customAlert("O have Won");
                },2)
             
                console.log("Player O is the winner!");
                displayLine(winningPattern);
            }
        }
    });
});

// Reset button
let re = document.querySelector(".re");
re.addEventListener("click", () => {
    btns.forEach((btn) => {
        btn.innerHTML = "";
        btn.disabled = false;
   

    });
    lin.style.display = "none";
    lon.style.display = "none";
    ala.style.display = "none";
    li.style.display = "none";
    i.style.display = "none";
    ii.style.display = "none";
    lo.style.display = "none";
    board = Array(9).fill("");
    turn1 = true;
});

// Check for winner function
const checkWinner = (board, player) => {
    for (const pattern of patt) {
        if (board[pattern[0]] === player &&
            board[pattern[1]] === player &&
            board[pattern[2]] === player) {
            return pattern;
        }
    }
    return null;
};

// Display line based on the winning pattern
function displayLine(winningPattern) {
    switch (winningPattern.toString()) {
        case "0,1,2":
            lin.style.display = "block";
            
            break;
        case "3,4,5":
            lon.style.display = "block";
            break;
        case "6,7,8":
            ala.style.display = "block";
            break;
        case "0,3,6":
            lin.style.transform = "rotate(90deg)";
            lin.style.top = "220px";
            lin.style.left = "45px";
            // lin.style.display = "block";
            li.style.display="block"
            
            break;
        case "1,4,7":
            lon.style.transform = "rotate(90deg)";
            lon.style.top = "220px";
            lon.style.left = "245px";
            // lon.style.display = "block";
            ii.style.display = "block";
            break;
        case "2,4,6":
            // ala.style.transform = "rotate(90deg)";
            // ala.style.top = "220px";
            // ala.style.left = "445px";
            // ala.style.display = "block";
            // i.style.display = "block";
            lo.style.display = "block";
            // lo.style.transform="rotate(-4deg)"
            break;
        case "0,4,8":
            li.style.transform = "rotate(45deg)";
            lin.style.top = "220px";
            lin.style.left = "45px";
            // lin.style.display = "block";
            l70.style.display = "block";
            break;
        case "2,5,8":
            ala.style.transform = "rotate(90deg)";
            ala.style.top = "220px";
            ala.style.left = "45px";
            // ala.style.display = "block";
            // li.style.display = "block";
            i.style.display = "block";
            break;
    }
}


// alert customization--
