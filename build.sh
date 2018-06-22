WEBSITE_REPO=/home/USER/Websites/96boards.org/website/
DOCUMENTATION_REPO=/home/USER/Websites/96boards.org/documentation/

sync ()
{
    rsync -av --exclude='.git' --exclude='.DS_STORE' --exclude '.gitignore' $DOCUMENTATION_REPO ./_documentation
}

if [ -d $WEBSITE_REPO ]; then
  cd $WEBSITE_REPO
  if [ -d "_documentation" ]; then
      sync
  else
      mkdir _documentation
      sync
  fi
else
    echo "The webstie repository path is incorrect."
fi
