export const checkPrivileges = (user, role) => {
    return user.getIdTokenResult().then(idTokenResult =>{
        console.log("ROLE: ", idTokenResult.claims.role)
        if(role===idTokenResult.claims.role){
            console.log("Returning true. . . ");
            return true
        }
        console.log("return false. . . ")
        return false
    })
}