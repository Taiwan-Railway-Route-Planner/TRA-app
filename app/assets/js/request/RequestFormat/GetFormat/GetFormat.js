/**
 Created by svend on 08/03/2019.
 **/

module.exports = (function () {

    let fetchRequestForGettingData = function (fetchData) {
        return fetch(fetchData.Url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return {error: true, msg: '', data: response};
                }
            }).then(json => {
                return {error: false, msg: 'ok', data: json};
            }).catch(function (error) {
                console.log('Request failed ', error);
                return {error: true, msg: '', data: error};
            })
    };

    return {
        fetchRequestForGettingData
    }

})();