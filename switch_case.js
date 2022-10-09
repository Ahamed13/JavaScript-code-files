var user = "sub";

switch (user){
    case "admin" :
        console.log("You get full access");
        break;
    case "testPrep" :
        console.log("You can create/delete");
        break;
    case "subAdmin" :
        console.log("You can create/delete");
        break;
    case "users" :
        console.log("You can consume the courses");
        break;

    default:
        console.log("Hello Trial user");
        break;
}