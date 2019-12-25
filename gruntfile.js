module.exports = function (grunt) {
    require("time-grunt")(grunt);
    require("jit-grunt")(grunt, {
        useminPrepare: "grunt-usemin"
    });

    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: "src/scss/",
                    src: ["*.scss"],
                    dest: "src/css",
                    ext: ".css"
                }]
            }
        },
        watch: {
            scripts: {
                files: [
                    "src/scss/*.scss",
                ],
                tasks: [
                    "css",
                ],
                options: {
                    spawn: false
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {  // browser files
                    src: [
                        "index.html",
                        "src/css/*.*",
                        "src/scss/*.*",
                        "src/_includes/*.html",
                        "src/js/*.js",
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./" // Directorio base dónde corre el servidor
                    }
                }
            }
        }

    });

    // Register Tasks
    grunt.registerTask("css", ["sass"]);
    grunt.registerTask("default", ["browserSync", "watch"]);
};