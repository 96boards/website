WEBSITE_REPO=/Users/kyle/Documents/WebDevelopment/Github/96Boards/website/
DOCUMENTATION_REPO=/Users/kyle/Documents/WebDevelopment/Github/96Boards/documentation/
JEKYLL_REPO=/Users/kyle/Documents/WebDevelopment/96boards.org-jekyll/

mkdir TestMerge
cd TestMerge
CP -R $WEBSITE_REPO .
CP -R $DOCUMENTATION_REPO .
CP -R $JEKYLL_REPO .

jekyll serve JEKYLL_ENV=production
