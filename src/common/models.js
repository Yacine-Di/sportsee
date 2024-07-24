/**
 *
 * @param {Object} data
 * @returns prénom de l'utilisateur
 */
export function getUserFirstName(data) {
    return data?.data?.userInfos.firstName
}
/**
 *
 * @param {Objet} data données général de l'utilisateur
 * @returns {Object}
 */
export function getUserKeyDatas(data) {
    return data?.data?.keyData
}

/**
 *
 * @param {Object} userKeyDatas
 * @returns
 */
export function getUserDietDatas(data) {
    const formatedData = []

    if (data) {
        for (const [key, value] of Object.entries(data)) {
            let obj = {
                name: key,
                value: value,
                icon: '',
            }
            formatedData.push(obj)
        }
    }

    return formatedData
}

export function getUserSessions(data) {
    return data?.data?.sessions
}

export function getUserDay(sessions) {
    return sessions?.day
}

export function getUserPerfomance(data, kinds) {
    const userPerformanceDatas = data?.data?.data

    const formatedData = userPerformanceDatas
        ? userPerformanceDatas.map((d) => {
              return { value: d.value, kind: kinds[d.kind - 1] }
          })
        : null

    return formatedData
}

export function getUserScore(data) {
    const userScore = data?.data
    return userScore?.todayScore * 100 || userScore?.score * 100
}
