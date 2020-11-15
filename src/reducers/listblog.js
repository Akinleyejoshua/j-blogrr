const initialState = {
    key: [],
    publisher: [],
    title: [],
    content: [],
    img: [],
    loading: true,
    commentsender: [],
    commenttext: [],
    commentimg: [],
    commentkey: [],
    commentkeylength: [],
    commentrecieved: false,
    search : {
        key: [],
        publisher: [],
        title: [],
        content: [],
        img: [],
        loading: true,
        commentsender: [],
        commenttext: [],
        commentimg: [],
        commentkey: [],
        commentkeylength: [],
    }
}

const listblogReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOAD_BLOGS":
            return {
                ...state,
                key: [...state.key, action.key],
                publisher: [...state.publisher, action.publisher],
                title: [...state.title, action.title],
                content: [...state.content, action.content],
                img: [...state.img, action.img]
            }
        case "LIST_BLOG_LOADING":
            return {
                ...state,
                loading: action.payload
            }
        case "LOAD_BLOG_COMMENTS":
            return {
                ...state,
                commentimg: [...state.commentimg, action.commentimg],
                commentsender: [...state.commentsender, action.commentsender],
                commenttext: [...state.commenttext, action.commenttext],
                commentkey: [...state.commentkey, action.commentkey],
            }
        case "LOAD_COMMENT_DATA":
            return {
                ...state,
                commentkey: [[...state.commentkey, action.key]]
            }
        case "LOAD_COMMENT_KEY_LENGTH":
            return {
                ...state,
                commentkeylength: [...state.commentkeylength, action.payload]
            }
        case "CLEAR_COMMENT":
            return {
                ...state,
                commentimg: [],
                commentsender: [],
                commenttext: [],
                commentkey: [],
            }
        case "LOAD_SEARCH":
            return {
                ...state,
                search: {
                    ...state,
                    key: action.key,
                    publisher: action.publisher,
                    title: action.title,
                    content: action.content,
                    img: action.img,
                    commentkey: action.commentkey,
                    commentkeylength: action.commentkeylength,
                }
            }
        case "COMMENT_RECIEVED":
            return {
                ...state,
                commentrecieved: action.payload
            }
        default:
            return state
    }
}

export default listblogReducer;