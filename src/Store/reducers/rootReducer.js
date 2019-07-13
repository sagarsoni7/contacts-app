const INITIAL_STATE={
    active_nav: "home"
}

function rootReducer(state=INITIAL_STATE, action){
    switch (action.type){
        case "CHANGE_STATE":
            return{
                ...state,
                active_nav: action.payload
            }
        default:
            return state    
    }
}

export default rootReducer;