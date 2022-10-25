const API_Key= '4182aac5ee134998aa0b0a50cd07e1f3'

const BASE_URL='https://newsapi.org/v2/everything?'

//https://newsapi.org/v2/everything?q=bitcoin&apiKey


// const $city = $('#city')

const newsList = document.querySelector('#city')
newsList.innerHTML = ''



function handleGetData(search) {
    $.ajax(BASE_URL + `q=${search}&apiKey=` + API_Key)
    .then(function(data) {
        console.log('Data: ', data);


        data.articles.forEach(article =>{
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url );
            a.setAttribute('target', '_blank');
            a.textContent = article.title;
            li.appendChild(a);
            newsList.appendChild(li);
            // newsList.empty()
        })
        // const $city = $('#city')

        //    newsList.empty()
    
        // newsList.html(`
        // <h1>City: ${}</h1>
        // `)


        // const $temp = $('#temp');

        // $temp.empty()

        // $temp.html(`
        // <h1>Temperature: ${data.main.temp}</h1>
        // `)

       


    



    }, function(error) {
        console.log('Error: ', error);
    })


}

$("input[type=submit]").on("click", (event) => {

    // prevent the refresh
    event.preventDefault()

    // grab text from input box
    const inputText = $("input[type=text]").val()
    
    // update the screen
    handleGetData(inputText)
})