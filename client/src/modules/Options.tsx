/* Action Types */
const ADD_OPTION = 'options/ADD_OPTION';

/* Action create functions */
let nextId = 0;
export const addOption = (color: number, text:string) => ({
  type: ADD_OPTION,
  option: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    color: color,
    text
  }
});

/* Initial state */
const initialState: any = {
  clouds: [],
};

export default function options(state = initialState, action: any) {
  switch (action.type) {
    case ADD_OPTION:
      console.log("why")
      return {
        ...state,
        clouds: state.clouds.concat(action.option)
      };
    default:
      return state;
  }
}