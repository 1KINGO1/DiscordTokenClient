let initialState = {
    isLogin: false,
    loginToken: null
}

export const loginReducer = (state = initialState, action) => {

    switch (action.type){
        case "LOGIN":
            return {isLogin: true, loginToken: action.payload}
        default:
            return {...state}
    }

}
