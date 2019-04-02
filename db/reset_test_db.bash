#!/bin/sh
$(> ./db/test.sqlite)
#cat ./db/migrate.sql | sqlite3 ./db/test.sqlite
< ./db/migrate.sql sqlite3 ./db/test.sqlite
