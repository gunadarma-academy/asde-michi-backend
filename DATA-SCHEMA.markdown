Data Schema
===========

Initial
-------

### Users

```
+ _id: UUID
+ created_date: Date
+ updated_date: Date
+ username: String
```

### Questions

```
+ _id: UUID
+ owner: Users.object
+ link: String
+ created_date: Date
+ updated_date: Date
+ created_by: Users._id
+ question_title: String
+ question_content: String
+ is_answered: Boolean
+ score: Integer
+ answer_count: Integer
+ accepted_answer_id: Answers._id
+ tags: Array
```

### Answers

```
+ _id: UUID
+ owner: Users.object
+ created_date: Date
+ updated_date: Date
+ created_by: Users._id
+ answer_question_id: Quetions._id
+ answer_content: String
+ is_accepted: Boolean
```

**Notes:**
We're not using `timestamp` type because it's only for internal use of the database, not for application.

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

References
----------

Example from Stack Exchange/Overflow:

> Question: https://api.stackexchange.com/docs/questions-by-ids#order=desc&sort=activity&ids=4470158&filter=default&site=stackoverflow&run=true
> Answer: https://api.stackexchange.com/docs/answers-by-ids#order=desc&sort=activity&ids=4470307&filter=default&site=stackoverflow&run=true
