export const isJsonString = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

export const isEmptyValue = (value) => {
    if (
        value == '' ||
        value == null ||
        value == undefined ||
        JSON.stringify(value) == '{}' ||
        JSON.stringify(value) == '[]'
    ) {
        return true;
    }
    return false;
};

export const isExist = (value) => {
    return !isEmptyValue(value);
};

export function checkIsUrl(url) {
    return url
        ? /(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z0-9]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
              url,
          )
        : false;
}
