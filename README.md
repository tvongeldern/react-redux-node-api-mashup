OVERVIEW

This project aims to quantify how "big time" any given musician is. It uses data from iTunes and Wikipedia to analyze how much music they have made, how popular their music is, and their level of notoriety.

The API returns a score on a scale from 0 to 100 that should give a rough estimate of how popular an artist is. Some example scores, to give you an idea:
 - Baja Men: 53.42
 - Rick Astley: 68.91
 - Neil Young: 97.79
 - Beyonce: 118.17 (yes, Beyonce deserves to be well over 100 on any popularity scale of 1 to 100)
 - Me (Tom von Geldern): 0

GETTING STARTED

Open a terminal and navigate into the root directory of this project. Run the following command to install all the dependencies:

npm i

Once that is complete, run the following command to stand up the app locally:

npm run start

USING THE APP

Once the app is up and running, open your browser (either Chrome or Firefox) and navigate to http://localhost:3000/

You can enter any artist's name in the prompt and click "Submit" to see their score.

if you want to access the API data using curl, send a GET to http://localhost:3000/rest/mashup/?artist={artist}
