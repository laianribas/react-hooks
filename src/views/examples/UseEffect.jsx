import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
  const num = parseInt(n)
  if (num < 0) return -1
  if (num === 0) return 1
  return calcFatorial(num - 1) * n
}

function isEven(n) {
  if (n % 2 === 0) {
    return true
  } else {
    return false
  }
}

const UseEffect = props => {
  const [value, setValue] = useState(0)
  const [num, setNum] = useState(1)
  const [fatorial, setFatorial] = useState(1)
  const [pair, setPair] = useState(true)

  useEffect(() => {
    setFatorial(calcFatorial(num))
  }, [num])

  useEffect(() => {
    if (fatorial >= 1000000) {
      document.title = 'Eita!'
    } else {
      document.title = 'React App'
    }
  }, [fatorial])

  useEffect(() => {
    setPair(isEven(value))
  }, [value])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? 'Não existe' : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={num}
          onChange={e => setNum(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div>
          <span className="text">É par?: </span>
          <span className="text red">{pair ? 'É par!' : 'Não é par!'}</span>
        </div>
        <input
          type="number"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default UseEffect
