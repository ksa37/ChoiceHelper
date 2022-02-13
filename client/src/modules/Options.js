/* Action Types */
const ADD_OPTION = 'options/ADD_OPTION';
const DELETE_OPTION = 'options/DELETE_OPTION';

/* Action create functions */
let nextId = 1;
export const addOption = text => ({
  type: ADD_OPTION,
  option: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    text
  }
});

/* Initial state */
const initialState = [

];

export default function options(state = initialState, action) {
  switch (action.type) {
    case ADD_OPTION:
      return state.concat(action.option);
    case DELETE_TODO:
      return state.map(
        todo =>
          todo.id === action.id // id 가 일치하면
            ? { ...todo, done: !todo.done } // done 값을 반전시키고
            : todo // 아니라면 그대로 둠
      );
    default:
      return state;
  }
}