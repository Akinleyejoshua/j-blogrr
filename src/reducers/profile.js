const initialState = {
    loading: true,
    username: "",
    email: "",
    profilepic: null,
    myBlog: {
        img : [],
        publisher : [],
        title: [],
        key: [],
        content: [],
        commentkeylength: [],
    },
    myblogmounted: false,
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOAD_PROFILE":
            return{
                ...state,
                loading: action.payload
            }
        case "GET_PROFILE":
            return {
                ...state,
                username: action.username,
                email: action.email,
            }
        case "GET_PROFILE_PIC":
            return {
                ...state,
                profilepic: action.profilepic
            }
        case "GET_MYBLOG": 
            return {
                ...state,
                myBlog : {
                    img : [...state.myBlog.img, action.img],
                    publisher : [...state.myBlog.publisher, action.publisher],
                    title : [...state.myBlog.title, action.title],
                    content : [...state.myBlog.content, action.content],
                    key : [...state.myBlog.key, action.key],
                    commentkeylength: [...state.myBlog.commentkeylength, action.commentkeylength]
                }
            }
        case "CLEAR_ALL_BLOG":
            return {
                ...state,
                myBlog : {
                    img : [],
                    publisher : [],
                    title : [],
                    content : [],
                    key : [],
                    commentkeylength: []
                }
            }
        case "MOUNT_MYBLOG":
            return {
                ...state,
                myblogmounted: action.payload
            }
        default:
            return state
    }
}

export default profileReducer;
