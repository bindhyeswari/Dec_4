document.addEventListener('DOMContentLoaded', function () {
    var progress = document.getElementsByClassName('progress')[0].firstElementChild;
    var per = 0;

    /*var intervalid = setInterval(function () {
     if (++per === 100) clearInterval(intervalid);
     progress.style.width = per + '%';
     }, 1);*/

    document.getElementById('query').addEventListener('change', function () {
        console.log(this.value);

        // create the url:
        var url = 'https://api.github.com/search/repositories?q=' + this.value + '&sort=stars&sort=desc';

        // make an ajax call
        makeAjaxCall(url, function (response) {
            console.log(response);
        });
        // update the progress
        // show the data on the page

    });

    /**
     * @method makeAJAXCall
     * @param {String} url github url to make an ajax call to
     * @param {Function} callback callback to be invoked once the call is over
     * */
    function makeAjaxCall(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', function (event) {
            if ( xhr.readyState === 4 ) {
                if ( xhr.status === 200 ) {
                    callback(JSON.parse(xhr.responseText));
                } else {
                    console.log(xhr.responseText);
                }
            }
        });
        xhr.open('GET', url);
        xhr.send();
    }


});