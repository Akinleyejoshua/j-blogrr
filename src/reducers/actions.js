const initialState = {
    loading: false,
    modal: false,
    mainSideNav: false,
    onScroll: false,
    userSideNav: false,
    commentloading: true,
    commentbar: false,
    loggedin: null,
}

const actionsReducer = (state = initialState, action) => {
    switch(action.type){
        case "TOGGLE_MAIN_SIDE_BAR":
            return {
                ...state,
                mainSideNav: action.payload
            }
        case "TOGGLE_USER_SIDE_BAR":
            return {
                ...state,
                userSideNav: action.payload
        }
        case "TOGGLE_HEADER_FIXED":
            return {
                ...state,
                onScroll: action.payload
            }
        case "TOGGLE_COMMENT_BAR":
            return {
                ...state,
                commentbar: action.payload
            }
        case "LOGGED_IN":
            return {
                ...state,
                loggedin: action.payload
            }
        case "COMMENT_LOADING":
            return {
                ...state,
                commentloading: action.payload
            }
        default:
            return state
    }
}

export default actionsReducer;