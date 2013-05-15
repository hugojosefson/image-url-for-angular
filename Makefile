all: build bower.json

build: components index.js
	@component build --dev

components: component.json
	@component install --dev

bower.json: components component.json
	@node components/hugojosefson-update-bower-from-component/bin/update-bower-from-component

clean:
	rm -fr build components

.PHONY: clean components build
