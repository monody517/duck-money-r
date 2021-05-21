#!/usr/bin/env bash


yarn build &&
cd build &&
git init &&
git add . &&
git commit -m '部署' &&
git remote add origin git@github.com:monody517/duck-money-r-web.git &&
git push -u origin master -f &&
cd ..