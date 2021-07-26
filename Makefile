serve:
	npx hugo server \
		--buildDrafts \
		--buildFuture \
		--disableFastRender

production-build:
	npx hugo \
		--minify

preview-build:
	npx hugo \
		--baseURL $(DEPLOY_PRIME_URL) \
		--buildDrafts \
		--buildFuture \
		--minify

open:
	open https://cncf-hugo-starter.netlify.com
