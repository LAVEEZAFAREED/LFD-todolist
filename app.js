#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'What do you want in your list'
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'What do you want to add more in your list',
            default: 'false'
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
