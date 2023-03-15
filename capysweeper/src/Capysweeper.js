import React, { useState } from "react";
import "./Game.css";

export default function Capysweeper() {
  const gridSize = 10;
  const bombsCount = 20;
  const bombSymbol = "x";
  const [currentBombCount, setCurrentBombCount] = useState(0);
  const [row, setRow] = useState(null);
  const [column, setColumn] = useState(null);

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
      if (arr[row][column - 1].content === 0) {
        revealCell(arr, row, column - 1);
      }
    }

    if (row > 0 && column > 0 && !arr[row - 1][column - 1].opened) {
      arr[row - 1][column - 1].visible = arr[row - 1][column - 1].content !== 0;
      arr[row - 1][column - 1].opened = true;
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
      if (arr[row + 1][column - 1].content === 0) {
        revealCell(arr, row + 1, column - 1);
      }
    }

    if (row < arr.length - 1 && !arr[row + 1][column].opened) {
      console.log(row + 1);
      console.log(column);
      arr[row + 1][column].visible = arr[row + 1][column].content !== 0;
      arr[row + 1][column].opened = true;
      if (arr[row + 1][column].content === 0) {
        revealCell(arr, row + 1, column);
      }
    }

    if (row > 0 && !arr[row - 1][column].opened) {
      arr[row - 1][column].visible = arr[row - 1][column].content !== 0;
      arr[row - 1][column].opened = true;
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
      if (arr[row + 1][column + 1].content === 0) {
        revealCell(arr, row + 1, column + 1);
      }
    }

    if (column < arr.length - 1 && !arr[row][column + 1].opened) {
      arr[row][column + 1].visible = arr[row][column + 1].content !== 0;
      arr[row][column + 1].opened = true;
      if (arr[row][column + 1].content === 0) {
        revealCell(arr, row, column + 1);
      }
    }
  }

  function handleClick(arr, row, column) {
    let newGrid;
    if (currentBombCount < bombsCount) {
      newGrid = generateBombs(arr, row, column);
      newGrid[row][column].visible = newGrid[row][column].content !== 0;
      newGrid[row][column].opened = true;

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
          newGrid[row][column].flagged === false
        ) {
          newGrid[row][column].opened = true;
          console.log("bombb");
          console.log("heheh");
        } else {
          console.log(row);
          console.log(column);
          newGrid[row][column].visible = newGrid[row][column].content !== 0;
          newGrid[row][column].opened = true;

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
    console.log(row);
    console.log(column);
    return (
      <div className="grid">
        {arr.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <div
                onClick={() => {
                  handleClick(arr, rowIndex, cellIndex);
                }}
                key={`${rowIndex}-${cellIndex}`}
                className={`cell${cell.opened ? " opened" : ""}${
                  lightOrDark(rowIndex, cellIndex) ? " light" : " dark"
                } content${cell.content}`}
                id={`${
                  cell.content === bombSymbol && cell.opened === true
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
    );
  }

  return <div>{generateGrid(grid)}</div>;
}
