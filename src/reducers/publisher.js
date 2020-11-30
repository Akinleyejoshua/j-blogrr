const initialState = {
    title: "",
    content: "",
}

const publisherReducer = (state = initialState, action) => {
    switch(action.type){
        case "PUBLISH_TITLE":
            return{
                ...state,
                title: action.payload
            }
        case "PUBLISH_CONTENT":
            return {
                ...state,
                content: action.payload
            }
        default:
            return state
    }
}

export default publisherReducer;