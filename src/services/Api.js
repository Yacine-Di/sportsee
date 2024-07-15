export async function getGeneralDatas(id) {
    return await fetch(`http://localhost:3000/user/${id}`)
        .then((res) => res.json())
        .then((data) => data)
}

export async function getActivityInfos(id) {
    return await fetch(`http://localhost:3000/user/${id}/activity`)
        .then((res) => res.json())
        .then((data) => data)
}

export async function getAverageInfos(id) {
    return await fetch(`http://localhost:3000/user/${id}/average-sessions`)
        .then((res) => res.json())
        .then((data) => data)
}

export async function getPerformanceInfos(id) {
    return await fetch(`http://localhost:3000/user/${id}/performance`)
        .then((res) => res.json())
        .then((data) => data)
}
