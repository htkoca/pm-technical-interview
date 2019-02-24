# Plastic Mobile Technical Test

Complete tasks as per [Instructions PDF](https://github.com/htkoca/pm-technical-interview/blob/master/UI%20Dev%20test.pdf):
- Since the scope of work is injectable and also very small, I've elected to omit external JS libraries like jquery, vue; all code is native js.

## Task 1 - Video Demo
A full screen video page with rainbow text effect on click
- [Visit Video Demo](https://htkoca.github.io/pm-technical-interview/video-demo/)

## Task 2 - API Demo
A injectable JS function that returns craiglist toronto gig's search results in JSON format.
- I've created an async function that fetches result pages based on 'searchQuery' arguments - [api-functions.js](https://github.com/htkoca/pm-technical-interview/blob/master/api-demo/assets/api-function.js) - 
  - technical note: It returns a `promise` object that resolves into the expected 'api style' JSON output.

Instructions to test function: 
- Navigate to https://toronto.craigslist.org/search/ggg?&is_paid=all
- Open Dev Tools (Right click > inspect)
- Open Console tab
- Paste in contents of [api-functions.js](https://github.com/htkoca/pm-technical-interview/blob/master/api-demo/assets/api-function.js)
- Press enter
