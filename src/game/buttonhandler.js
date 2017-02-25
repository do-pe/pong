
export const keyDownHandler = (e, {inputPlayer1, inputPlayer2}) => {
  switch(e.keyCode) {
    // player 1: arrow keys
    case 37: {
        inputPlayer1.left = true;
        break;
    }
    case 38: {
        inputPlayer1.up = true;
        break;
    }
    case 39: {
        inputPlayer1.right = true;
        break;
    }
    case 40: {
        inputPlayer1.down = true;
        break;
    }

    // player 2: wasd
    case 65: {
        inputPlayer2.left = true;
        break;
    }
    case 87: {
        inputPlayer2.up = true;
        break;
    }
    case 68: {
        inputPlayer2.right = true;
        break;
    }
    case 83: {
        inputPlayer2.down = true;
        break;
    }
  }
}

export const keyUpHandler = (e, {inputPlayer1, inputPlayer2}) => {
  switch(e.keyCode) {
    // player 1: arrow keys
    case 37: {
        inputPlayer1.left = false;
        break;
    }
    case 38: {
        inputPlayer1.up = false;
        break;
    }
    case 39: {
        inputPlayer1.right = false;
        break;
    }
    case 40: {
        inputPlayer1.down = false;
        break;
    }

    // player 2: wasd
    case 65: {
        inputPlayer2.left = false;
        break;
    }
    case 87: {
        inputPlayer2.up = false;
        break;
    }
    case 68: {
        inputPlayer2.right = false;
        break;
    }
    case 83: {
        inputPlayer2.down = false;
        break;
    }
  }
}
