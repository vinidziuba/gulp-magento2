module.exports = {
    "extends": "stylelint-config-standard",
    "ignoreFiles": ["/**/_module.less", "/**/_widgets.less"],
    "rules": {
        "at-rule-empty-line-before": null,
        "no-descending-specificity": true,
        "indentation": 4,
        "string-quotes": "single",
        "selector-max-id": 10,
        "max-nesting-depth": 4,
        "number-leading-zero": "never",
        "max-empty-lines": 2,
        "font-family-no-missing-generic-family-keyword": null
    }
}
