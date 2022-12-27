import Constants,{Modal} from './../constants'

type State = {
    modals: Array<Modal>;
};

const initialState = {
    modals: [] as Modal[],
};

export default function reducer(
    state: State = initialState,
    action: { type: string; payload: any }
) {
    switch (action.type) {
        case Constants.NEW_MODAL:
            action.payload.id = action.payload.id ?? `${Date.now()}-${state.modals.length}`;
            return {
                ...state,
                modals: [...state.modals, action.payload]
            };
        case Constants.CLOSE_MODAL:
            return {
                ...state,
                modals: state.modals.filter((modal) => modal.id !== action.payload)
            };
        default:
            return state;
    }
}