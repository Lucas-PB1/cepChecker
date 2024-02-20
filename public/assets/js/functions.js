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

/**
 * @param {{tag: string, id: any, classes: string, estilos: string, conteudo: string, value: any, src: string, params: array, download: boolean}} object
 * @return {null|*}
 * Função responsável por criar e retornar um elemento HTML.
 */
function create_element({ tag, id, classes, estilos, conteudo, value, src, params, download = false }) {
    if (!tag) return null;

    const element = document.createElement(tag);

    const attributes = { id, class: classes, style: estilos, value, src, download: download ? "" : undefined };

    Object.entries(attributes).forEach(([key, val]) => val !== undefined ? element.setAttribute(key, val) : '');

    if (conteudo) element.innerHTML = conteudo;
    params && params.forEach(({ key, value }) => element.setAttribute(key, value));

    return element;
}


