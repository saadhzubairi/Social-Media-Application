import axios from "axios"
export const loginCall = async (userC, dispatch) => {
    dispatch({
        type: "LOGIN_START"
    })

    try {
        const res = await axios.post("/auth/login", userC);
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data.user
        })
    }
       
    catch (err) {

        dispatch({
            type: "LOGIN_FAIL",
            payload: err
        })
    }
}