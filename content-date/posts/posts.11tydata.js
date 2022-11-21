const {DateTime} = require("luxon")
module.exports = {
    layout: "base.html",
    tags: ["posts"],
    eleventyComputed: {
        dateString: ({page}) => DateTime.fromJSDate(page.date, {zone: 'utc'}).toLocaleString(DateTime.DATE_FULL)
    }
}