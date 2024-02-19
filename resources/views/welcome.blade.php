<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <x-layout.partials.metatags />
    <x-layout.partials.styles />
    <title>{{ config('app.name', 'Buscador de CEP') }}</title>
    <x-layout.partials.scripts />
</head>

<body class="bg-dark">
    <x-layout.header />

    <div class="d-flex justify-content-center align-items-center" style="min-height: 100vh;">
        <div class="item-centralizado text-center">
            <div class="mb-3 text-light">
                <label for="cep" class="form-label">CEP</label>
                <input type="text" class="form-control cep" id="cep" name="cep" placeholder="00000-000">
            </div>

            <div class="card mt-4">
                <div class="card-header">
                    Informações de CEP
                </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">CEP: <span class="cep_"> </span></li>
                    <li class="list-group-item">Bairro: <span class="bairro"> </span></li>
                    <li class="list-group-item">Localidade <span class="localidade"> </span></li>
                    <li class="list-group-item">Logradouro <span class="logradouro"> </span></li>
                    <li class="list-group-item">Complemento <span class="complemento"> </span></li>
                </ul>
            </div>

            <div id="map" class="mt-4" style="height: 400px; width: 800px;"></div>
        </div>
    </div>

    <x-layout.footer />
</body>

</html>
