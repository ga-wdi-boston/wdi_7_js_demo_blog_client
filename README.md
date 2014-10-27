
Install Yeoman: `npm install -g yo`
Install WebApp Scaffolding: `npm install -g generator-webapp`

http://yeoman.io/assets/img/workflow.19bc.jpg

http://yeoman.io/learning/deployment.html
http://www.sitepoint.com/deploying-yeomanangular-app-heroku/

```
# Scaffold a new application.
$ yo webapp

# Search Bower's registry for the plug-in we want.
$ bower search jquery-pjax

# Install it and save it to bower.json
$ bower install jquery-pjax --save

# If you're using RequireJS...
# (be aware that currently the webapp generator does not include RequireJS and the following command only applies to generators that do)
$ grunt bower
# Injects your Bower dependencies into your RequireJS configuration.

# If you're not using RequireJS...
$ grunt wiredep
# Injects your dependencies into your index.html file.

# Preview an app you have generated (with Livereload).
$ grunt serve

# Run the unit tests for an app.
$ grunt test

# Build an optimized, production-ready version of your app.
$ grunt
```
