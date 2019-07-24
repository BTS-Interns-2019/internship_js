// Homework Objects
// Object.assign()
function assign(target, ...sources) {
    for (let source of sources) {
        for (let prop in source) {
            target[prop] = source[prop];
        }
    }
    return target;
}

// Object.defineProperties()
function defineProperties(obj, properties) {
    // I am not sure if this is the way it should be done, couldn't find a way to directly access and modify
    // the descriptors of the properties without the method
    for (let prop in properties) {
        Object.defineProperty(obj, prop, properties[prop]);
    }
}

// Object.entries()
function entries(obj) {
    let result = [];
    for (let prop in obj) {
        result.push([prop, obj[prop]]);
    }
    return result;
}

// Object.freeze()
function freeze(obj) {
    let newObj = assign({}, obj);
    // Preventing new properties to be added
    Object.preventExtensions(newObj);
    for (let prop in newObj) {
        Object.defineProperty(newObj, prop, {
            writable: false,
            enumerable: true,
            configurable: false,
        });
    }
    return newObj;
}

// Object.seal()
function seal(obj) {
    let newObj = assign({}, obj);
    // Preventing new properties to be added
    Object.preventExtensions(newObj);
    for (let prop in newObj) {
        Object.defineProperty(newObj, prop, {
            writable: true,
            enumerable: true,
            configurable: false,
        });
    }
    return newObj;
}

// Object.fromEntries()
function fromEntries(iterable) {
    if (iterable instanceof Map || Array.isArray(iterable)) {
        let obj = {};
        for (let item of iterable) {
            obj[item[0]] = item[1];
        }
        return obj;
    }
    return 'Not an iterable object';
}
// Object.getOwnPropertiesDescriptors()
function getOwnPropertiesDescriptors(obj) {
    let descriptors = {};
    for (let prop in obj) {
        descriptors[prop] = Object.getOwnPropertyDescriptor(obj, prop);
    }
    return descriptors;
}

// Object.isFrozen()
function isFrozen(obj) {
    let properties = getOwnPropertiesDescriptors(obj);
    if (Object.isExtensible(obj)) {
        return false;
    }

    let descriptors = [];

    for (let prop in properties) {
        for (let subProp in properties[prop]) {
            if (subProp === 'writable' || subProp === 'configurable') {
                if (!properties[prop][subProp]) {
                    descriptors.push(true);
                } else {
                    descriptors.push(false);
                }
            }
        }
    }

    return descriptors.every(elem => elem);
}

// Object.isSealed()
function isSealed(obj) {
    let properties = getOwnPropertiesDescriptors(obj);
    if (Object.isExtensible(obj)) {
        return false;
    }

    let descriptors = [];

    for (let prop in properties) {
        for (let subProp in properties[prop]) {
            if (subProp === 'configurable') {
                if (!properties[prop][subProp]) {
                    descriptors.push(true);
                } else {
                    descriptors.push(false);
                }
            }
        }
    }

    return descriptors.every(elem => elem);
}

// Object.keys()
function keys(obj) {
    let results = [];
    for (let prop in obj) {
        if (Object.getOwnPropertyDescriptor(obj, prop).enumerable) {
            results.push(prop);
        }
    }
    return results;
}

// Object.values()
function values(obj) {
    let results = [];
    for (let prop in obj) {
        if (Object.getOwnPropertyDescriptor(obj, prop).enumerable) {
            results.push(obj[prop]);
        }
    }
    return results;
}