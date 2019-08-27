// Fill in the functions for your Renderer Class

class Renderer {

    _renderUsers(users) {
        const source = $(".user-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template(users)
        $(".user-container").empty()
        $(".user-container").append(newHtml)
    }

    _renderFriends(users) {
        const source = $(".friends-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({users})
        $(".friends").empty()
        $(".friends").append(newHtml)
    }


    _renderQuote(quote) {
        const source = $(".quote-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({quote})
        $(".quote-container").empty()
        $(".quote-container").append(newHtml)
    }


    _renderPokemon(pokemon) {
        const source = $(".pokemon-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template(pokemon)
        $(".pokemon-container").empty()
        $(".pokemon-container").append(newHtml)
    }


    _renderMeat(meat) {
        const source = $(".meat-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({meat})
        $(".meat-text").empty()
        $(".meat-text").append(newHtml)
    }


    render(data) {
        this._renderUsers(data.users[0])
        this._renderMeat(data.meat)
        this._renderPokemon(data.pokemon)
        this._renderQuote(data.quote)
        this._renderFriends(data.users.splice(1))
        //invokes all the individual _render methods
    }
}


