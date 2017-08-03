WEBSITE_REPO=/Users/$USER/Documents/WebDevelopment/Github/96Boards/website/
DOCUMENTATION_REPO=/Users/$USER/Documents/WebDevelopment/Github/96Boards/documentation/
JEKYLL_REPO=/Users/$USER/Documents/WebDevelopment/96boards-jekyll/

sync ()
{
    rsync -av --exclude='.git' --exclude='.DS_STORE' $DOCUMENTATION_REPO ./_documentation
    rsync -av --exclude='.git' --exclude='.DS_STORE' $WEBSITE_REPO .
}

if [ -d $JEKYLL_REPO ]; then
  cd $JEKYLL_REPO
  if [ -d "_documentation" ]; then
      sync
  else
      mkdir _documentation
      sync
  fi
else
    echo "Jekyll Repo path is incorrect!"
fi
