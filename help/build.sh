WEBSITE_REPO=/Users/shovan/Documents/WebDevelopment/Github/96Boards/website/
DOCUMENTATION_REPO=/Users/shovan/Documents/WebDevelopment/Github/96Boards/documentation/
JEKYLL_REPO=/Users/shovan/Documents/WebDevelopment/TestMerge/

cd $JEKYLL_REPO
CP -R $WEBSITE_REPO .
mkdir _documentation
cd _documentation
CP -R $DOCUMENTATION_REPO .
cd ..

rvm use 2.4.1
gem install bundler
bundle install

jekyll serve JEKYLL_ENV=production
