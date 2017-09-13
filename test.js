// // var a = 1;
// // console.log(a);
// // console.log(new Error('aaaaa'));
// // var argv = process.argv();
// // console.log(argv);



// // var argvs = process.argv.slice(2);
// // console.log(argvs.toString());
// var frames = [];
// frames[frames.length] = `
//     qeqwe
// `;
// frames[frames.length] = `
//     sfsdfsdg
// `;

// var fps = 1;
// var current = 0;
// var render = () => {
//     var size = process.stdout.getWindowSize()[1];
//     for (var i = 0; i < size; i++) {
//         process.stdout.write('\r\n');
//     }
//     if (current === frames.length) {
//         current = 0;
//     }
//     process.stdout.write(frames[current++]);
// }
// setInterval(function() { render() }, 1000 / fps);

var fs = require('fs');






var frames = [];

for (var i = 1; i < 7; i++) {
    frames[frames.length] = fs.readFileSync(`./frames/${i}.txt`, 'utf8');
}

var fps = 60;
var index = 0;
var render = () => {
    //清空控制太
    var size = process.stdout.getWindowSize()[1];
    for (var i = 0; i < size; i++) {
        process.stdout.write('\n');
    }

    if (index == frames.length) {
        index = 0;
    }
    process.stdout.write(frames[index++]);

};
setInterval(render, 1000 / fps)