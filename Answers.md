<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
---
Middleware is software that sits in the middle between two other disparate pieces of software and often facilitates a communication between them, or applies a set of rules.  Sessions are user logins persisted over time (with cookies), bcrypt is a popular encryption/hashing algorithm and library, and JWTs are JSON Web Tokens which are tokens that can be used as an alternative to session cookies.

2.  What does bcrypt do in order to prevent attacks?
---
It hashes passwords, so that they can't be known even if the database were compromised.
And can encrypt data.

3.  What are the three parts of the JSON Web Token?
---
The header, payload and signature