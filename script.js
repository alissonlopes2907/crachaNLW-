//Colocar os links das redes sociais pelo JavaScript

const linksSocialMedia = {
  github: 'alissonlopes2907',
  youtube: 'channel/UCKUxjgNntyYNYkoa0klLuIQ',
  facebook: 'alisson.lopes.77770194/',
  instagram: 'alissonlopes.s',
  twitter: 'Alisson82605114'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]} `
  }
}

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let name = document.getElementById('userName')
      name.innerHTML = data.name

      userBio.textContent = data.bio

      linkName.href = data.html_url

      userImage.src = data.avatar_url

      loginName.textContent = data.login
    })
}

getGithubProfileInfos()
