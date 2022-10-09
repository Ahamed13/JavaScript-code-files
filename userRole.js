var getUserRole = function (name, role){
    switch(role){
        case "admin":
            return `${name} is a ${role} with all access`;
        case "subadmin":
            return `${name} is a ${role} with access to create and delete`;
        case "testPrep":
            return `${name} is a ${role} with access to create and delete`;
        case "user":
            return `${name} is a ${role} with access to consume the courses`;

        default:
            return `${name} is a trial user`;
    }
};

console.log(getUserRole("Ahmed", "user"));

console.log(getUserRole("Ahmed", "non-user"));

var get = getUserRole("Ahamed Sheak", "testPrep");
console.log(get);