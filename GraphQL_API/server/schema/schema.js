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
} = require('graphql');

const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString },
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        task: {
            type: TaskType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                const findTask = lodash.find(tasks, task => task.id === args.id);
                // Logic to get data from db / other source
                return findTask;
            }
        }
    }
});

const { GraphQLSchema } = require('graphql');

// Export the schema
module.exports = new GraphQLSchema({
    query: RootQuery
});
