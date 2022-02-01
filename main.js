let movieArray = [];
let selectedType = "";
let movieYear = 0;

// define a constructor to create note objects
let movieObject = function (pData, pType, pYear) {
    this.data = pData;
    this.type = pType;
    this.year = pYear;
}



document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAdd").addEventListener("click", function () {
        let movieNmae = document.getElementById("movie").value;
        let myMovieObj = new movieObject(movieNmae, selectedType,movieYear);
        movieArray.push(myMovieObj);
        console.log(movieArray);
        document.getElementById("movie").value = "";
        document.getElementById("year").value = "";
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });
    $(document).bind("change", "#year", function (event, ui) {
        movieYear = document.getElementById("year").value;
    });

    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#list", function (event) {   
        createList();
    });
    

});



function createList() {
    
    // clear prior data


    var myul = document.getElementById("myList");
    myul.innerHTML = '';

    movieArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML = element.data + ":  " + element.type + "  (" +element.year+")";
        myul.appendChild(li);
    });
};

