import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border p-3 m-5 shadow rounded'>
                <h3><strong>Question 1: </strong>Difference between javascript and nodejs</h3>
                <p><strong>Answer: </strong>1. JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses.
2. JavaScript is normally used for any client-side activity for one web application. Node JS mainly used for accessing or running any operating system for non-blocking operation. 
3. JavaScript programming is very easy to write, and put any running environment means proper browser. Whereas Node JS only support the V8 engine, which googles chrome specific. But whether it supports the V8 engine, written JavaScript code can able to run in any environment. So there has no browser-specific constraint on it.
4. JavaScript is normally following Java Programming language standard. There may have some different way of writing code, but at the same time, we can say it following the Java Programming language standard. Whereas node JS is written in C++ and provides a V8 engine base browser javascript running engine, it helps us run a written javascript program in any browser environment.
5. For accessing any operating system, specific non-blocking task JavaScript has some specific object, but all of them are operating system specific. Node JS is very much familiar to create a specific binding with the file system and allows the developer to read or sometimes write on disk.</p>
            </div>
            <div className='border p-3 m-5 shadow rounded'>
                <h3><strong>Question 2: </strong>When should you use nodejs and when should you use mongodb</h3>
                <p><strong>Answer: </strong>Using MongoDB: But, MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data.
                <br/>Using NodeJS: Shortly we can say, NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.
                <br/>So we can say MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.</p>
            </div>
            <div className='border p-3 m-5 shadow rounded'>
                <h3><strong>Question 3: </strong>Differences between sql and nosql databases.</h3>
                <p><strong>Answer: </strong>SQL databases are relational, NoSQL databases are non-relational.
SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className='border p-3 m-5 shadow rounded'>
                <h3><strong>Question 4: </strong>What is the purpose of jwt and how does it work</h3>
                <p><strong>Answer: </strong>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br/>
                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

<br/>Once decoded, you will get two JSON strings:
<br/>1.The header and the payload.
<br/>2.The signature. </p>
            </div>
        </div>
    );
};

export default Blog;