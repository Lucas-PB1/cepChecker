## Sobre o sistema

Este Sistema tem por fim buscar dados sobre o CEP pesquisado, foram usadas as seguintes tecnologias:

- [Laravel](https://laravel.com/docs/8.x).
- [Node.js](https://nodejs.org/en/).
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS).
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML).
- [LESS](https://lesscss.org/).
- [Composer](https://getcomposer.org/).
- [PHP](https://www.php.net/).
- [Mysql](https://www.mysql.com/).
- [Viacep](https://viacep.com.br/).
- [Google Cloud](https://cloud.google.com).
- [Luge](https://luge.cool).
- [OpenWeather](openweathermap.org).
- [Bootstrap 5](https://getbootstrap.com).
- [Imask](https://imask.js.org)
- [Toastr](https://github.com/CodeSeven/toastr)

## Como configurar e rodar

Primeiro é necessario ter a instalação de uma ambiente docker ou de seus serviços de maneira individualizada, sendo esses o PHP 8.0 ou acima, Composer e Node.js para instalar as dependências.

### Passo 1 - Clonando o repositorio

Realize o clone deste repositorio via [GIT](https://git-scm.com) usando no seu cmd o seguinte comando:

**git clone [https://github.com/Lucas-PB1/Desafio-Estoque.git](https://github.com/Lucas-PB1/cepChecker.git)**

### Passo 2 - [NPM](https://nodejs.org/en) e (Composer)[https://getcomposer.org)

Supondo que você tenha as ferramentas citadas acima instaladas e esteja em um ambiente que interpreta PHP, execute:

 **composer install**

 Através ele pegará todos os pacotes PHP necessarios.

 **npm install**

 Ao fim do comando todos os pacotes JS necessarios estaram instalados na sua maquina.

**npm run:buid**

E por último compile todos os arquivos necessários através do VITE.

### Passo 2 - Arquivo .env

1 - Em seguida copie o arquivo .env.example e preencha os dados de seus banco.

2 - Ja no console execute php artisan key:generate, para gerar sua chave própria.

3 - Navegue até: resources/views/components/layout/partials/scripts.blade.php e insira no lugar (SUA_CHAVE_API) a chave referente do Google Cloud.

4 - Navegue até: public/assets/js/api.js e insira no lugar (SUA_CHAVE_API) a chave referente do OpenWeather.

### Passo 3 - Exibição do projeto

Caso seu ambiente não seja docker basta rodar: 

**php artisan serve**

E acessar o endereço http://127.0.0.1:8000 onde o projeto estará.

Caso seja Docker, sua configuração seja ela Apache ou Nginx se torna suficiente para está aplicação.

## Observações

1 - Lembre que para executar o processos acima é necessario ter as ferramentas citadas instaladas, qualquer falta de uma delas resultará num mal funcionamento do projeto.

2 - As Chaves de Respectivas APIS podem ser conseguidas em suas devidas referências.

3 - Lembre de ativar Geocoding API e Maps JavaScript API no [Google Cloud](https://cloud.google.com).
