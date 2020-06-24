
const userReducer = (state =[],action) => {
    let stateCopy = [];
    switch(action.type){
    case 'ADD_USER':
    stateCopy = [...state,action.payload]
    localStorage.setItem('users',JSON.stringify(stateCopy));
    return stateCopy
    
    case 'DELETE_USER':
    stateCopy = state.filter( x => x.id !== action.payload);
    localStorage.setItem('users',JSON.stringify(stateCopy));
    return stateCopy
        
    case 'UPDATE_USER':
    
    stateCopy = state.map((user) => {
        const {id,name,mobile,email} = action.payload;
        if(user.id === id)
        {
        user.name = name;
        user.mobile = mobile;
        user.email = email;
        }
        return user;
    })
    localStorage.setItem('users',JSON.stringify(stateCopy));
    return stateCopy
    
    default:
        return state;
    }
    
    }
    export default userReducer;