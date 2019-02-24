# Plastic Mobile Technical Test

Complete tasks as per [Instructions PDF](https://github.com/htkoca/pm-technical-interview/blob/master/UI%20Dev%20test.pdf):
- Since the scope of work is injectable and also very small, I've elected to omit external JS libraries like jquery, vue; all code is native js.

### Task 1 - Video Demo
- A full screen video page with rainbow text effect on click
- [Visit Video Demo](https://htkoca.github.io/pm-technical-interview/video-demo/)

### Task 2 - API Demo
- A injectable JS function that returns craiglist toronto gig's search results in JSON format.
  - I've created two versions of this function.
    - An asyncronous version that grabs new results data in the background - [api-function.js](https://github.com/htkoca/pm-technical-interview/blob/master/api-demo/assets/api-function.js)
    - A basic version that just converts the current result page to JSON - [api-function-basic.js](https://github.com/htkoca/pm-technical-interview/blob/master/api-demo/assets/api-function-basic.js)

##### Task 2 Instructions
- Navigate to https://toronto.craigslist.org/search/ggg?&is_paid=all
- Open Dev Tools (Right click > inspect)
- Open Console tab
- Paste in contents of either [api-function.js](https://github.com/htkoca/pm-technical-interview/blob/master/api-demo/assets/api-function.js) or [api-function-basic.js](https://github.com/htkoca/pm-technical-interview/blob/master/api-demo/assets/api-function-basic.js)
- Press enter
