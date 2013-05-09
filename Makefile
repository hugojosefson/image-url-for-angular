build: components index.js
	@component build --dev

components: component.json
	@component install --dev

index.js: components image-url-for-angular.js
	@node components/hugojosefson-uncomponent-wrapper/bin/uncomponent-wrapper image-url-for-angular.js index.js

clean:
	rm -fr build components index.js

.PHONY: clean components build
