let counter = 0;
function getData() {
    let data = document.getElementById('searchText').value;
    console.log('Fetching Data-' + counter++ + "-" + data);
}

/* performDebouncing creates a clausure which include timer
    timer is a  kind of env global variable to function 
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData()
        }, 300)
    }
    which is being returned from the below function and assign to doBeterFunction 
*/
function performDebouncing() {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData()
        }, 300)
    }
}

let doBeterFunction = performDebouncing();