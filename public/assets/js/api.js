
async function getData(element) {
    const cep = element.value.replace(/\D/g, '');
    if (cep.length !== 8) return;

    let data = await myFetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (data && !data.erro) {
        const { logradouro, complemento, bairro, localidade } = data;

        document.querySelector('.cep_').innerHTML = cep;
        document.querySelector('.bairro').innerHTML = bairro;
        document.querySelector('.localidade').innerHTML = localidade;
        document.querySelector('.logradouro').innerHTML = logradouro;
        document.querySelector('.complemento').innerHTML = complemento;

        initMap(cep);

        toastr.success('CEP Carregado com sucesso!', 'Sucesso!');
    } else {
        toastr.warning('CEP não encontrado ou erro na busca.', 'Erro!');
    }
}


function initMap(cep) {
    const map = new google.maps.Map(document.getElementById("map"), { zoom: 15, center: { lat: -23.563987, lng: -46.654321 } });

    if (cep) {
        const geocoder = new google.maps.Geocoder();
        geocodeAddress(cep, geocoder, map);
    }
}

function geocodeAddress(cep, geocoder, resultMap) {
    geocoder.geocode({ 'address': cep }, function (results, status) {

        if (status === 'OK') {
            const location = results[0].geometry.location;
            resultMap.setCenter(location);
            new google.maps.Marker({ map: resultMap, position: location });

            const latitude = location.lat();
            const longitude = location.lng();

            getWeather(latitude, longitude);
        } else {
            // alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

async function getWeather(latitude, longitude) {
    let data = await myFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=21fca75a77ef0def83f0929060a037db&units=metric&lang=pt_br`);

    if (data) {
        document.querySelector('.local').innerHTML = data.name;
        document.querySelector('.temperatura').innerHTML = data.main.temp;
        document.querySelector('.desc').innerHTML = data.weather[0].description;
        document.querySelector('.umidade').innerHTML = data.main.humidity;
        document.querySelector('.vento').innerHTML = data.wind.speed;
    }
}
