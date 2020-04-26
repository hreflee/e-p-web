const fs = require('fs');
const chokidar = require('chokidar');
const Path = require('path');

const SOURCE_DIR = './src/apis/types';
const TARGET_DIR = 'C:\\Users\\hflee\\playground\\guided-study-projects\\e-p-view\\src\\apis\\types\\';

// One-liner for current directory
chokidar.watch(SOURCE_DIR).on('change', (path) => {
    const fileName = Path.parse(path).base;
    console.log(path);
    fs.copyFileSync(path, TARGET_DIR + fileName);
});