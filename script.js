const data = await fetch('./data/data.json')
    .then(res => res.json())
    .catch(err => console.log('Cannot read data.'));

let sum = 0;
data.forEach(dataItem => {
    const element = document.querySelector(`.summary__item[data-category="${dataItem.category.toLowerCase()}"]`);

    element.querySelector('.summary__item-score-value').textContent = dataItem.score;
    sum += Number(dataItem.score);
});

document.querySelector('.total-score-value').textContent = (sum / data.length).toFixed(0);
