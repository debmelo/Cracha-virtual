const linksSocialMedia = {
  github: 'debmelo',
  youtube: 'deboramelo',
  facebook: 'deboramelo',
  instagram: 'Zeburadebora',
  twitter: 'deboramelo'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  //o fetch não sabe que essa url é um joson
  fetch(url)
    //Arrow functions - função anonima - vai trasnformar a url em json.
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    userTitle.textContent = `Badge- ${data.name}`


    })
}

getGitHubProfileInfos()
