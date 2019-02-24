# Plastic Mobile Technical Test

Complete tasks as per [Instructions PDF](https://github.com/htkoca/pm-technical-interview/blob/master/UI%20Dev%20test.pdf):
- Since the scope of work is injectable and also very small, I've elected to omit external JS libraries like jquery, vue; all code is native js.

## Task 1 - Video Demo
A full screen video page, overlay text with 20% margins. Rainbow text effect on click.
- [Visit Video Demo](https://htkoca.github.io/pm-technical-interview/video-demo/)

## Task 2 - API Demo
A injectable JS function that returns Craigslist Toronto's `ggg` search results in JSON format.
- I've created an async function that fetches result pages based on 'searchQuery' arguments - [see api-functions.js](https://github.com/htkoca/pm-technical-interview/blob/master/api-demo/api-function.js)
  - Technical Note: It returns a `promise` object that resolves into the expected 'api style' JSON output.

Instructions to test function: 
- Navigate to https://toronto.craigslist.org/search/ggg?&is_paid=all
- Open Dev Tools (Right click > inspect)
- Open Console tab
- Paste in contents of [api-functions.js](https://github.com/htkoca/pm-technical-interview/blob/master/api-demo/api-function.js)
- Press enter
