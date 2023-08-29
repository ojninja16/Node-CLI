#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const figlet = require("figlet");
const fs = require("fs");
const path = require("path");
const { Command } = require("commander");
const colors = require("colors");
// import chalk from 'chalk';
const program = new Command();
console.log(colors.green(figlet.textSync("NODE-CLI Dir Manager!!")));
program.version('1.0.0').description("Node js cli for managing a directory")
    .option("-l,--ls [value]", 'List of Directory contents')
    .option("-m,--mkdir [value]", 'Create a directory')
    .option("-t,--touch [value]", 'Create a file')
    .parse(process.argv);
const options = program.opts();
//Function to list the file contents of a directory
function listDirContents(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dirContents = yield fs.promises.readdir(filePath);
            const detailedDirContents = dirContents.map((file) => __awaiter(this, void 0, void 0, function* () {
                let fileStats = yield fs.promises.lstat(path.resolve(filePath, file));
                return {
                    Filename: colors.green(file),
                    creationTime: fileStats.birthtime,
                    'size(kb)': fileStats.size
                };
            }));
            const filedetails = yield Promise.all(detailedDirContents);
            console.table(filedetails);
        }
        catch (err) {
            console.log(colors.red.bgWhite("An Error Occurred while listing the directory contents: "), err);
        }
    });
}
function createDir(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
            console.log(colors.green("Directory Created Successfully"));
        }
    });
}
function createFile(filePath) {
    fs.openSync(filePath, 'w');
    console.log(colors.green("An empty File has been Created Successfully"));
}
if (options.ls) {
    const filepath = typeof options.ls === 'string' ? options.ls : __dirname;
    listDirContents(filepath);
}
if (options.mkdir) {
    createDir(path.resolve(__dirname, options.mkdir));
}
if (options.touch) {
    createFile(path.resolve(__dirname, options.touch));
}
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
//# sourceMappingURL=index.js.map