function User() {
    return(
        <h1>user info</h1>
    )
}

export default User;
// in one file there is only one default export , 
// if we want to export multiple we need to use named export for all other component

export function UserName() {
    return(
         <h2>username</h2>
    )
   
}

export function Password(){
   return(
         <h2>Password</h2>
    )
}

export const Key = "kskff";
// we can export variable like this same way