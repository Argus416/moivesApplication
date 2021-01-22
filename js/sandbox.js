// * Configuration URl

// const apiKey = '47f1cb1ea65732a98522c9f7f4f7ce43';
// const accessToken = '97bf57a741a64b05b723081c83e331b0baa92454';
// const configuURL = 'https://api.themoviedb.org/3/configuration?api_key=' + apiKey;

// const externalID = 'IMDb ID'
// const find = `https://api.themoviedb.org/3/find/${externalID}?api_key=${apiKey}&language=en-US&external_source=imdb_id`

function clearForm(){
    $('.searchInput').val(' ');
}

$(function(){
    const apiKey = 'a9408f46';
    let url = 'http://www.omdbapi.com/?&apikey=' + apiKey;

    let searchBytTitle = '&t=';
    let searchByID = '&i=';
    let form = $('form.search-form');

    let query = url + searchBytTitle;


    $('span.title').click( function(){
        query = url + searchBytTitle;
        clearForm();
    })

    $('span.id').click( function(){
        query = url + searchByID;
        $('.searchInput').val(' ');
        clearForm();
    })



    form.submit(e =>{
        e.preventDefault();
        let inputValue = e.target.searchInput.value.split(' ').join('+').toLowerCase();
        if(inputValue.length){
            let modifiedUrl = query + inputValue;

            $.get(modifiedUrl, data=>{
                const template = `

                <div class="card col-lg-3 col-md-4 mt-3" >
                    <img src="${data.Poster}" class="card-img-top" >
                    <div class="card-body">
                        <h5 class="card-title">${data.Title}</h5>
                        <p class="card-text">${data.Plot.slice(0,132)}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                `
                console.log(data);

                $('.cards-parent').append(template);
            })
            
            e.target.searchInput.value = '';
        }
    })

    const test = 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.';
    console.log(test.length);
})




    