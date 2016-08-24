function info (name) {
  return fetch(`https://api.github.com/orgs/${name}`)
    .then((res) => {
      return res.json()
    })
}

function fetchAll (url, isDone, page) {
  const currentPage = page || 1
  const fetchUrl = url + '?page=' + (currentPage)
  return fetch(fetchUrl).then((res) => {
    return isDone(res.clone()).then((done) => {
      if (done) {
        return [res]
      } else {
        return fetchAll(url, isDone, currentPage + 1).then((resArray) => {
          resArray.unshift(res)
          return resArray
        })
      }
    })
  })
}

function repos (name) {
  return fetchAll(`https://api.github.com/orgs/${name}/repos`, (res) => {
    return res.json().then((repos) => {
      return repos.length !== 30
    })
  }).then((responses) => {
    return Promise.all(responses.map((response) => {
      return response.json()
    }))
  }).then((bodies) => {
    return bodies.reduce((memo, body) => {
      return memo.concat(body)
    }, [])
  })
}

export function profileFetcher (name) {
  const infoPromise = info(name)
  const repoPromise = repos(name)
  return Promise.all([infoPromise, repoPromise]).then((data) => {
    const profile = data[0]
    profile.repos = data[1]
    if (profile.message === 'Not Found') {
      throw new Error('Not Found')
    }
    return profile
  })
}
