import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = props => {
  const [num, setNum] = useState(0)
  const [name, setName] = useState('Laian')
  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{num}</span>
        <div>
          <button
            className="btn"
            onClick={() => {
              setNum(0)
            }}
          >
            0
          </button>
          <button
            className="btn"
            onClick={() => {
              setNum(num - 1)
            }}
          >
            -1
          </button>
          <button
            className="btn"
            onClick={() => {
              setNum(num + 1)
            }}
          >
            +1
          </button>
          <button
            className="btn"
            onClick={() => {
              setNum(1000)
            }}
          >
            1000
          </button>
          <button
            className="btn"
            onClick={() => {
              setNum(current => current + 1000)
            }}
          >
            +1000
          </button>
        </div>
      </div>
      <SectionTitle title="Exercício #02" />
      <input
        type="text"
        className="input"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <span className="text">Estado Atual: {name}</span>
    </div>
  )
}

export default UseState
