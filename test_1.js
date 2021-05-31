const deepClone = (object) => {

    let objectClone = {};

    var keys = Object.keys(object);

    keys.forEach(key => {
        if(typeof object[key] !== "object"){
            objectClone[key] = object[key];
        }else{
            objectClone[key] = deepClone(object[key]);
        }
    })

    return objectClone;
}

console.log(deepClone(
    { name: "Hitachi MGRM NET", address: { city: "Gurgaon", country: "India" } }
));