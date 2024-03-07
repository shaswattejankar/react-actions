# React App with CI CD 

On every PUSH, a workflow file is triggered which calls a reusable workflow which: builds with npm and syncs the build folder to s3 bucket where the index.html is hosted
