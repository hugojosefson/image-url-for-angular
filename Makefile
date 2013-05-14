all: build bower.json

build: components index.js
	@component build --dev

components: component.json
	@component install --dev

index.js: components image-url-for-angular.js
	@node components/hugojosefson-uncomponent-wrapper/bin/uncomponent-wrapper image-url-for-angular.js index.js

bower.json: components component.json
	@node components/hugojosefson-update-bower-from-component/bin/update-bower-from-component

clean:
	rm -fr build components index.js

.PHONY: clean components build
