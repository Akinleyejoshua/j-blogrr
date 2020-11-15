const initialState = {
    key: "",
    publisher: "",
    title: "",
    content: "",
    img: "",
    loading: true,
    commentsender: [],
    commenttext: [],
    commentimg: [],
    commentkey: [],
    commentblogkey: ""
}

const viewblogReducer = (state = initialState, action) => {
    switch(action.type){
        case "VIEW_BLOG":
            return {
                ...state,
                key: action.key,
                publisher: action.publisher,
                title: action.title,
                content: action.content,
                img: action.img
            }
        case "CLEAR_BLOG":
            return {
                ...state,
                key: "",
                publisher: "",
                title: "",
                content: "",
                img: "",
                commentsender: [],
                commenttext: [],
                commentimg: [],
                commentkey: [],
            }
        case "VIEW_BLOG_LOADING":
            return {
                ...state,
                loading: action.payload
            }
        case "VIEW_BLOG_COMMENTS":
            return {
                ...state,
                commentimg: [...state.commentimg, action.commentimg],
                commentsender: [...state.commentsender, action.commentsender],
                commenttext: [...state.commenttext, action.commenttext],
                commentkey: [...state.commentkey, action.commentkey],
            }
        case "COMMENT_BLOG_KEY":
            return {
                ...state,
                commentblogkey: action.payload
            }
        default:
            return state
    }
}

export default viewblogReducer;