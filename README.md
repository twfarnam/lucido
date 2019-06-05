# lucido

Deploy to `gh-pages` branch:

```
git subtree split --prefix docs -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
```


Upload the serverless function to AWS:

```
cd serverless
zip -r ../lucido.zip .
aws lambda update-function-code --function-name arn:aws:lambda:us-east-1:832102994715:function:lucido --zip-file fileb://../lucido.zip
```

