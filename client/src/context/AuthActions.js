export const LoginStart = (userCreds) => ({
    type: "LOGIN_START",
})

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})

export const LoginFaliure = (error) => ({
    type: "LOGIN_FAIL",
    payload: error
})

export const PalAdd = (userId) => ({
    type: "PAL_ADD",
    payload: userId,
});

export const UpdateInfo = (changes) => ({
    type: "UPDATE_INFO",
    payload: changes,
});