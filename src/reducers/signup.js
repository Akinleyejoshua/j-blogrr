import Firebase from "../database/Firebase";

const initialState = {
    username: "",
    email: "",
    password: "",
    blob: "",
    img: ""
}

const signupReducer = (state = initialState, action) => {
    switch(action.type){
        case "SIGNUP_USERNAME":
            return{
                ...state,
                username: action.payload
            }
        case "SIGNUP_EMAIL":
            return{
                ...state,
                email: action.payload
            }
        case "SIGNUP_PASSWORD":
            return{
                ...state,
                password: action.payload
            }
        case "SIGNUP_IMG":
            return{
                ...state,
                img: action.img,
                blob: action.blob
            }
        case "SIGNUP":
            if (state.email === "" || state.password === "" || state.username === "" || state.img === ""){
                alert("All fields are required!")
            } else if (state.password.length < 6){
                alert("Password Length not less than 6 Characters")
            } else {
                Firebase().auth.createUserWithEmailAndPassword(state.email, state.password).then(() => {
                    Firebase().auth.onAuthStateChanged(user => {
                        if (user){
                            Firebase().db.ref(`users/${user.uid}`).set({
                                username: state.username,
                                email: state.email,
                                img: `/images/profile-pic/${state.username}`,
                            }).then(() => {
                                Firebase().storage.ref(`images/profile-pic/${state.username}.jpg`).put(state.blob).catch((error) => {
                                    console.log(error)
                                })
                            }).catch((error) => {
                                console.log(error)
                            })
                        }
                    })
                }).catch((error) => {
                    alert(error.code.replace("auth/", ""))
                })
            }
        default:
            return state
    }
}

export default signupReducer;