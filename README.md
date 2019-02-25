# Homework #4

10 points

**DUE: Saturday, March 2 by 12:00pm**

For easiest viewing of these instructions, view online on Github.com or use a Markdown previewer.


### Getting Started

1. Download a ZIP file of this repository, unzip it into a folder, and then convert that folder
into your own git repository.  (Alternatively, you can clone this repository and then use `git remote set-url...` to point to your remote repository instead.)
2. Create a remote repository (GitHub or BitBucket) called `mpscs52553-hw4`.
2. Follow the instructions below.
3. Commit often.  Push often.
4. Add collaborators:
    * GitHub: jahnagoldman, ekxue, jeffcohen
    * BitBucket: jahnamcnamara, ekxue, jeffcohen
5. Make sure your final commit is timestamped before the deadline, and everything is pushed to your remote repository by the deadline.


### Instructions

This assignment is intended to provide more practice at JavaScript (ES6)
programming.  Some research might be required. Watch a 5-second movie
of a sample solution in the file `hw4.mp4`.

**1. Run `npm install`**

I have included the [request](https://github.com/request/request) library
so you can make HTTP requests from a Node script.  See the documentation
for example usage.

**2. Determine the (possible) date of the end of the world!**

Did you know that NASA has an API that lists all incoming
asteroids that are currently hurtling their way toward our planet?

Some of them are tiny, but some of them are huge.

Some of them miss the Earth by a wide margin, but some of them
get very close!

Your task is very simple:

1. Write a Node script that emits
   the name of the largest asteroid that
   is most likely to hit the Earth right before the quarter ends,
   during the week of March 16, 2019 to March 23, 2019?
2. Also display the speed in miles per hour, and the distance in miles.

Documentation for the NASA API ("Neo - Feed"): https://api.nasa.gov/api.html#neows-feed

**3. Rules and hints:**

1. You can use my API key `ThEWyjBBPDnDKV2CVSqO4gRU3qjBlpkMJo06rwo8` but
   if you find that's not working, you should sign up for your own:
   [https://api.nasa.gov/index.html#apply-for-an-api-key]
   (https://api.nasa.gov/index.html#apply-for-an-api-key).
   **BEWARE that it may take a couple of days for you to be approved.**

2. Use the example data provided by NASA in their documentation to get a feel for
   the kind of data you'll get back.  Part of this assignment is
   to give you practice at your ingenuity when faced with less-than-ideal
   API data structures.  For example, try running the request in your browser
   to see the JSON data that will be returned.

3. You'll need to parse HTTP response body with `JSON.parse()`

4. You'll need to especially pay attention to the size of the asteroid
   as well as whether it has a chance of hitting Earth.  Look for
   the `is_potentially_hazardous_asteroid` indicator that NASA
   provides with each asteroid.  Those are the ones you need to be
   concerned with.  __Do not consider any asteroids
   that are not considered by to be potentially hazardous.__

5. When comparing the asteroid sizes, use the "maximum estimated diameter"
   of each asteroid.
# mpcs52553-hw4
