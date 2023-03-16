import React, { useEffect, useState } from "react";
import "./Game.css";
import { BsFillHeartFill } from "react-icons/bs"
import title from "./resources/images/title-dark.png"
import { BiArrowBack } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { Link } from "react-router-dom";

export default function Capysweeper() {
  const gridSize = 10;
  const bombsCount = 15;
  const bombSymbol = "x";
  const [currentBombCount, setCurrentBombCount] = useState(0);
  const [flaggerOn, setFlaggerOn] = useState(false);
  const [pauseOn, setPauseOn] = useState(false);
  const [lives, setLives] = useState(3);
  const [lostGame, setLostGame] = useState(false);
  const [wonGame, setWonGame] = useState(false);
  const [openCells, setOpenCells] = useState(1);

  const [seconds, setSeconds] = useState(0)

  const startTimer = () => {
    console.log(pauseOn)
    console.log("pauseOn")

    setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)
  }



  useEffect(() => {
    window.addEventListener('devicemotion', handleMotion);
    return () => {
      window.removeEventListener('devicemotion', handleMotion);
    };
  }, [])

  const handleMotion = (event) => {
    event.preventDefault()
    setGrid(Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, generateEmptyCell)
    ))
    setOpenCells(1)
    setCurrentBombCount(0)
    setLives(3)
    setSeconds(0)
  }


  function generateEmptyCell() {
    return {
      visible: false,
      content: 0,
      opened: false,
      flagged: false,
    };
  }

  const [grid, setGrid] = useState(
    Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, generateEmptyCell)
    )
  );

  function numUp(arr, column, row) {
    if (!isNaN(arr[row][column].content)) {
      arr[row][column].content = arr[row][column].content + 1;
    }
  }

  function randomExcl(numb) {
    let num = Math.floor(Math.random() * gridSize);

    while (num === numb) {
      num = Math.floor(Math.random() * gridSize);
    }

    return num;
  }

  function revealCell(arr, row, column) {
    if (column > 0 && !arr[row][column - 1].opened) {
      arr[row][column - 1].visible = arr[row][column - 1].content !== 0;
      arr[row][column - 1].opened = true;
      arr[row][column - 1].flagged = false;
      setOpenCells(openCells => openCells + 1)
      if (arr[row][column - 1].content === 0) {
        revealCell(arr, row, column - 1);
      }
    }

    if (row > 0 && column > 0 && !arr[row - 1][column - 1].opened) {
      arr[row - 1][column - 1].visible = arr[row - 1][column - 1].content !== 0;
      arr[row - 1][column - 1].opened = true;
      arr[row - 1][column - 1].flagged = false;
      setOpenCells(openCells => openCells + 1)
      if (arr[row - 1][column - 1].content === 0) {
        revealCell(arr, row - 1, column - 1);
      }
    }

    if (
      row < arr.length - 1 &&
      column > 0 &&
      !arr[row + 1][column - 1].opened
    ) {
      arr[row + 1][column - 1].visible = arr[row + 1][column - 1].content !== 0;
      arr[row + 1][column - 1].opened = true;
      arr[row + 1][column - 1].flagged = false;
      setOpenCells(openCells => openCells + 1)
      if (arr[row + 1][column - 1].content === 0) {
        revealCell(arr, row + 1, column - 1);
      }
    }

    if (row < arr.length - 1 && !arr[row + 1][column].opened) {
      console.log(row + 1);
      console.log(column);
      arr[row + 1][column].visible = arr[row + 1][column].content !== 0;
      arr[row + 1][column].opened = true;
      arr[row + 1][column].flagged = false;
      setOpenCells(openCells => openCells + 1)
      if (arr[row + 1][column].content === 0) {
        revealCell(arr, row + 1, column);
      }
    }

    if (row > 0 && !arr[row - 1][column].opened) {
      arr[row - 1][column].visible = arr[row - 1][column].content !== 0;
      arr[row - 1][column].opened = true;
      arr[row - 1][column].flagged = false;
      setOpenCells(openCells => openCells + 1)
      if (arr[row - 1][column].content === 0) {
        revealCell(arr, row - 1, column);
      }
    }

    if (
      row > 0 &&
      column < arr.length - 1 &&
      !arr[row - 1][column + 1].opened
    ) {
      arr[row - 1][column + 1].visible = arr[row - 1][column + 1].content !== 0;
      arr[row - 1][column + 1].opened = true;
      arr[row - 1][column + 1].flagged = false;
      setOpenCells(openCells => openCells + 1)
      if (arr[row - 1][column + 1].content === 0) {
        revealCell(arr, row - 1, column + 1);
      }
    }

    if (
      row < arr.length - 1 &&
      column < arr.length - 1 &&
      !arr[row + 1][column + 1].opened
    ) {
      arr[row + 1][column + 1].visible = arr[row + 1][column + 1].content !== 0;
      arr[row + 1][column + 1].opened = true;
      arr[row + 1][column + 1].flagged = false;
      setOpenCells(openCells => openCells + 1)
      if (arr[row + 1][column + 1].content === 0) {
        revealCell(arr, row + 1, column + 1);
      }
    }

    if (column < arr.length - 1 && !arr[row][column + 1].opened) {
      arr[row][column + 1].visible = arr[row][column + 1].content !== 0;
      arr[row][column + 1].opened = true;
      arr[row][column + 1].flagged = false;
      setOpenCells(openCells => openCells + 1)
      if (arr[row][column + 1].content === 0) {
        revealCell(arr, row, column + 1);
      }
    }
  }

  function handleClick(arr, row, column) {
    let newGrid;

    if (!flaggerOn) {
      if (currentBombCount < bombsCount && arr[row][column].flagged != true) {
        startTimer();
        newGrid = generateBombs(arr, row, column);
        newGrid[row][column].visible = newGrid[row][column].content !== 0;
        newGrid[row][column].opened = true;
        setOpenCells(openCells => openCells + 1)

        console.log(newGrid[row][column].content === 0);
        if (newGrid[row][column].content === 0) {
          revealCell(newGrid, row, column);
        }

        setGrid(newGrid);
        setCurrentBombCount(bombsCount);
      } else {
        newGrid = [...arr];
        if (
          newGrid[row][column].opened != true &&
          newGrid[row][column].flagged != true
        ) {
          if (
            newGrid[row][column].content === bombSymbol &&
            newGrid[row][column].flagged === false) {
            newGrid[row][column].opened = true;
            if (lives - 1 > 0) {
              setLives(lives - 1);
              navigator.vibrate(100)
            }
            else {
              setLostGame(true)
            }

            console.log("bombb");
            console.log("heheh");
          } else {
            console.log(row);
            console.log(column);
            newGrid[row][column].visible = newGrid[row][column].content !== 0;
            newGrid[row][column].opened = true;
            setOpenCells(openCells => openCells + 1)


            console.log(newGrid[row][column].content === 0);
            if (newGrid[row][column].content === 0) {
              revealCell(newGrid, row, column);
            }
            console.log("heheh");
          }

          setGrid(newGrid);


          console.log(arr);
        }
      }
    }
    else {

      newGrid = [...arr];


      if (!newGrid[row][column].opened) {
        newGrid[row][column].flagged = !newGrid[row][column].flagged;

      }

      setGrid(newGrid)
      console.log(arr[row][column])

    }

    console.log(openCells)
    console.log("openCells")
    if (openCells === gridSize * gridSize - bombsCount) {
      setWonGame(true)
    }

  }

  function generateBombs(arr, row, column) {
    let newGrid = [...arr];
    let bombCount = 0;

    for (let i = 0; i < bombsCount; i++) {
      let bombColumn = randomExcl(column);
      let bombRow = randomExcl(row);

      if (newGrid[bombRow][bombColumn].content !== bombSymbol) {
        newGrid[bombRow][bombColumn].content = bombSymbol;
        console.log("setBomb");
        console.log(newGrid[bombRow][bombColumn]);
        console.log(arr[bombRow][bombColumn]);

        if (bombColumn > 0) {
          if (bombRow > 0) {
            numUp(newGrid, bombColumn - 1, bombRow - 1);
          }
          numUp(newGrid, bombColumn - 1, bombRow);
          if (bombRow < gridSize - 1) {
            numUp(newGrid, bombColumn - 1, bombRow + 1);
          }
        }
        if (bombColumn < gridSize - 1) {
          if (bombRow > 0) {
            numUp(newGrid, bombColumn + 1, bombRow - 1);
          }
          numUp(newGrid, bombColumn + 1, bombRow);
          if (bombRow < gridSize - 1) {
            numUp(newGrid, bombColumn + 1, bombRow + 1);
          }
        }
        if (bombRow > 0) {
          numUp(newGrid, bombColumn, bombRow - 1);
        }
        if (bombRow < gridSize - 1) {
          numUp(newGrid, bombColumn, bombRow + 1);
        }

        bombCount++;
      }
      else{
        i--;
      }
    }

    // setGrid(newGrid);
    console.log(newGrid);
    console.log(arr);
    setCurrentBombCount(bombCount);
    return newGrid;
  }

  function lightOrDark(row, column) {
    if (
      (row % 2 === 0 && column % 2 === 0) ||
      (row % 2 != 0 && column % 2 != 0)
    ) {
      return true;
    }
    return false;
  }


  function generateGrid(arr) {

    if (lostGame) {
      setTimeout(() => {
        // Navigate to the Lose component
        window.location.href = '/Lose';
      }, 1000);
    }
    else if (wonGame) {
      setTimeout(() => {
        // Navigate to the Lose component
        window.location.href = '/Win';
      }, 1000);
    }
    else {
      return (
        <div className="game">
          <div className="settings">
            <img src={title} className="titlePic" alt="" />
          </div>
          <div className="gameSettings">
            {/* <div className="pause" ></div> */}
            <div className={`${flaggerOn ? "flagger " : "flaggerOff "}`} onClick={(e) => (setFlaggerOn(!flaggerOn))}>

            </div>
            <div className="timer">
              {Math.trunc(seconds / 60) < 10 ? `0${Math.trunc(seconds / 60)}` : Math.trunc(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
            </div>
            <div className="lives">
              <div className="live live3"><BsFillHeartFill color={lives >= 1 ? "red" : ""} /></div>
              <div className="live live2"><BsFillHeartFill color={lives >= 2 ? "red" : ""} /></div>
              <div className="live live1"><BsFillHeartFill color={lives >= 3 ? "red" : ""} /></div>
            </div>
          </div>
          <div className="grid">
            {arr.map((row, rowIndex) => (
              <div className="row" key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <div
                    onClick={() => {
                      handleClick(arr, rowIndex, cellIndex);
                    }}
                    key={`${rowIndex}-${cellIndex}`}
                    className={`cell${cell.opened ? " opened" : ""}${lightOrDark(rowIndex, cellIndex) ? " light" : " dark"
                      } content${cell.content} ${cell.flagged ? "flagged" : ""}`}
                    id={`${cell.content === bombSymbol && cell.opened === true
                      ? "boom"
                      : ""
                      }`}
                  >
                    {cell.visible ? cell.content : ""}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="other-option-btns">
            <button type="button" className="levels-bottom-btn"><Link to={"/"} className="link"><BiArrowBack size="1.5rem" /> </Link></button>
            {/* <button type="button" className="levels-bottom-btn1"><Link to={"/settings"} className="link"> <FiSettings size="1.5rem" /> </Link> </button> */}

          </div>
        </div>
      );
    }

  }

  return <div>{generateGrid(grid)}</div>;
}
