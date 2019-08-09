/**
 Created by svend on 9/08/2019.
 **/

module.exports = (function () {

    let fetchRequestForGettingData = function (fetchData) {
        return fetch(fetchData.getSpecifiedElement ? fetchData.Url + fetchData.specifiedElement : fetchData.Url, {
            method: fetchData.method,
            body: JSON.stringify(fetchData.body)
        }).then(response => {
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
