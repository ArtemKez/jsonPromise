function getFruts(path) {
    return fetch(path).then((response) => {
        return response.json();
    }).then((data) => {
        return data
    })
}

getFruts('./fruits.json')
const getDataFruts = async () => {
    try {
        const data = await fetch('./fruits.json');
        return await data.json();
    } catch (e) {
        console.log(e);
        return [];
    }
}

function selectBySize(data, size) {
    return data.filter((fruit) => {
        return fruit.size === size
    })
}

function selectByColor(data, color) {
    return data.filter((fruit) => {
        return fruit.color === color
    })
}

getDataFruts().then(data => {
    console.log(data.map((el) => {
        return el.fruit
    }).join(' '))
    console.log(selectBySize(data, 'Large').map((el) => {
        return el.fruit
    }).join(' '));
    console.log(selectByColor(data, 'Red').map((el) => {
        return el.fruit
    }).join(' '));
})