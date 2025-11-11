const lodash = require('lodash');
const express = require('express');

let dummyData1 = {
    id: "1",
    title: "Create your first webpage",
    weight: 1,
    description: "Create your first HTML file 0-index.html with: -Add the doctype on the first line (without any comment) -After the doctype, open and close a html tag Open your file in your browser (the page should be blank)"
};

let dummyData2 = {
    id: "2",
    title: "Structure your webpage",
    weight: 1,
    description: "Copy the content of 0-index.html into 1-index.html Create the head and body sections inside the html tag, create the head and body tags (empty) in this order"
};

let tasks = [dummyData1, dummyData2];


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
} = require('GraphQL');

let TaskType {
    name: 'task',
    fields: {
        id: GraphQLID,
        title: GraphQLString,
        weight: GraphQLInt,
        description: GraphQLString,
    }
}

type RootQueryType {
    name: 'RootQueryType',
    fields: {
        task: {
            type: TaskType,
            args: { id: GraphQLID },
            resolve(parent, args) {
                const findTask = _.find(tasks, task => task.id === args.id);
                // Logic to get data from db / other source
                return findTask;
            }
        }
    }
};

// Export the schema and resolvers
module.exports = {
    TaskType,
    RootQuery
};

