import { idText } from 'typescript';

/* Action Types */
const ADD_OPTION = 'options/ADD_OPTION';
const SET_PICKED = 'options/SET_PICKED';

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

export const setPicked = (id:number, color:number, text:string) => ({
  type: SET_PICKED,
  pickedItem: {
    id: id,
    color: color,
    text: text
  }

})
/* Initial state */
const initialState: any = {
  clouds: [],
  color: 0,
  pickedOption: {}
};

export default function options(state = initialState, action: any) {
  switch (action.type) {
    case ADD_OPTION:
      return {
        ...state,
        clouds: state.clouds.concat(action.option),
        color: action.option.color
      };
    case SET_PICKED:
      return {
        ...state,
        pickedOption: action.pickedItem
      };
    default:
      return state;
  }
}