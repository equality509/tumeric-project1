const API_Key= '4182aac5ee134998aa0b0a50cd07e1f3'

const BASE_URL='https://newsapi.org/v2/everything?'

//https://newsapi.org/v2/everything?q=bitcoin&apiKey
// const $city = $('#city')


//selecting and naming my html id
const newsList = $(".city")

//function that requests information from the API
function handleGetData(search) {
    $.ajax(BASE_URL + `q=${search}&apiKey=` + API_Key)
    .then(function(data) {
        console.log('Data: ', data);

        //clearing my search for the next query
        newsList.innerHTML = ''

        data.articles.forEach(article =>{
            //creating a list element
            let li = document.createElement('li');
            //creating an anchor element 
            let a = document.createElement('a');
            //setting my achors link to each individual article
            a.setAttribute('href', article.url );
            //making my anchor tag pop up on a blank page
            a.setAttribute('target', '_blank');
            // setting the anchor links text to the title of the article 
            a.textContent = article.title;
            // appending the anchor element to the list element
            li.append(a);
            // apppending the list element to my querySelector
            newsList.append(li);
            // newsList.empty()
        })


       
        //error handling
    }, function(error) {
        console.log('Error: ', error);
    })
}
//function to handle the submit on my input element
$("input[type=submit]").on("click", (event) => {

    // prevent the refresh
    event.preventDefault()

    // grab text from input box
    const inputText = $("input[type=text]").val()
    
    // update the screen
    handleGetData(inputText)
})



// const ran = Math.floor(Math.random() * 3) + 1
// console.log(ran)
// if (ran === 1) {
//     console.log( 'pic1' )
// } else if ( ran === 2 ) {
//     console.log( 'pic2')
// } else if ( ran === 3) {
//     console.log(' pic 3')}


//     function add (){
//         return 5+6
//     }



    //lines 21 - 27 googled//


     // data.articles.forEach(article =>{
        //     let li = $('<li>list</li>');
        //     let a = $('<a>');
        //     a.setAttribute('href', article.url );
        //     a.setAttribute('target', '_blank');
        //     a.textContent = article.title;
        //     li.appendChild(a);
        //     newsList.appendChild(li);
        //     // newsList.empty()
        // })


        // const $city = $('#city')

        //    newsList.empty()
    
        // newsList.html(`
        // <h1>City: ${}</h1>
        // `)
