Data Schema
===========

```
* is required
+ is optional
```

Initial
-------

- Users can have many Questions
- Users can have many Answers
- Each Questions can have many Answers
- Each Answers belong to one Question

### Users

```
* _id: UUID
* created_at: Date.now
* updated_at: Date.now
* username: String [20]
+ avatar: String [Gravatar]
+ meta:
  + twitter_id: String
  + twitter_username: String [20]
```

### Questions

```
* _id: UUID
* created_at: Date.now
* updated_at: Date.now
* author: Users.object
* title: String [140]
* description: String [10000]
* is_answered: Boolean
+ answer_count: Integer [>=0]
+ meta:
  + url: String
  + score: Integer
  + tags: Array of String
  + labels: Array of String
+ answers: Answers.object
```

### Answers

```
* _id: UUID
* created_at: Date.now
* updated_at: Date.now
* author: Users.object
* answer_to: Quetions.object
* description: String [10000]
* is_accepted: Boolean
+ meta:
  + url: String
  + score: Integer
```

**Notes:**
We're not using `timestamp` type because it's only for internal use of the database, not for application.

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

References
----------

Example from Stack Exchange/Overflow:

> Question: https://api.stackexchange.com/docs/questions-by-ids#order=desc&sort=activity&ids=4470158&filter=default&site=stackoverflow&run=true
> Answer: https://api.stackexchange.com/docs/answers-by-ids#order=desc&sort=activity&ids=4470307&filter=default&site=stackoverflow&run=true

Example with Mongoose:

https://blog.feathersjs.com/from-mongoose-models-to-a-real-time-api-with-feathersjs-ec1cc3fb0a5c

