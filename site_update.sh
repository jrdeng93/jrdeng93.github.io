
git add .
git commit -m "old"


# Sync with github
# build to github
./bin/deploy      
git push 

#local test
bundle exec jekyll serve

#local install
exec
