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
const img = document.createElement('img');
const avatar = document.querySelector('img')


searchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const url = `https://api.github.com/users/${searchInput.value}`;
    async function getUrl() {
        const response = await fetch(url);
        const data = await response.json();

        avatar.innerHTML = data.avatar_url;

        console.log(data);

        // inner HTML for data
        userName.innerHTML = data.name;
        userUrl.innerHTML = `@${data.login}`;
    }

    getUrl();
})