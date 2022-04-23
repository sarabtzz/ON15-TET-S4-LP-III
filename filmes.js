let data = [
    {titulo: "Us", genero: "terror", ano: "2019", },

    {titulo: "Transformers: O Lado Oculto da Lua", genero: ["ação", "sci-fi"], ano: "2011",},

    {titulo: "Moonfall - ameaça lunar", genero: ['Aventura', "sci-fi"], ano: "2022",},

    {titulo: "Casa gucci", genero: "drama", ano: "2021",},

    {titulo: "encanto", genero: ["animação", "musical"], ano: "2021",},

    {titulo: "Demon Slayer - Mugen Train", genero: ["ação", "fantasia"],ano: "2019", },

    {titulo: "O Último Suspiro", genero: ["drama", "sci-fi"], ano: "2019",},

    {titulo: "Suspiria", genero: "terror", ano: "1977",},

    {titulo: "Corpo Elétrico", genero: ["drama", "ficção"], ano: "2017",},

    {titulo: "Amour", genero: ["drama", "romance"], ano: "2012",},

    {titulo: "Ninho de Musaranho", genero: "terror", ano: "2014",},

    {titulo: "Colonia",genero: "suspense", ano: "2015",},

    {titulo: "Homem-Aranha: Sem Volta para Casa",genero: ["ação", "aventura"], ano: "2021",}]
  
    let cliente1 = "Suspense";
    let cliente2 = "Corpo Elétrico"
    let cliente3 = "Homem-Aranha: Sem Volta para Casa"
    let cliente4 = "sci-fi" 
    let cliente5 = "romance"

    function buscarPorTitulo(entrada) {
        let filmeEncontrado = []
        entrada = entrada.toLowerCase()
        data.forEach(filme => {
            let titulo = filme.titulo.toLowerCase()
            if (titulo.includes (entrada)) {
            filmeEncontrado.push(filme)
    }
})
return filmeEncontrado
    }

    function buscarPorGenero(entrada) {
        let listaPorGenero = [];
        entrada = entrada.toLowerCase();
    
        data.forEach(filme => {
        entrada.toLowerCase();

    if (typeof(filme.genero) == "string") {
    let filmeEncontrado = (filme.genero).toLowerCase().includes(entrada);
          !!filmeEncontrado ? listaPorGenero.push(filme) : null
    
          } else {
          let filmeEncontradoArray = filme.genero.find(genero => genero.toLowerCase().includes(entrada));
          filmeEncontradoArray != undefined ? listaPorGenero.push(filme) : null
    
          }
    
        });
        return listaPorGenero
    
    }

    function buscarFilmes(entrada) {
        if (typeof(entrada) == "string") {
            let porTitulo = buscarPorTitulo(entrada)
            let porGenero = buscarPorGenero(entrada)
            if(porTitulo.length > 0 && porGenero.length > 0) {
                console.table("-------Encontrados por título-------")
                console.table(porTitulo)
                console.table("------------------------------------")
                console.table("-------Encontrados por gênero-------")
                console.table(porGenero)
                console.table("------------------------------------")
        } else if (porTitulo.length > 0) {
            console.table("-------Encontrados por título-------")
            console.table(porTitulo)
            console.table("-------------------------------------")
        } else if (porGenero.length > 0) {
            console.table("-------Encontrados por gênero-------")
            console.table(porGenero)
            console.table("------------------------------------")
        }else {
            console.table("Nenhum filme ou dado foi encontrado")
        }

    } else {
        console.log('dado inválido')
        }
    }

buscarFilmes("suspense")
