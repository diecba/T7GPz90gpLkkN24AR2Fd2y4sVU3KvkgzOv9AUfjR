load('config.js')
function execute(url) {
    const doc = fetch(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".col-image img").first().attr('data-src'),
        description: doc.select("#summary").text(),
        detail: doc.select(".list-info .status").html(),
        category: doc.select(".col-xs-12 .tr-theloai").html(),
        host: BASE_URL
    });
}