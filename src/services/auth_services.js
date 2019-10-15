
export const checkPrivileges = (user, role) => {
    return user.getIdTokenResult().then(idTokenResult=>{
        return role===idTokenResult.claims.role ? true : false
    })
}

