/* Action Types */
const ADD_OPTION = 'options/ADD_OPTION';
const DELETE_OPTION = 'options/DELETE_OPTION';
const SET_TEXT = 'options/SET_TEXT';
const SET_PICKED = 'options/SET_PICKED';
const SET_BUTTON_OPT = 'options/SET_BUTTON_OPT';

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

export const deleteOption = (id:number) => ({
  type: DELETE_OPTION, 
  id:id
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

export const setButtonOpt = (btnOpt:number) => ({
  type: SET_BUTTON_OPT,
  btnOpt: btnOpt
})
//btnOpt: BtnOpt

/* Initial state */
const initialState: any = {
  clouds: [{id:0, color:0, text:''}, {id:1, color:1, text:''}],
  color: 1,
  pickedOption: {},
  btnOpt: 0
};

export default function options(state = initialState, action: any) {
  switch (action.type) {
    case ADD_OPTION:
      return {
        ...state,
        clouds: state.clouds.concat(action.option),
        color: action.option.color
      };
    case DELETE_OPTION:
      return {
        ...state, 
        clouds: state.clouds.filter((cloud:any) => cloud.id !== action.id)
      };
    case SET_TEXT:
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
    case SET_BUTTON_OPT:
      return {
        ...state,
        btnOpt: action.btnOpt
      };
    default:
      return state;
  }
}