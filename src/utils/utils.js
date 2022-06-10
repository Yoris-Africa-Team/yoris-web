export function $(selector) {
    let res = document.querySelectorAll(selector);
    console.log(res);
    if (res) {
        res = Array.from(res);
        return res.length > 1 ? res : res[0];  // return all if arrya element is greater than 1 else return single element
    }
    return null;
}