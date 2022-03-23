/* Action Types */
const ADD_OPTION = 'options/ADD_OPTION';
const SET_TEXT = 'options/SET_TEXT';
const SET_PICKED = 'options/SET_PICKED';

/* Action create functions */
let nextId = 2;
export const addOption = (color: number, text:string) => ({
  type: ADD_OPTION,
  option: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    color: color,
    text
  }
});

export const setText = (id:number, text:string) => ({
  type: SET_TEXT,
  id: id,
  text: text
})

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
  clouds: [{id:0, color:0, text:''}, {id:1, color:1, text:''}],
  color: 1,
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
    case SET_TEXT:
      //action.id action.text
      //action.id로 cloud내에서 해당 옵션 찾고 여기 내의 텍스트 변경하기
      return{
        ...state,
        clouds: state.clouds.map(
          (x:any) => x.id === action.id ? {...x, text: action.text}
                                        : x
        )
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