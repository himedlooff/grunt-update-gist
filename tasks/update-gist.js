module.exports = function(grunt) {
    'use strict';

    var request = require('request');

    grunt.registerMultiTask('update-gist', '...', function() {

        var done = this.async();
        var options = this.options({});
        var requestOptions = {
                mathod: 'PATCH',
                url: '',
                headers: {
                    'User-Agent': 'request'
                },
                body: JSON.stringify({
                    files: {
                        'cf-buttons-default.html': {
                            content: '<br>'
                        }
                    }
                })
            };

        if (options.githubApi && options.gistId) {
            requestOptions.url = options.githubApi + options.gistId;
            grunt.log.writeln('Requesting',requestOptions.url);
            request(
                requestOptions,
                function (error, response, body) {
                    requestCallback(error, response, body);
                    done();
                }
            );
        } else {
            grunt.log.error('Both api and id are required.');
        }

    });

    function requestCallback(error, response, body) {
        if (!error && response.statusCode === 200) {
            var info = JSON.parse(body);
            var content = info.files['cf-buttons-default.html'].content;
        }
    }

};
