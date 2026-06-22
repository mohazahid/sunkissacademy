const fs = require('fs');
const path = require('path');

const BUILD = path.join(__dirname, 'build');

// Clean and recreate build dir
fs.rmSync(BUILD, { recursive: true, force: true });
fs.mkdirSync(BUILD, { recursive: true });

// Generate index.html from source with path replacement
const sourceFile = path.join(__dirname, 'Sunkiss Academy.html');
let htmlContent = fs.readFileSync(sourceFile, 'utf-8');
htmlContent = htmlContent.replace(/\.\.\/src\/img\//g, 'src/img/');
fs.writeFileSync('index.html', htmlContent);

// Copy static files
fs.copyFileSync('index.html', path.join(BUILD, 'index.html'));
fs.copyFileSync('support.js', path.join(BUILD, 'support.js'));
fs.copyFileSync('CNAME', path.join(BUILD, 'CNAME'));

// Copy src/img folder
const srcImg = path.join(__dirname, 'src', 'img');
const destImg = path.join(BUILD, 'src', 'img');
fs.mkdirSync(destImg, { recursive: true });
for (const file of fs.readdirSync(srcImg)) {
  fs.copyFileSync(path.join(srcImg, file), path.join(destImg, file));
}

console.log('Build complete → build/');
