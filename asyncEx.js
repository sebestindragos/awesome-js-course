var fs = require('fs');

/**
 * Callbacks
 */
function myReadFile (path, callback) {
  fs.readFile(path, 'utf8', function (err, content) {
    if (err) {
      callback(err);
    } else {
      callback(null, content);
    }
  });
}

// test
myReadFile('./index.html', function (err, content) {
  if (err) return;

  console.log(content);
});

// // read from two files
// myReadFile('./index.html', function (err, content) {
//   if (err) return;

//   console.log(content);
//   myReadFile('./readme.md', function (err, content) {
//     if (err) return;

//     console.log(content);
//   });
// });

/**
 * Promises
 */
function myReadFilePromise (path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, 'utf8', function (err, content) {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
}

// test
// myReadFilePromise('./index.html')
//   .then(function (content) {
//     console.log(content);
//   })
//   .catch(function () {

//   });

// read from two files
// myReadFilePromise('./index.html')
//   .then(function (content) {
//     console.log(content);
//     return myReadFilePromise('readme.md');
//   })
//   .then(function (content) {
//     console.log(content);
//   })
//   .catch(function () {

//   });

/**
 * Async/await
 */
async function myReadFileAsync (path) {
  let content = await myReadFilePromise('./index.html');
  return content;
}

// myReadFileAsync()
//   .then(function (content) {
//     console.log(content);
//     console.log('We are done for today');
//   })
//   .catch(function () {
//     console.error('Seems like we\'re gonna be here for a while');
//   });
