async function myFetch(url, type = 'GET', data = null) {
    try {
        let response;
        if (type.toUpperCase() === 'GET') {
            response = await fetch(url);
        } else {
            response = await fetch(url, {
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json, text-plain, */*",
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content')
                },
                method: type,
                body: data ? JSON.stringify(data) : '',
            });
        }

        let result = await response.json();

        return result;
    } catch (err) {
        console.log(`Erro: ${err.message}\nRequisição: ${url}\nData: ${data ? data : 'Sem Dados enviados'}\nTipo: ${type}`);
    }

}


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
            resultMap.setCenter(results[0].geometry.location);
            new google.maps.Marker({ map: resultMap, position: results[0].geometry.location });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
