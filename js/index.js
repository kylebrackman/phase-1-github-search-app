document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form")
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault()
        const search = document.getElementById("search").value
        let newName = search.split(' ').join('')
        document.getElementById("github-container").innerText = ""
        fetch("https://api.github.com/users/"+newName)
        .then (res => res.json())
        .then ((data) => {
            console.log(data)
            document.getElementById("github-container").innerHTML = `
                ${data.login}
               <a target = "_blank" href="https://www.github.com/${newName}"><img src = "${data.avatar_url}"/></a>
            `
            form.reset()
        })
    })
})