export function addUser(user)
{
    return {
    type:'ADD_USER',
    payload:user
    }
}

export function deleteUser(Id)
{
    return {
    type:'DELETE_USER',
    payload:Id
    }
}

export function updateUser(user)
{
    return {
        type:'UPDATE_USER',
        payload:user
        }

}