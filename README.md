# WEB103 Project 3 - *SouthFloridaEvents*

Submitted by: **Pablo Valdes**

About this web app: **An app to find the latest events in south florida**

Time spent: **9** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x] **NOTE: Your GIF or a screenshot added to this README must include a view of your Railway database that shows the contents of the table used by your app**
- [x] **The web app displays the title of the app**
- [x] **A visual interface allows the user to select a Location they would like to view**
- [x] **Clicking on a Location shows a list of all items from the Events table that corresponds to that Location**
- [x] **Each Location detail page should have its own unique URL**

The following **optional** features are implemented:

- [ ] An additional page shows all possible `Events` that the user can sort and filter by `Location`
- [ ] `Events` display a countdown showing the time remaining before that event and appears with different formatting when the event has passed

The following **additional** features are implemented:

- [x] Included TailwindCSS
- [x] A clean backend

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://imgur.com/gallery/web-103-project-3-by-pablo-valdes-8MnSSxK' title='Video Walkthrough' width='250' height='150' alt='Video Walkthrough' />

[https://imgur.com/a/8MnSSxK
](https://imgur.com/gallery/web-103-project-3-by-pablo-valdes-8MnSSxK)

** MP4 WORKS **

https://i.imgur.com/FvgUJJh.mp4

** THE GIFS DO NOT WORK ON IMGUR FOR ME **

https://imgur.com/gallery/gif-doesnt-work-please-go-on-profile-mp4-47AIJfF

https://i.imgur.com/Sxma9FT.gif

<!-- Replace this with whatever GIF tool you used! -->
GIF created with microsoft clipchamp and ezGif
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

During this project I encountered many simple problems making the backend and frontend for the site from scratch, one of which was of great annoyance was trying to make dedicated routes for my events and locations, the problem was when
I was trying to access the location id of an event as it was in a different file, I didn't realize express router had a way for you to merge nested routes, but I was able to figure it out and implement it, the project really helped me better
understand the creation and utilization of the backend api, which brings me to the frontend, it was quite annoying and tedious creating the frontend, not that it's hard, just boring, I wanted to use Zustand instead of constantly refetching
from my api, but I didn't think I'd have enough time to refactor what I already had, I also began this project less than 24 hours ago, so I dealt with some minor headaches near the end.

## License

Copyright 2024 Pablo Valdes

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
