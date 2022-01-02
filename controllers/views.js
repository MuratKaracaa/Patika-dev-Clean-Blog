export const homePage = (request, response) => {
    return response.render('index')
}

export const aboutPage = (request, response) => {
    return response.render('about')
}

export const addPostPage = (request, response) => {
    return response.render('add_post')
}
