module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("uppercase", function(string) {
        return string.toUpperCase();
    })
    eleventyConfig.addFilter("color", function(string, color) {
        return `<span style="color: ${color}">${string}</span`
    })
}