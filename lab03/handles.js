const url = require("url");
const qs = require("querystring");

module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url);
    const path = route.pathname;
    const params = qs.parse(route.query);

    res.writeHead(200, { "Content-Type": "text/plain" });

    if (path === "/hello" && "name" in params) {
      if (params["name"] == "Marco") res.write("I am Marco et I am a MAN");
      else res.write("Hellooo " + params["name"]);
    } else if (path === "/about") {
      try {
        const content = require("./content/about.json");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(content, null, 2));
      } catch {
        res.write("Error: File About can not be found");
      }
    } else res.write("ERROR 404");

    res.end();
  },
};
