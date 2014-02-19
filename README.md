# Update-Gist

A Grunt task for updating gists.

---

:warning: This is currently only a sketch

---

## Dev resources

- [Githup API Docs](https://developer.github.com/v3/gists/#edit-a-gist)
- [Test gist](https://gist.github.com/himedlooff/9085496)
- [Example API call on the test gist](https://api.github.com/gists/9085496)
- [Authentication - Github API docs](https://developer.github.com/v3/auth/)
- [Example OAuth request using the Request module](https://github.com/mikeal/request#oauth-signing)

## Getting started

1. Add this module to your `package.json` file.
2. Add this task to your `Gruntfile.js` file.

        grunt.loadNpmTasks('update-gist');

3. Add and edit options for this task in you `Gruntfile.js` file.

        'update-gist': {
          docs: {
            options: {
              githubApi: 'https://api.github.com/gists/',
              gistId: '9085496'
            }
          }
        }
