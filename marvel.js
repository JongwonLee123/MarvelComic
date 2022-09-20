var api_key = 'd1b8847e1bd4d1577672bde6dada183a';
var hash = '5705bcc6fe08a913eb8ad60226cba7b3';
var ts = '1';
var test = 0;
var num = [];
var check = false;
var title = [];
var img = [];
var link = [];

var hulkUrl = 'https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&title=hulk&ts=' + ts + '&apikey=' + api_key + '&hash=' + hash;
var ironUrl = 'https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&title=iron%20man&ts=' + ts + '&apikey=' + api_key + '&hash=' + hash;
var strangeUrl = 'https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&title=doctor%20strange&ts=' + ts + '&apikey=' + api_key + '&hash=' + hash;
var spiderUrl = 'https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&title=spider-man&ts=' + ts + '&apikey=' + api_key + '&hash=' + hash;

function myFunction(event) {
    var x = event.target.id;
    switch(x) {
        case 'hulk':
            getHulk(x);
            break;
        case 'spider':
            getSpider(x);
            break;
        case 'strange':
            getStrange(x);
            break;
        case 'iron':
            getIron(x);
            break;
        default:
            return false;
    }
}

var parent = document.getElementById('buttons');
parent.addEventListener('click', myFunction);

async function getHulk() {
    resetValues();
    API(hulkUrl);
}

async function getIron() {
    resetValues();
    API(ironUrl);
}

async function getSpider() {
    resetValues();
    API(spiderUrl);
}

async function getStrange() {
    resetValues();
    API(strangeUrl);
}

function API(url) {
    // var url = 'https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&title=hulk&ts=1&apikey=d1b8847e1bd4d1577672bde6dada183a&hash=5705bcc6fe08a913eb8ad60226cba7b3';
    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function(data) {
            while(num.length < 6){
                var number = Math.round(Math.random() * data.data.count);
                if(num.includes(number)){
                    console.log(num);
                }
                else{
                    num[test] = number;
                    title[test] = data.data.results[number].title;
                    img[test] = data.data.results[number].images[0].path+'.jpg';//add .jpg to end of all
                    link[test] = data.data.results[number].urls[0].url;
                    test += 1;
                }
            }
            console.log(num);
            console.log(title);
            console.log(img);
            console.log(link);
            let comic1 = document.querySelector('.title');
            comic1.innerHTML = title[0];
            let image1 = document.querySelector('.image');
            image1.innerHTML = `<a href="`+ link[0] +`"><img src="`+ img[0] +`"></a>`;
            let comic2 = document.querySelector('.title_2');
            comic2.innerHTML = title[1];
            let image2 = document.querySelector('.image_2');
            image2.innerHTML = `<a href="`+ link[1] +`"><img src="`+ img[1] +`"></a>`;
            let comic3 = document.querySelector('.title_3');
            comic3.innerHTML = title[2];
            let image3 = document.querySelector('.image_3');
            image3.innerHTML = `<a href="`+ link[2] +`"><img src="`+ img[2] +`"></a>`;
            let comic4 = document.querySelector('.title_4');
            comic4.innerHTML = title[3];
            let image4 = document.querySelector('.image_4');
            image4.innerHTML = `<a href="`+ link[3] +`"><img src="`+ img[3] +`"></a>`;
            let comic5 = document.querySelector('.title_5');
            comic5.innerHTML = title[4];
            let image5 = document.querySelector('.image_5');
            image5.innerHTML = `<a href="`+ link[4] +`"><img src="`+ img[4] +`"></a>`;
            let comic6 = document.querySelector('.title_6');
            comic6.innerHTML = title[5];
            let image6 = document.querySelector('.image_6');
            image6.innerHTML = `<a href="`+ link[5] +`"><img src="`+ img[5] +`"></a>`;
        })
        .catch(function (error) {
            console.error(error);
        });
}

function resetValues(){
    test = 0;
    num = [];
    check = false;
    title = [];
    img = [];
    link = [];
}