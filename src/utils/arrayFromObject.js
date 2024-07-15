export function createArrayFromOject(obj) {
    const arrayData = []
    for (const [key, value] of Object.entries(obj)) {
        let obj = {
            name: key,
            value: value,
        }
        arrayData.push(obj)
    }
    return arrayData
}
