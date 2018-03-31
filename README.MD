The is a simplistic responsive front end web design using FlexBox and basic JS event listeners and key bindings.

A quick way to test it is to use browswer-sync after installing NodeJS and NPM, cloning this repo, and cd'ing to the clone. 

```
curl -sL https://deb.nodesource.com/setup | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g browser-sync

browser-sync start --server --browser "Google Chrome" --files "stylesheets/*.css *.html scripts/*.js"
```
This simple example is designed to be both desktop and mobile friendly (style changes when the width crosses the 768px boundary), and it uses vanilla JS to attach mouse click listeners. When the ESC key is pressed it will hide the the main detail image, until a thumbnail is clicked. It also demonstrates simple hover and click animation.
