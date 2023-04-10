let counter = 0;

function getData() {
    let data = document.getElementById('searchText').value;
    console.log('Fetching Data-' + counter++ + "-" + data);
}

let timer;
function perfpromDebouncing() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        getData()
    }, 300)
}