#!/bin/bash

node createDates.js > list.tmp

while read d  ; do
	echo "$d" > rnd.txt
	git add rnd.txt
	git commit -m "$d"
	GIT_COMMITTER_DATE="$d" git commit --amend --no-edit --date "$d"
done <./list.tmp
