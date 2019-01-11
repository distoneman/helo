const initialState = {
    username: '',
    id: '',
    profile_pic: '',
    user:{}
}

const GET_USER_DATA = 'GET_USER_DATA'

export function getUserData(userInfo) {
    console.log(userInfo)
    return {
        type: GET_USER_DATA,
        payload: userInfo
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA:
             return { ...state, username: action.payload.username, profile_pic: action.payload.profile_pic, id:action.payload.id } //same as Object.assign({},state, user: action.payload)
        default:
            return state;
    }
}