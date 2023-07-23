install: 
	npm ci
user-install:
	npm ci --production
brain-games: 
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint: 
	npx eslint .
