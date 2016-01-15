#
# Binaries.
#
VERSION=1.0.0
ESLINT = node_modules/.bin/eslint
UGLIFYJS = node_modules/.bin/uglifyjs
BROWSERIFY = node_modules/.bin/browserify
KARMA = node_modules/.bin/karma
MOCHA = node_modules/.bin/mocha
WATCHIFY = node_modules/.bin/watchify


#
# Files.
#

SRC = $(wildcard lib/*.js)

#
# Chore tasks.
#

# Install node dependencies.
node_modules: package.json $(wildcard node_modules/*/package.json)
	@npm install
	@touch node_modules

# Remove temporary/built files.
clean:
	rm -rf *.log journey-condition-parser.js journey-condition-parser.min.js journey-condition-parser.min.js.gz
.PHONY: clean

# Remove temporary/built files and vendor dependencies.
distclean: clean
	rm -rf node_modules
.PHONY: distclean

#
# Build tasks.
#

# Build journey-condition-parser.js.
journey-condition-parser.js: node_modules $(SRC) package.json
	@$(BROWSERIFY) --standalone JourneyConditionParser lib/index.js > $@

# Build minified js.
journey-condition-parser.min.js: journey-condition-parser.js
	@$(UGLIFYJS) $< --output $@


# gzip it
journey-condition-parser.min.js.gz: journey-condition-parser.min.js
	@gzip < journey-condition-parser.min.js > journey-condition-parser.min.js.gz

# Build shortcut.
build: journey-condition-parser.min.js.gz
.PHONY: build

#
# Test tasks.
#

# Lint JavaScript source.
lint: node_modules
	@$(ESLINT) $(SRC)
.PHONY: lint

#run karma tests
test: clean build
	@$(KARMA) start test/karma.conf.js --single-run --no-colors
.PHONY: test

# continue to run karma test in the background, you may want to run task
# watchify as well to allow journey-condition-parser.js regenerate on change
watch-test: clean build
	@$(KARMA) start test/karma.conf.js --no-colors
.PHONY: watch-test

# watch code changes and regenerate journey-condition-parser.js continously
# useful when debugging code in browser
watchify: node_modules $(SRC) package.json
	@$(WATCHIFY) --standalone JourneyConditionParser lib/index.js -o journey-condition-parser.js
.PHONY: watchify

# dist
dist: clean lint build test
.PHONY: dist
