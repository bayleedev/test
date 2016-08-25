export function transformRepos (repos) {
  return Object.assign([], repos).map((repo) => {
    return Object.assign({}, repo, {
      pushed_at: new Date(repo.pushed_at)
    })
  }).sort((a, b) => {
    if (a.stargazers_count > b.stargazers_count) return -1
    if (a.stargazers_count < b.stargazers_count) return 1
    if (a.pushed_at > b.pushed_at) return -1
    if (a.pushed_at < b.pushed_at) return 1
    return 0
  })
}
