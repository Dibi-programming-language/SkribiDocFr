hljs.registerLanguage(
    "skribi",
    function (e) {
        return {
            keywords: {
                keyword: 'skr_app ij ji ums ei ju fu pu kat sula ci mio',
                literal: 'io no',
                contributor_only: 'print println',
                built_in: 'adatali ioi dar int skr'
            },
            contains: [
                hljs.C_LINE_COMMENT_MODE,
                hljs.QUOTE_STRING_MODE,
                hljs.NUMBER_MODE,
            ]
        }
    }
)

hljs.initHighlightingOnLoad();