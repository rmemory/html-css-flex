
// global selector strings
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

/*
 * hideDetails
 * 
 * Add the hidden-detail class to the body
 *
 */
function hideDetails() {
  'use strict';

  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

/*
 * showDetails
 * 
 * Show the detail image, with animation
 *
 */
function showDetails() {
  'use strict';

  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function() {
      frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

/*
 * addKeyPressHandler
 * 
 * When the ESC key is pressed, hide the details
 *
 */
function addKeyPressHandler() {
  'use strict';

  document.body.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}

/*
 * setDetailsFromThumb
 * 
 * A convienence function which wraps a single call to setDetails,
 * and calls both imageFromThumb and titleFromThumb based on the 
 * thumb
 *
 */
function setDetails(imageUrl, titleText) {
  'use strict';

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

/*
 * imageFromThumb
 * 
 * Get the img url from the thumb
 *
 */
function imageFromThumb(thumb) {
  'use strict';
  return thumb.getAttribute('data-image-url');
}

/*
 * titleFromThumb
 * 
 * Get the text title from the thumb
 *
 */
function titleFromThumb(thumb) {
  'use strict';
  return thumb.getAttribute('data-image-title');
}

/*
 * setDetailsFromThumb
 * 
 * A convienence function which wraps a single call to setDetails,
 * and calls both imageFromThumb and titleFromThumb based on the 
 * thumb
 *
 */
function setDetailsFromThumb(thumb) {
  'use strict';

  setDetails(imageFromThumb(thumb), titleFromThumb(thumb));
}

/*
 * addThumbClickHandler
 * 
 * Add mouse click listener to the thumb.
 *
 */
function addThumbClickHandler(thumb) {
  'use strict';
  
  // Add the listener to the thum
  thumb.addEventListener('click', function(event) {
    // Each time the listener is called, set the details image to the 
    // image and title from the thumbnail
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}

/*
 * getThumbnailsArray
 * 
 * Returns an array of elements that contain 'data-image-role="trigger"'
 *
 */
function getThumbnailsArray() {
  'use strict';
  // Get all tags that have '[data-image-role="trigger"]'
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);

  // Convert 'thumbnails' node list to array
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

/*
 * initializeEvents
 * 
 * Top level function. Getst the array of all thumbnail images and attaches
 * mouse listeners to each.
 *
 */
function initializeEvents() {
  'use strict'

  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);

  // Add keypress handler tied to ESC to hide details when ESC is pressed
  addKeyPressHandler();
}

// Main entry point
initializeEvents();
