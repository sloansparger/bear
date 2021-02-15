#!/bin/bash

sed "s#<date>#$( date +"%Y/%m/%d")#" $( cd "$(dirname "$0")" ; pwd -P )/templates/journaling.md | bear create