interface InputActionParams {
  action?: ({ name, value }: InputFunctionParam) => void;
  setState?: (param: string) => void;
  state?: any;
  name: string;
}

export interface InputFunctionParam {
  name: string | "",
  value: string
};

export const inputAction = ({ action, setState, state, name }: InputActionParams) => {
  let selectEntry: ({ value, name }: InputFunctionParam) => void = () => { };
  if (action) return selectEntry = action;
  else if (setState && state) return selectEntry = ({ value }) =>
    setState({
      ...state,
      [name]: value
    });
  else if (setState && action || setState && !state) throw new Error("Conflict in Dropdown");
  return selectEntry;
}