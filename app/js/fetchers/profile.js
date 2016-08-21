function info (name) {
  return fetch(`https://api.github.com/users/${name}`)
    .then((res) => {
      return res.json()
    })
}

function repos (name) {
  return fetch(`https://api.github.com/users/${name}/repos`)
    .then((res) => {
      return res.json()
    })
}

export function profileFetcher (name) {
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
