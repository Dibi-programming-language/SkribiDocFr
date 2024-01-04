hljs.registerLanguage(
    "skribi",
    function (e) {
        return {
            keywords: {
                keyword: 'skr_app ij ji ums ei ju fu pu kat sula',
                literal: 'ioial noial',
                contributor_only: 'print println',
                built_in: 'adatali ioi dar int skr'
            },
            contains: [
                hljs.COMMENT(
                    /\/\//,
                    /\n/
                ),
            ]
        }
    }
)

hljs.initHighlightingOnLoad();