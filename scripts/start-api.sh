yarn

if [ $NODE_ENV == "development" ]; then
    yarn develop
else
    yarn serve
fi