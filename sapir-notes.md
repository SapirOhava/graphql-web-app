# What is a Scalar in GraphQL?

In GraphQL, a scalar type represents a primitive data type. These are the basic types that cannot be further broken down into more primitive types. In the standard specification, GraphQL defines several built-in

# scalar types:

Int - Represents a 32-bit integer.
Float - Represents a floating-point value.
String - Represents a UTF-8 character sequence.
Boolean - Represents true or false.
ID - Represents a unique identifier, often used to refetch an object or as a key for a cache. While it is serialized the same way as a String, it is not intended to be human-readable.
These scalar types are the building blocks of data in GraphQL and are used to define what kind of data fields can hold. You can also define custom scalar types if the built-in ones don't meet your needs.

# What Does "Serialized" Mean?

In the context of GraphQL and computing in general, serialization is the process of converting an object or data structure into a format that can be easily stored or transmitted and then reconstructed later. In the case of the ID scalar type in GraphQL:

# Serialized as a String: This means that when the ID type is transmitted over the network or outputted by a GraphQL server, it is converted into a string format. This is important for data transmission and storage, ensuring that the unique identifier is easily transportable and storable across different systems.

The key takeaway here is that while an ID might represent complex or structured data internally, it is converted to a simple string when it is being sent to a client or stored, making it easy to handle in a variety of programming environments. The ID type is unique in that it provides a clear indication to developers that the field is meant for use as a unique identifier, even though it is transmitted and handled as a string.

# Input Type

Input types in GraphQL are special kinds of object types that allow you to pass objects as arguments to queries and mutations, which you cannot do with just scalar types. They are particularly useful when you want to pass a complex object as an argument.

# In GraphQL, when you define fields in your types or specify arguments for your queries and mutations, the structure and syntax used are important for defining how data is exchanged and processed.

# The Role of input in Your Mutation

In the mutation login(input: LoginInput!): User, input serves as the name of the argument that is being passed to the mutation. LoginInput is the type of this argument, which in your schema, is defined as an input type containing specific fields (in this case, username and password). Here's why you define it this way:

Named Arguments: GraphQL requires each argument to be named. This naming convention provides clarity and flexibility. In your mutation, input is the argument's name, and LoginInput! specifies the type of the input data and that it is required (non-nullable).

Flexibility in Extending: By using an input type and naming the argument, you can later modify the LoginInput type to include more fields without altering how the mutation itself is called. This is more maintainable as APIs evolve.

Why Not login(LoginInput!): User?
Attempting to define a mutation like login(LoginInput!): User would be incorrect in GraphQL for a couple of reasons:

Missing Argument Name: In this format, LoginInput appears to be used as a direct type of the argument without an actual argument name. In GraphQL, each argument provided to a field or directive must have a name followed by a colon and then the type.

Clarity and Standards: GraphQL syntax is designed to be very explicit for the sake of clarity and robustness in API design. Skipping the argument name could lead to ambiguities, especially when you have multiple arguments.

# Example of Correct vs. Incorrect Usage

Correct: login(input: LoginInput!): User
Here, input is the name of the argument, and LoginInput is its type.

Incorrect: login(LoginInput!): User
This syntax is missing an argument name, which is necessary for GraphQL to parse and execute the query correctly.

# Summary

The input in login(input: LoginInput!): User serves as a placeholder for the actual data you will pass to the mutation. This structure not only adheres to GraphQL's requirements for named arguments but also enhances the API's flexibility and clarity by explicitly defining what each argument represents and how it should be structured. This method makes your API easier to understand and integrate with, particularly when changes are made to the input structure or when documenting the API for developers.

# Authentication

when we have a user that wants to sign up or login they will send a request to our graphql API ( we will use a package calld passport.js in the local authentication strategy - which basically means that the user is going to send the username and password and depending on that fields we sign up the user or login the user) and if this is successfully completed passport.js will try to serialize the user object, and store it into our session store (mongodb)

# what is serialization:

serialization is the process of converting the user object into a format that can be stored and retrieved easily. in our case in mongodb its typically be the user id. in this way we are able to uniquely identify the user, and we know now that this specific user is authenticated. and once we store it in our session store we are going to create an HTTP only cookie from the server and send it to the client, the name of this is typically something like connect.sid
which stands for session id. and the subsequent user request will send the HTTP only cookie along with the request headers. and then our server will compare that cookie with our session store and if they match then this user is authenticated.

# what and why passport js:

passport.js is an authentication middleware for node.js
and is extremly flexible and modular.
theres alot of strategies to passport.js ( like google authentication , github and more ..) the local strategy implemantation in the docs is mostly for rest API, and if we want to modify it for graphql it would be kind of a pain, which you could still do , but theres a package that will be using that makes it easier called graphql-passport ( HTTP only means nobody can access this via JavaScript)

# Apollo client setup

to connect our react app with our graphql backend we will use apollo client. he shows the official graphql docs and there they use the
startStandaloneServer which is different from how we did this ( this is because we use the expressMiddlware api reference which basically is an alternative to do it with express so that we could easily use the passport.js and other packages and fetures that we could get and benefit from express )

עצרתי 3:09:00

https://www.youtube.com/watch?v=Vr-QHtbmd38
