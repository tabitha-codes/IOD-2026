/* Lab #5: Manage Data 1
In this lab you will show your understanding of populating
simple templates with data.
We are syncing what is on the screen with what is in the data.
The data may potentially change over time as new news
articles are published, so we need to periodically check them
and refresh the screen with any new data.

Part 1 - Use the following array to populate a web page
which contains news. When the page loads up, it should
display all of the news items in the array.
Use an interval function to read the array every 5 seconds.
Every time the array is read, remove all news elements
from the news container and fill it in with the latest news –
so the page is always in sync with the data.

Lab #5: Manage Data 2

This time you will need to add news to the previous array.
When the interval function executes every 5 seconds, it should re-populate
the page with all of the articles in the array at that time.
So if a new news item has been submitted via the form and added to the
array, the repeating interval will pick it up and include it on the page,
together with the previous news items.
Extension: include a button that will stop the interval from reloading the
news items.

To update the array, create a form in your page, which will
include fields for the title of the news item and the content,
and a button to submit this new news item.

There is a trick here. If you use a form and submit, it will
trigger a page reload. There are two ways of avoiding this.

1. You can research the prevent default behavior, which
stops the form from doing a normal post on its submit
event.

• W3Schools
• Mozilla MDN Web Docs
Some prevent default behavior links:

2. You can simply create a form without using an actual
html <form> tag. Use text field inputs and a button
with onclick event instead. */

let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];