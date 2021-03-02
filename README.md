## Table of Contents

* [About Hoddit](#about-hoddit)
  * [What is hoddit for?](#what-is-hoddit-for)
  * [Technologies](#technologies)
* [Check out Hoddit](#check-out-hoddit)
* [Hoddit API](#hoddit-api)
  * [Fetch Usage](#fetch-usage)
  * [Hoddit API Basic Documentation](#hoddit-api-basic-documentation)
    * [limit](#limit)
    * [all](#all)
    * [nosort](#nosort)
    * [subreddit](#subreddit)
    * [bounds](#bounds)
* [Contributing](#contributing)
* [License](#license)

## About Hoddit

Hoddit is a website that tracks the fastest growing reddit posts right now!

(Note: Hoddit is down right now because I can't afford the server costs :D)

### What is hoddit for?

Reddit's rising feature sucks: There's no ranking between posts, there's no rates at which posts are increasing, and it doesn't track subreddits you're not subscribed to. The answer to that? 

Hoddit! Hoddit tracks the fastest growing posts accross all subreddits and organizes them into 

### Technologies
Project is created with: 
* React version: 16.13.1
* Node version: 11.12.0
* Express version: 4.17.1
* MongoDB
* Heroku
* Atom Editor

## Check out Hoddit

You can check out hoddit at [hoddit.com](https://www.hoddit.com)! Note that the site is very new and still under works :)

## Hoddit API

make requests from https://www.hoddit.com/api/ (no key required for now, but will require in the future)

### Fetch Usage

```javascript
const requester = async () => {
    let data = await fetch("https://www.hoddit.com/api/query?whatever");
    //do whatever
}
```

### Hoddit API basic documentation

#### limit
```javascript
let data = await fetch("https://www.hoddit.com/api/query?limit=X");
//top X posts are returned in ascending order by rate
```
Note: due to efficiency reasons, for now you should only make requests with limits of 10, 50, 100, 200, 250, 500, and 1000

#### all
```javascript
let data = await fetch("https://www.hoddit.com/api/query?all=true";
//all posts from the database are returned in ascending order by rate
```
Note: this query will take a *long* time

#### nosort

```javascript
let data = await fetch("https://www.hoddit.com/api/query?nosort=true");
//all posts from the database are returned with no sorting 
```
Note: this query will take a *long* time

#### subreddit

```javascript
let data = await fetch("https://www.hoddit.com/api/query?subreddit=AskReddit");
//top 50 posts from x subreddit will be returned in ascending order by rate
```

#### bounds

```javascript
let data = await fetch("https://www.hoddit.com/api/query?bounds=x-y");
//top x-y posts are returned in ascending order by rate
```
Note: this query has the same breakpoints as limit

## Contributing

Pull requests are welcome! For major changes, please open an issue to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License 

[MIT](https://choosealicense.com/licenses/mit/)


