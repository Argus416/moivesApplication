function clearForm(){
    $('.searchInput').val(' ');
}

$(function(){
    const apiKey = 'a9408f46';
    let url = 'http://www.omdbapi.com/?&apikey=' + apiKey;

    let searchBytTitle = '&t=';
    // let searchByID = '&i=';
    let form = $('form.search-form');

    let query = url + searchBytTitle;


    $('span.title').click( function(){
        query = url + searchBytTitle;
        clearForm();
    })

    // $('span.id').click( function(){
    //     query = url + searchByID;
    //     $('.searchInput').val(' ');
    //     clearForm();
    // })

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
                        <p class="card-text">${data.Plot.slice(0,100)}</p>
                    </div>
                </div>
                `
                // console.log(data);

                $('.cards-parent').html(template);
            })
            
            e.target.searchInput.value = '';
        }
    })
})




    