import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import {
  numberAdd2,
  login,
  multiply7,
  division25,
  parseInt,
  numberAddN
} from '../../store/actions'
const UseReducer = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [val, setVal] = useState(0)
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sign In</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => login(dispatch, 'Laian Ribas')}
          >
            Login
          </button>
          <button className="btn" onClick={() => numberAdd2(dispatch)}>
            +2
          </button>
          <button className="btn" onClick={() => multiply7(dispatch)}>
            x7
          </button>
          <button className="btn" onClick={() => division25(dispatch)}>
            ÷25
          </button>
          <button className="btn" onClick={() => parseInt(dispatch)}>
            Converter para inteiro
          </button>
          <button className="btn" onClick={() => numberAddN(dispatch, val)}>
            +{val}
          </button>
          <input
            type="number"
            className="input"
            value={val}
            onChange={e => setVal(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default UseReducer
