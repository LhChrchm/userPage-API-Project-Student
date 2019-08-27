// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(users) {
        const source = $(".user-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({})
        $(".").append(newHtml)
    }

    _renderFriends(users) {
        const source = $(".friends-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({})
        $(".").append(newHtml)
    }


_renderQuote(quoteInfo) {
    const source = $(".quote-template").html()
    const template = Handlebars.compile(source)
    const newHtml = template({})
    $(".").append(newHtml)
}


_renderPokemon(pokemonInfo) {
    const source = $(".pokemon-template").html()
    const template = Handlebars.compile(source)
    const newHtml = template({})
    $(".").append(newHtml)
}
    

_renderMeat(meatText) {
    const source = $(".meat-template").html()
    const template = Handlebars.compile(source)
    const newHtml = template({})
    $(".").append(newHtml)
}
    

render(data){
    //invokes all the individual _render methods
}
}

