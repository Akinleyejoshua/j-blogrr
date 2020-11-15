import Firebase from "../database/Firebase";

const initialState = {
    email: "",
    password: "",
    loading: false,
}

const signinReducer = (state = initialState, action) => {
    switch(action.type){
        case "SIGNIN_EMAIL":
            return {
                ...state,
                email: action.email
            }
        case "SIGNIN_PASSWORD":
            return {
                ...state,
                password: action.password
            }
        case "SIGNIN_LOADING": 
        return {
            ...state,
            loading: action.payload
        }
        case "SIGNIN":
            if (state.email === "" || state.password === ""){
                alert("Empty Field!")
            } else {
                Firebase().auth.signInWithEmailAndPassword(state.email, state.password).catch((error) => {
                    if (error){
                        alert(error.code.replace("auth/", ""))
                    }
                })
            }
            return state;         
        default:
            return state
    }
}

export default signinReducer;