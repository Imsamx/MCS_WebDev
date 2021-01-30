const APIKey = 'e57a90d9738cdfe74372c799a11df97a';
const city = 'Miami';
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();

if(xhr.status !=200) {
    console.log(xhr.status + ' '+ xhr.statusText);
} else {
    let DATA = JSON.parse(xhr.responseText);
    console.log(DATA);
    document.write(DATA.main.temp - 273);
}