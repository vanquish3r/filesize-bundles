const http = require("http");
const ufs = require("url-file-size");

let mycounter = 0;

async function getFileSize(url, previoussize, res) {
  await ufs(url).then((size) => {
    if (previoussize == size) {
      res.write("\t\t\t<tr bgcolor='lightgreen'>\n");
    } else {
      res.write("\t\t\t<tr bgcolor='red'>\n");
    }
    res.write("\t\t\t\t<td>");
    mycounter += 1;
    res.write(`${mycounter}/43`);
    res.write("</td>\n");
    res.write("\t\t\t\t<td>");
    res.write(`<a href="${url}">${url}</a>`);
    res.write("</td>\n");
    res.write("\t\t\t\t<td>");
    res.write(`${previoussize}`);
    res.write("</td>\n");
    res.write("\t\t\t\t<td>");
    res.write(`${size}`);
    res.write("</td>\n");
    res.write("\t\t\t</tr>\n");
  });
}

http
  .createServer(async function (req, res) {
    mycounter = 0;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html>\n\t<head>\n\t</head>\n\t<body>\n");
    res.write("\t\t<table border='1'>\n");
    res.write("\t\t\t<tr bgcolor='lightgrey'>\n");
    res.write("\t\t\t\t<td>#</td>\n");
    res.write("\t\t\t\t<td>Bundle</td>\n");
    res.write("\t\t\t\t<td>Previous size<br>(in bytes)</td>\n");
    res.write("\t\t\t\t<td>Current size<br>(in bytes)</td>\n");
    res.write("\t\t\t</tr>\n");

    //
    await getFileSize(
      "https://slipstream-island.bant.ing/android.banter",
      "66360808",
      res
    );
    await getFileSize(
      "https://slipstream-island.bant.ing/windows.banter",
      "86762203",
      res
    );
    //
    await getFileSize(
      "https://crystal-ice.bant.ing/android.banter",
      "46919551",
      res
    );
    await getFileSize(
      "https://crystal-ice.bant.ing/windows.banter",
      "42833393",
      res
    );
    //
    await getFileSize(
      "https://crystal-lake.bant.ing/android.banter",
      "46291089",
      res
    );
    await getFileSize(
      "https://crystal-lake.bant.ing/windows.banter",
      "42432660",
      res
    );
    //
    await getFileSize(
      "https://crystal-lake-events.bant.ing/android.banter",
      "46919551",
      res
    );
    await getFileSize(
      "https://crystal-lake-events.bant.ing/windows.banter",
      "42833393",
      res
    );
    //
    await getFileSize(
      "https://winter-sport.bant.ing/android.banter",
      "71208779",
      res
    );
    await getFileSize(
      "https://winter-sport.bant.ing/windows.banter",
      "73420755",
      res
    );
    //
    await getFileSize(
      "https://story-time.bant.ing/android.banter",
      "25562775",
      res
    );
    await getFileSize(
      "https://story-time.bant.ing/windows.banter",
      "35744678",
      res
    );
    //
    await getFileSize(
      "https://rooms.bant.ing/android.banter",
      "193228737",
      res
    );
    await getFileSize(
      "https://rooms.bant.ing/windows.banter",
      "155487384",
      res
    );
    //
    await getFileSize("https://iss.bant.ing/android.banter", "182336964", res);
    await getFileSize("https://iss.bant.ing/windows.banter", "143698262", res);
    //
    await getFileSize(
      "https://welcome.bant.ing/android.banter",
      "10149759",
      res
    );
    await getFileSize(
      "https://welcome.bant.ing/windows.banter",
      "8706069",
      res
    );
    //
    await getFileSize("https://es.bant.ing/android.banter", "61007949 ", res);
    await getFileSize("https://es.bant.ing/windows.banter", "70366864", res);
    //
    await getFileSize(
      "https://jungleracc.bant.ing/android.banter",
      "64167477 ",
      res
    );
    await getFileSize(
      "https://jungleracc.bant.ing/windows.banter",
      "85929300",
      res
    );
    //
    await getFileSize("https://bh.bant.ing/android.banter", "32511383 ", res);
    await getFileSize("https://bh.bant.ing/windows.banter", "42288478", res);
    //
    await getFileSize("https://dev.bant.ing/android.banter", "14140402 ", res);
    await getFileSize("https://dev.bant.ing/windows.banter", "17422285", res);
    //
    await getFileSize("https://101.bant.ing/android.banter", "5501307 ", res);
    await getFileSize("https://101.bant.ing/windows.banter", "4876334", res);
    //
    await getFileSize("https://goth.bant.ing/android.banter", "34896583 ", res);
    await getFileSize("https://goth.bant.ing/windows.banter", "34737093", res);
    //
    await getFileSize(
      "https://island-night.bant.ing/android.banter",
      "10739325 ",
      res
    );
    await getFileSize(
      "https://island-night.bant.ing/windows.banter",
      "10740053",
      res
    );
    //
    await getFileSize(
      "https://games.bant.ing/android.banter",
      "18513213 ",
      res
    );
    await getFileSize("https://games.bant.ing/windows.banter", "22002028", res);
    //
    await getFileSize(
      "https://lgbtq.bant.ing/android.banter",
      "22769843 ",
      res
    );
    await getFileSize("https://lgbtq.bant.ing/windows.banter", "77786309", res);
    //
    await getFileSize(
      "https://open-mic.bant.ing/android.banter",
      "1765638 ",
      res
    );
    await getFileSize(
      "https://open-mic.bant.ing/windows.banter",
      "1818668",
      res
    );
    //
    await getFileSize(
      "https://rainbow.bant.ing/android.banter",
      "22769843 ",
      res
    );
    await getFileSize(
      "https://rainbow.bant.ing/windows.banter",
      "77786309",
      res
    );
    //
    await getFileSize(
      "https://improv.bant.ing/android.banter",
      "18047864 ",
      res
    );
    await getFileSize(
      "https://improv.bant.ing/windows.banter",
      "55385274",
      res
    );
  await getFileSize(
      "https://high-rise.bant.ing/android.banter",
      "22769843 ",
      res
    );
    await getFileSize(
      "https://high-rise.bant.ing/windows.banter",
      "77786309",
      res
    );
  
  

    res.write("\t\t\t<tr bgcolor='lightgrey'>\n");
    res.write("\t\t\t\t<td>#</td>\n");
    res.write("\t\t\t\t<td>Bundle</td>\n");
    res.write("\t\t\t\t<td>Previous size<br>(in bytes)</td>\n");
    res.write("\t\t\t\t<td>Current size<br>(in bytes)</td>\n");
    res.write("\t\t\t</tr>\n");
    //
    res.write("\t\t</table>\n");
    res.write("\t</body>\n</html>");
    res.end();
  })
  .listen(8080);
