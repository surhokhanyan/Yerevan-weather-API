let btn = document.querySelector("#main button");
let input = document.querySelector("#main input")
let text = document.querySelector("#main p");
btn.addEventListener("click", ()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '99260dff62msh5b6d4c254a3cc6bp1adf2djsn6c8ab3f0d3c3',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };

    fetch('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=44.50349&lat=40.1772&units=metric&lang=en', options)
        .then(response => response.json())
        .then(response => text.innerHTML = response.data[0].app_temp + "&#x2103;")
        .catch(err => console.error(err));
    debugger;
})

