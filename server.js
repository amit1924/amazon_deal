const port = 4000;
const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());

const username = "amish198";
const password = "Unique#108";

app.get('/deals', async (req, res) => {
  try {
    const body = {
      "source": "amazon_search",
      "domain": "in",
      "query": "deals of the day",
      "parse": true,
      "pages": 5
    };

    const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + Buffer.from(`${username}:${password}`).toString('base64')
      }
    });

    const data = await response.json();
    const results = data.results[0].content.results.organic;
    const filteredDeals = results.filter(deal => deal.price_strikethrough);
    const sortedBestDeals = filteredDeals.sort((a, b) => ((a.price_strikethrough - a.price) / a.price_strikethrough * 100) - ((b.price_strikethrough - b.price) / b.price_strikethrough * 100));

    console.log(sortedBestDeals);

    res.send(sortedBestDeals);
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
