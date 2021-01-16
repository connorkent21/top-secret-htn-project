.PHONY: dbinit
dbinit:
	docker run -d -p 8000:8000 amazon/dynamodb-local && dynamodb-admin

.PHONY: dbpopulate
dbpopulate:
	cd ./server/config/sample && node createSampleData.js

.PHONY: dbclient
dbclient:
	dynamodb-admin

.PHONY: create-tables
create-tables:
	cd ./server/config/tables && node createTables.js

.PHONY: run
run: 
	npm run server

.PHONY: copy-s3
copy-s3:
	aws s3 sync s3://vs-tech s3://vs-tech-dev