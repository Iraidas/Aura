export const server = (done) => {
    app.plugins.browsersync.init({
        server: { 
            baseDir: `${app.path.build.html}`
        },
        notify: false,
        online: true,
        port: 3000
    })
}