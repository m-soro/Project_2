# Open Peaks

<img src="https://github.com/m-soro/Project_2/blob/main/src/assets/images/openPeaks.png?raw=true" width="358" height="191">

Check mountain conditions all over the world!

---

<img src="https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/openpeaks/06.png?raw=true" width="360" height="auto">

<img src="https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/openpeaks/05.gif?raw=true" width="360" height="auto">

<img src="https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/openpeaks/01.png?raw=true" width="300" height="auto">

## Introduction

As someone who looks forward to every winter season ⛷️ I decided to combine my interest in skiing and programming for this second project!

## Process

### Plan

I started by sketching how I wanted my app to look like, even though it didn't turn out like this sketch, I am pretty happy with the end result. I used this sketch as a jumping point and build upon it. Its also a priority that this app is mobile friendly/responsive.

<img src="https://raw.githubusercontent.com/m-soro/Project_2/main/src/assets/images/sketch.png?raw=true" width="200" height="317">

### Build

#### Front End

I just didn't want to create a form and results page, I wanted a transportive feel, pages with beautiful images of snow and mountain peaks.

I decided to include a parallax effect by using npm package react-parallax.

#### Back End

For the API, I am calling two APIs every time a search is triggerred. One API is resposible for the snow and chair statistics and the other API is resposible for resort conditions.

### Challenges

#### Front End

- Because this app is heavy on the images, it tends to load _slower_. All images are already compressed at the time of deployment.

- I begin by setting, each page's height to "100vh", it works great for static contents, which is the first two pages, however the "results" page is dependent on the result of the API call. If it returned a long list of chair status, it overflows and gets cut off.

- To fix this, I decided to have an example of a complete search result showing as soon as the page loads and set the results page to "auto" the first render is a whole page, the second render is dependent on the API call result, and because one of the API is permissive with keywords, it always returns a result so a whole page is still able to render.

- Another challenge is presenting the forecast data. I just did not want tables of attributes and value displayed right away. It may look overly cluttered in the page so I decided to use drop downs for detailed am, pm and night forecasts.

#### Back End

- The two APIs have some overlapping data, like the resort information, but one is finicky with resort's name and the other is permissive and almost never returns an error.

- Another challenge is that each day's forecast is nested into three objects. I had a bit of challenge extracting this data. I used multiple return statements and drilled down in each object nest then use Object.keys(myObj) and map method to extract these data.

- As soon as I was succesful getting the data, another problem was the empty objects that the API returns. At first, I did not notice it but after trying out different resorts my app would crash unexpectedly, it was beacuse I was trying to access an object property that doesn't exist.

- I fixed this by adding multiple conditions that checks if the object is not null, if its not null, then check if there are any keys inside the object, if there are keys then iterate and create a drop down and repeat this for all the forecast data.

### Design

- I wanted a clean design and beautiful interface.

- This app is heavy on the images so the trade off is _slow_ load times. I considered changing images or reducing the quality of images or just use gradients but decided against it.

- At first I was hesitant to put a background color for the results page cards and left it transparent for awhile but, its difficult to read the results so I added a semi opaque white background color that turns solid white when hovered and darken the texts.

- I added subtle animation for down arrow and back to top arrow, which when clicked, scrolls smoothly to the next page and the same for the submit button.

### Limitations

- It takes trial and error to find the correct key word for each resort's name. The two APIs are not using the same resort ID or slug name so it may return inconsistent results.

### Future Plans

- I would love to extend this project where you can save your favorite resorts, individually or by season pass and get all the results.

### Bonus ⭐⭐⭐!

Since some of my cohort is having issues with their app deployment, I decided to make a short video tutorial on how to easily deploy their applications to github pages and netlify!

[<img src="https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/openpeaks/howto.png?raw=true" width="50%">](https://vimeo.com/863756564 "How to deploy your React App to GitHub and Netlify")
