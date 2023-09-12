# Open Peaks

Check mountain conditions all over world!

<img src="https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/openpeaks/06.png?raw=true" width="360" height="279">

###

<img src="https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/openpeaks/05.gif?raw=true" width="360" height="279">

###

<img src="https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/openpeaks/01.png?raw=true" width="300" height="517">

## Introduction

As someone who looks forward to every ski season ⛷️ I decided to combine my interest in skiing and programming for this second project!

## Process

### Planning

I started by sketching how I wanted my app to look like, even though it didn't turn like this sketch I am pretty happy with the end result.

<img src="https://raw.githubusercontent.com/m-soro/Project_2/main/src/assets/images/sketch.png?raw=true" width="200" height="317">

Also, it was very important for me that this app is completely mobile friendly.

What I found is that it is much difficult to start if you don't have any idea that you can refer to.

### Building

### Front End

I just didn't want to create a form and results page, I wanted a transportive ski resort feel and is visual similar to other well known ski resort websites.
I decided to include a parallax effect to achieve my front-end goal by using `npm package react-parallax`.

### Back End

For the API, I am calling two APIs every time a search is triggerred. One API is resposible for the snow and chair statistics and the other API is resposible for resort conditions.

### Challenges

#### Front End

- Because this app is heavy on the visuals, it tends to load slower than other sites. All images are already compressed time of deployment.
- For the results page, at first I didn't want to show any results in it. I wanted the user to search and then see the results page. However it breaks the parallax because every "page" has a height of 100vh, if the results shows no result or incomplete result, it ends up only half a page.
- To fix this, I decided to have an example of a complete search result showing as soon as the page loads.
- Another challenge is presenting the forecast data. I did not want just tables of attributes and value displayed right away. It may look over cluttered in the page so I decided to use drop downs for detailed am, pm and night forecasts.

#### Back End

- The APIs have some overlapping data, but one is finicky with resort's name and while the other is permissive. It almost never return an error.
- Another challenge is that each day's forecast is divided into three objects. I had a bit of challenge extracting this data. I used Object.keys(myObj) and used map to extract these data.
- As soon as I was succesful getting the data, another problem was the empty objects that it returns, I did not notice it after a few API call but my app would crash, since I was trying to access an object property that doesn't exist.
- I fixed this this by adding multiple conditions that checks is the object is not null, if the object is not null, check if there are any keys inside the object, if there are then iterate and create a drop down and repeat this for all the forecast data.

### Design

- I wanted a clean design and beautiful interface. This app is heavy on the pictures so the trade off is slow load times.
- At first I was hesitant to put a background color for the results page but, its difficult to read the results so I added a white background color.
- I added subtle animations for down and back to top arrows, which when clicked scrolls to the next page.

### Limitations

- It takes trial and error to find the correct key word for resort's name. The two API are not using the same resort ID or slug name so it may return inconsistent results.

### Future Plans

- I would love to extend this project where you can save your favorite resorts, individual or by season pass and get all the results.
