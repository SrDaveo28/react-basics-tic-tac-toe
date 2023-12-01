const TURNS = {
  X: 'x',
  O: 'o',
}

const Square = ({children, updateBoard, index}) => {
  return (
    <div className="square">
      {children}
    </div>
  )
}

const App = () => {
  const board = Array(9).fill(null);
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
              >
                {index}
              </Square>
            )
          })
        }
      </section>
    </main>
  )
}

export default App