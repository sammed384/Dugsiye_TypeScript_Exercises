// ### 1. 🔐 `UserRole` Enum Usage

enum UserRole{
    SUPERADMIN= "superadmin",
    MODERATOR= "moderator",
    VIEWER= "viewer"
}

function canEdit(role: UserRole): boolean {
    return role !== UserRole.VIEWER;
}
canEdit(UserRole.SUPERADMIN); // true
canEdit(UserRole.MODERATOR);  // true
canEdit(UserRole.VIEWER);     // false

// ### 2. 🖱 Type Assertion with `as`

const button = document.querySelector("button") as HTMLButtonElement;
button.disabled = true;
