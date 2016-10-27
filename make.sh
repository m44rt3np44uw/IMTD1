ng build --prod --output-path="docs" --base-href="./"
cp src/CNAME docs/
cp src/null docs/
git add docs/*
git commit -m "Build: `date`"
