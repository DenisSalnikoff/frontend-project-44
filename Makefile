install: 
	npm ci
	npm link
user-install:
	npm ci --production
	npm link
brain-games: 
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint: 
	npx eslint .
