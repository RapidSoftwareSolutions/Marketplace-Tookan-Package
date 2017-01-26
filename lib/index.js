const Q    = require('q');
const fs   = require('fs');
const path = require('path');

module.exports.callback = (gen) => {
    return function() {
        return Q.async(gen).apply(null, arguments).done();
    };
};

module.exports.init = () => {
    let apiObject = new Object(null);

    fs.readdirSync(path.join(process.env.PWD, 'api')).forEach((file) => {
        try {
            var type    = file.substring(file.lastIndexOf('.') + 1),
                route   = file.substring(0, file.length - type.length - 1);

            if(!type == 'js' || route == 'metadata.js') return;

            apiObject[route] = require(`../api/${file}`);
        } catch(e) { 
            console.log(e);
            return;
        }
    });

    return apiObject;
}

module.exports.parseValues = (values) => {
    let opts = {};
    for(let val in values) 
        opts[val + '|String'] = values[val];
    
    return opts;
}

module.exports.safeParse = (str) => {
    try {
        return JSON.parse(str)
    } catch(e) {
        return str;
    }
};

module.exports.parseReq = (obj) => {
    let arr = [];
    for(let key in obj)
        if(!obj[key]) arr.push(key);

    return arr;
}

module.exports.success = (response) => 
    response == null ? {'status_code': 'SUCCESS'} : response;

module.exports.error = (e) => 
    e.status_code 
        ? e : 
        { status_code: "API_ERROR", status_msg: e.message ? e.message : e };

module.exports.toCamelCase = (str, upper) => {
    str = str.toLowerCase().replace(/(?:(^.)|(\s+.)|(-.)|(_.))/g, 
        (match) => match.charAt(match.length - 1).toUpperCase())
    if (upper)
        return str;
    return str.charAt(0).toLowerCase() + str.substr(1);
};

module.exports.transform = (s, sb) => {
    let re = new RegExp(`/^${sb}/`); 
    return s.replace(/\.?([A-Z]+)/g, (x,y) => sb + y.toLowerCase()).replace(re, "");
}

module.exports.clearArgs = function fn(obj) {
    for (var i in obj) {
        if (obj[i] == undefined || obj[i] === '')
            delete obj[i];
        else if (typeof obj[i] === 'object') {
            if(JSON.stringify(obj[i]) == '{}')
                delete obj[i];

            fn(obj[i]);
        }
    }

    return obj;
};

module.exports.randomString = () => Math.random().toString(36).substring(10);

module.exports.safeParse = (str) => {
    try {
        return JSON.parse(str)
    } catch(e) {
        return str;
    }
};

module.exports.safeSave = (path, content) => {
    fs.writeFile(path, content, { flag: 'wx' }, (err) => {
        if(err) {
            if(err.code == 'EEXIST') {
                console.log('\n' + path + ' already exists.\n');
                process.exit(1);
            } else {
                throw err;
            }
        }

        console.log("\nSuccess!\n");
        process.exit(0);
    });
}