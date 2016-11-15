# File Parsing

## Approach

For each problem, begin by first writing a failing test and then making it pass. Repeat this process until all required functionality for the problem has been implemented. At each passed test, make sure to ask yourself if what you have done is the _minimum_ required to make the test pass. Also, refactor the code if you see an opportunity to.

Although these are not production problems, treat them as if they are. Think through edge cases (if any exist) and make sure that at all steps you use tests to document your thoughts about the code.

Work together and make sure you are communicating with each other. Sometimes communication with a pair can be "can we take five minutes to solve this on paper apart from each other and then re-group?" Effective communication does not necessitate non-stop talking, but it does necessitate communicating what you are thinking and how you are feeling.

## Reminders

You are an Extreme Programmer so always begin with the tests. Work methodically, carefully, and as a team with your pair to solve the problems at hand by first specifying the behaviors of the system. Recall that communication is a core value of XP, so make sure you and your pair are finding effective ways to communicate and pausing to regroup when you are not connecting.

## First Problem

Suppose you are a Developer on an XP team which is transitioning to continuous deployment practices. Your team has developed an interest in [DevOps](https://en.wikipedia.org/wiki/DevOps) and feels that, with enough monitoring, alerts will help mitigate production downtime. In particular, the team (in its entirety: developers, project managers, product managers, company management, etc) have decided that a significant quarterly goal for the team is to implement a system which automatically notifies based on traffic spikes or spikes in application error rates.

Since you are on an XP team, you recognize that your goal is to provide the highest value possible and ship a small product sooner to get feedback faster. Given that, for a first pass your team decides to work on a quick analysis project involving the logs. Your tasks:

  * Write a Node.js script which parses the provided log file (found at `data/production.log` relative to where this repository is cloned) and `console.log` the answers to the following questions (including the question text):

      * What are all the dates the log covers?
      * For each date, how many log messages were added?
      * How many log messages were there of each level for each day (e.g. `DEBUG`, `INFO`, `WARN`)?

      Sample usage and output could look like:

      ```
      > node logParser.js
      * What are all the dates the log covers?
      2014-05-10
      2014-05-11
      2014-05-12
      2014-05-13
      2014-05-14
      2014-05-15
      2014-05-16

      * For each date, how many log messages were added?
      2014-05-10 205
      2014-05-11 264
      2014-05-12 326
      2014-05-13 271
      2014-05-14 365
      2014-05-15 324
      2014-05-16 348

      * How many log messages were there of each level for each day (e.g. `DEBUG`, `INFO`, `WARN`)?
      2014-05-10 DEBUG  74
      2014-05-10  INFO  75
      2014-05-10  WARN  56
      ```

      _Note:_ The provided log file is from a nonexistant application, all log messages generated with [Faker::Hacker](https://github.com/stympy/faker/blob/master/lib/faker/hacker.rb).

###### Additional information

You get log files that are in this format:

```
W, [2014-05-10T13:49:19.049260 #83516]  WARN -- : deliver B2C systems
W, [2014-05-10T13:49:19.049408 #83516]  WARN -- : transition sticky bandwidth
```

That is...

```
[log level char], [<date> #<processid>]  <log level> -- : <message>
```

###### Challenge Tasks

_If you complete the second problem, come back to this one_: parse the log file, breaking it into the various messages it contains and provide counts for the words in those messages. For example a message like "transition sticky bandwidth" would break into a word count like `{transition: 1, sticky: 1, bandwidth: 1}`. The ultimate goal is to provide a frequency-count sorted list of the words appearing in the log messages.

## Second Problem

I used to be a data analyst. A poor, misguided data analyst. At the time, I was approached by a colleague of mine, we will call her the _Marketing Master_. The Marketing Master promised, as they always do, she had a simple request; can you produce a heat map of the United States colored by how many users live in each state? Being naive I eagerly agreed; after all, _she said it was easy_.

As I went along, without a knowledge of any real programming other than SQL and working with a _real world_ data set, I quickly discovered I was in over my head. So many things were going wrong; the data set was a mess! Some of these users were not even users at all! One user had even filled out the entire registration form 1 field off! *It was a mess.*

_Where is this going?_ Counts_are a simple, but important measure in business statistics. An an XP developer your job is to always deliver high value to the business, so thinking about the metrics of the business is important. Many times, understanding the metrics helps you understand how your work contributes to the greater work of the company.

A simple thing like a heat map infographic for the Marketing Master can lead to email sign ups which can lead to conversions (and revenue). As you work through features and work in planning (coming up), think about how revenue plays into the picture. Ask yourself, _is there a way to make revenue from this sooner?_ Also ask yourself, _what is revenue for this feature?_ (It's not always money)

In the exercises you will work with `fs.readFile` and `String` to tokenize text and use counts in various ways:

  1. The provided [`mit_license.txt`](data/mit_license.txt) file contains a copy of the MIT License for the famous, ficticious software developer, _Copy McCattington_. Write a Node.js command line script that takes in an argument for the file's name (in this case [`mit_license.txt`](data/mit_license.txt)) and then `console.log`s an object with a word count for each word in the license. For the purpose of this word count `the`, `The`, `THE`, etc. are all the same word.

    For example, if you look at the [smaller_sample.txt](data/smaller_sample.txt) file included in this repository, the logged object would look like:

      ```
      {
        this: 3,
        counts: 3,
        a: 1,
        lot: 1
      }
      ```

  1. Read a few random lines in the [`dev_talk.txt`](data/dev_talk.txt) for a nice laugh. Write a Node.js command line script that takes in a command line argument for the filename (in this case [`dev_talk.txt`](data/dev_talk.txt)) and then `console.log`s an object with the average number of non-newline (`\n`) characters in each line.

      For example, if you look at the [`smaller_sample.txt`](data/smaller_sample.txt) file included in this repository, the response would be:

      ```
      Average number of characters per line: 13
      ```

  1. Review the [`org_chart.txt`](data/org_chart.txt) file included in this repository which contains the organization chart for a rather flat company. That is, there is only one level deep of management; every person is either a manager or the employee of the last listed manager. Managers have no indentation for their entry in the text file and employees have 2 spaces. Write a Node.js command line script that takes a command line argument for the filename (in this case [`org_chart.txt`](data/org_chart.txt)) and uses `console.log` to display an object in which each property is the name of a manager and each value is an array of their report's names.

      For example, if you look at the [`mini_org_chart.txt`](data/mini_org_chart.txt) file included in this repository, the repsonse would be:

      ```
      { 'Boris Langworth': [
          'Daphney O\'Conner',
          'Chad Breitenberg'
        ],
        'Cody Schaden': [
          'Marcella Bashirian',
          'Kenneth Romaguera',
          'Lew Daugherty'
        ]
      }
      ```

  1. [stretch] Continuing with the theme of the last exercise, check out the [`org_chart_nested.txt`](data/org_chart_nested.txt) file. Write a Node.js command line script that takes a command line argument for the filename (in this case [`org_chart_nested.txt`](data/org_chart_nested.txt)) and then uses `console.log` to display an object in which each property is the name of a manager and each value is an object containing the names of people they manage and an object for that person for any person they manage (recursively).

    For simplicity you may assume that any person may be elligible to have an employee that they manage. This is illustrated in the output below, Dixie and Myrna do not have any reports but each have an (empty) array value.

    For example, if you look at the [`mini_org_chart_nested.txt`](data/mini_org_chart_nested.txt) file included in this repository, the response would be:

    ```
    { 'Guido Mills': [
      { 'Marc Harber': [
          { 'Elton Corkery': [
              { 'Dixie Schulist': [] },
              { 'Jerel Cruickshank': [
                  {'Myrna Sauer': []}
                ]}
          ]}
      ]}
    ]}
    ```

  1. [stretch strech] Using a charting library such as [Google Charts](https://developers.google.com/chart/interactive/docs/gallery/orgchart), create a script that outputs an html file, that when opened in a browser, graphically shows the org chart.

### Test Setup

General setup for an application with tests:

1. `mkdir app_name`
1. `cd app_name`
1. `npm init # test: "mocha"`
1. `npm install --save-dev mocha chai`
1. `mkdir test`
1. `touch test/my_first_test.js`
1. `npm test`

It is recommended to make a test per problem, or figure out a similar organization strategy that works for you and your pair.

## Reflection

Stop coding approximately 15 minutes before the end of the day and have a discussion with your pair. Reflecting on the exercises:

1. Which aspect of this coding exercise provided the largest learning experience? Which aspect the least?
1. Where did you use higher order functions? If you did not, are there places where your code can be refactored to use higher order functions?
1. Can you think of an example of a count in a business setting and how it would be useful? What are the ways in which the business be interested in looking at that count?
