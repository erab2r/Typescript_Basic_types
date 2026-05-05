
// type userRole = "Admin" | "Editor" | "viewer";
//enum use
// enum userRole {
    // Admin = "Admin",
    // Editor = "Editor",
    // Viewer = "Viewer",
// }

// const canEdit = (role : userRole) =>{
//     if(role === userRole.Admin || role === userRole.Editor)
//         return true;
//     else return false;
// }

// const isEdit = canEdit(userRole.Admin);
// console.log(isEdit);

// as const assertion

const userRole = {
    Admin : "Admin",
    Editor : "Editor",
    Viewer : "Viewer",
} as const;

const canEdit = (role : keyof typeof userRole) =>{
    if(role === userRole.Admin || role === userRole.Editor)
        return true;
    else return false;
}
