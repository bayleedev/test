function info (name) {
  return fetch(`https://api.github.com/users/${name}`)
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

function events (name) {
  return fetch(`https://api.github.com/users/${name}/events`)
    .then((res) => {
      return res.json()
    })
}

function repos (name) {
  return fetchAll(`https://api.github.com/users/${name}/repos`, (res) => {
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
  const eventPromises = repos(name).then((respos) => {
    debugger
  })
  return Promise.resolve({
    login: 'blainesch',
    repos: [
      { id: 1, name: 'zazu', description: 'Well it works' },
      { id: 2, name: 'pry.js', description: 'Debugger for node' },
      { id: 3, name: 'alfred-chrome-bookmarks', description: 'meow' },
    ],
  })
  const infoPromise = info(name)
  const repoPromise = repos(name)
  return Promise.all([infoPromise, repoPromise]).then((data) => {
    const profile = data[0]
    profile.repos = data[1]
    return profile
  })
}
