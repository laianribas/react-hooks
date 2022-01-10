import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {
  switch (action.type) {
    case 'numberAdd2':
      return {
        ...state,
        number: state.number + 2
      }
    case 'login':
      return { ...state, user: { name: action.payload } }
    case 'multiply7':
      return {
        ...state,
        number: state.number * 7
      }
    case 'division25':
      return {
        ...state,
        number: state.number / 25
      }
    case 'parseInt':
      return {
        ...state,
        number: parseInt(state.number)
      }
    case 'numberAddN':
      return {
        ...state,
        number: state.number + action.payload
      }
    default:
      return state
  }
}

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
            onClick={() => dispatch({ type: 'login', payload: 'Laian' })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'numberAdd2' })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'multiply7' })}
          >
            x7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'division25' })}
          >
            ÷25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'parseInt' })}
          >
            Converter para inteiro
          </button>
          <button
            className="btn"
            onClick={() =>
              dispatch({ type: 'numberAddN', payload: parseInt(val) })
            }
          >
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
