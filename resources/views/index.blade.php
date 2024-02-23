<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <x-layout.partials.metatags />
    <x-layout.partials.styles />
    <title>{{ config('app.name', 'Buscador de CEP') }}</title>
    <x-layout.partials.scripts />
</head>

<body class="bg-custom">
    <x-layout.header />

    <div class="d-flex justify-content-center align-items-center" style="min-height: 100vh;">
        <div class="item-centralizado text-center" data-lg-reveal="fade">

            <div class="mb-3 text-light">
                <label for="cep" class="h1 form-label">Busque seu CEP</label>
                <input type="text" class="form-control cep text-center" id="cep" name="cep" placeholder="00000-000">
            </div>

            <div class="card mt-4" data-lg-reveal="fade">
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

            <div class="d-flex mt-4" style="height: 400px; width: 800px">
                <div id="map" class="h-100 w-50" data-lg-reveal="fade"></div>

                <div id="weather" class="text-light d-flex flex-column justify-content-center h-100 w-50" data-lg-reveal="fade">
                    <div class="card mx-2 h-100">
                        <div class="card-body d-flex flex-column justify-content-center">
                            <h5 class="card-title">Informações de Clima</h5>

                            <h6 class="h1 card-subtitle mb-2 text-muted">
                                <span class="temperatura">0</span> °C
                            </h6>

                            <p class="card-text">
                                Tempo em
                                <span class="local"></span>
                            </p>

                            <p class="card-text">
                                <strong>Descrição: </strong>
                                <span class="desc"></span>
                            </p>

                            <p class="card-text">
                                <strong>Umidade: </strong>
                                <span class="umidade"></span>%
                            </p>

                            <p class="card-text">
                                <strong>Vento: </strong>
                                <span class="vento"></span> m/s
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <x-layout.footer />
</body>

</html>
