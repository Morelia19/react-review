import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './componentes/Square'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './componentes/WinnerModal'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index'

function App() {
  const [board, setBoard] = useState( ()=>{
    const boardFromstorage =window.localStorage.getItem('board')
    if(boardFromstorage) return JSON.parse(boardFromstorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState( () =>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)


  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({board: newBoard, turn: newTurn})

    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return(
  <main className='board'>
    <h1>Tic Tac Toe</h1>
    <button onClick={resetGame}>Reset del juego</button>
    <section className='game'>
      {
        board.map((square, index)=>{
          return(
            <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })
      }
    </section>

    <section className='turn'>
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>

    <WinnerModal resetGame={resetGame} winner={winner}/>
  
  </main>
  )
}

export default App
