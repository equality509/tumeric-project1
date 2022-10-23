const API_Key= '4182aac5ee134998aa0b0a50cd07e1f3'

const baseURL=

function handleGetData(city) {
    $.ajax(BASE_URL + `q=${city}&appid=` + API_KEY)
    .then(function(data) {
        console.log('Data: ', data);

        const $city = $('#city')

        $city.empty()
    
        $city.html(`
        <h1>City: ${data.name}</h1>
        `)


        const $temp = $('#temp');

        $temp.empty()

        $temp.html(`
        <h1>Temperature: ${data.main.temp}</h1>
        `)

        const $index = $('#index')

         $index.empty()

        $index.html(`
        <h1>Feels Like: ${data.main.feels_like}</h1>
        `)


        const $desc = $('#desc')

        $desc.empty()

        $desc.html(`
        <h1>Weather: ${data.weather[0].main}</h1>
        `)



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