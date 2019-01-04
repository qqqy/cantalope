const TEST_REDUCER = 'TEST_REDUCER'
const initialState = {
  test: 'test',
  definitely: 'definitely'
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case TEST_REDUCER:
      return Object.assign({}, state)
    default: return state
  }
}