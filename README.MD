The is a simplistic responsive front end web design using FlexBox and basic JS event listeners and key bindings.

A quick way to test it is to use browswer-start after installing NodeJS and NPM, cloning this repo, and cd'ing to the clone. 

```
curl -sL https://deb.nodesource.com/setup | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g browser-sync

browser-sync start --server --browser "Google Chrome" --files "stylesheets/*.css *.html scripts/*.js"
```
