# react-slide-show
Here, a React component called SlideShow is created. The component fetches data from a dummy API provided by "http://fakestoreapi.com/products" using Axios, a popular HTTP client. The fetched data represents a list of products that will be used to create a slideshow.

The slideshow displays images of products with navigation buttons to move to the previous and next slides. It also includes a range input that allows users to jump to a specific slide directly. Additionally, there is a play/pause button to control the automatic slideshow functionality.

Here's a brief overview of the main features:

1. Data Fetching:
  (a). The component uses the useEffect hook with an empty dependency array ([]) to fetch data from the API when the component mounts. The fetched data is stored in the products state using the setProduct function.

2. Automatic Slideshow:
  (a). The useEffect hook is used again with isRunning and products.length as dependencies. When isRunning is true, a timer (setInterval()) is set up to automatically update the currentSlide state every 5 seconds (5000 milliseconds).
  (b). The currentSlide state controls which slide is displayed with opacity to make it visible or hidden. The setCurrentSlide function updates the slide index to move to the next slide in the list of products.

3. Manual Slideshow Control:
  (a). The range input allows users to manually control which slide is displayed by updating the currentSlide state based on the selected value of the range input.

4. Navigation Buttons:
  (a). The "Previous" and "Next" buttons allow users to navigate to the previous and next slides, respectively. These buttons call the handleClickPrev and handleClickNext functions, which update the currentSlide state accordingly.

5. Play/Pause Button:
  (a). The play/pause button enables users to control the automatic slideshow. When clicked, it toggles the isRunning state between true and false, effectively starting or stopping the automatic slideshow.
  (b). The button text and icon change dynamically based on the isRunning state. When paused, the button shows "Play" and a play icon, and when running, it shows "Pause" and a pause icon.

The slideshow component provides an interactive and visually appealing way to showcase a list of products from a dummy API, allowing users to manually navigate or enjoy an automatic slideshow.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

In the ButtonSlide component, we have a simple image slideshow with navigation buttons that allow users to move to the previous and next slides.
The buttons are disabled when the first or last slide is reached to prevent out-of-bounds navigation.
