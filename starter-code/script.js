const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

//start of results
const userName = document.getElementById('user-name');
const userUrl = document.getElementById('user-url');
const joinDate = document.getElementById('joined');

// start of repos
const repos = document.getElementById('repos');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
let img = document.createElement("img");
let avatar = document.querySelector('.git-img')


searchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const url = `https://api.github.com/users/${searchInput.value}`;
    async function getUrl() {
        const response = await fetch(url);
        const data = await response.json();
        const dateFormat = data.created_at.slice(0, data.created_at.length -10);

        img.src = data.avatar_url;
        avatar.appendChild(img);
        avatar.style.border = 'none';


        console.log(img.src)

        console.log(data);

        // inner HTML for data
        userName.innerHTML = data.name;
        userUrl.innerHTML = `@${data.login}`;
        joinDate.innerHTML = `Joined ${dateFormat}`

        // repos, followers, following
        repos.innerHTML = data.public_repos;
        followers.innerHTML = data.followers;
        following.innerHTML = data.following;
    }

    getUrl();
})