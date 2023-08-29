# Node-CLI Directory Manager (Available on npm)

![CLI](<./Screenshot 2023-08-29 233604.png>)

**Node-CLI Directory Manager** is a versatile Node.js CLI tool designed to help you efficiently manage directories and files right from the command line. Whether you need to explore the contents of a directory, create new directories, or generate empty files, this CLI tool has got you covered.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Contributing](#contributing)

## Features

**Node-CLI Directory Manager** offers the following key features:

- **Directory Listing:** Quickly view the contents of a directory, including filenames, creation timestamps, and file sizes.

- **Directory Creation:** Easily create new directories in your filesystem with a single command.

- **File Creation:** Generate empty files in the directory of your choice, simplifying your file creation workflow.
  
- >More featured to be added soon

## Installation

You can install **Node-CLI Directory Manager** using npm, which allows you to access it from anywhere in your terminal:

```bash
npm i nodejs-cli-oj
```
## Usage
**To get started with Node-CLI Directory Manager, open your terminal and use the following command:**
```bash
node-cli-directory-manager [command]
```
>Replace [command] with one of the available commands listed in the next section.
## Commands

**Node-CLI Directory Manager** supports the following commands:

- `ls` or `--ls [directory]`: List the contents of a directory. If `[directory]` is omitted, the current directory is used.

- `mkdir` or `--mkdir [directory]`: Create a new directory. Specify the desired directory name as `[directory]`.

- `touch` or `--touch [file]`: Generate an empty file. Provide the file name as `[file]`.

For example, to list the contents of a specific directory, use:

```bash
node-cli-directory-manager ls /path/to/directory
```
## Contributing

Contributions to **Node-CLI Directory Manager** are welcome! If you have any ideas for improvements, new features, or bug fixes, feel free to open an issue or submit a pull request. Please follow our [contributing guidelines](link-to-contributing-guidelines) for details.


