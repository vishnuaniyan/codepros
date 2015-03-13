module.exports = {
  dynamic: {
  	options: {
          optimizationLevel: 7 ,//Compression level
           progressive: true , //Lossless or progressive conversion
           interlaced: true //Interlace gif for progressive rendering.
        },
    files: [{
      expand: true,
      cwd: '_/img/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'build/img/'
    }]
  }
}




// module.exports = {
// png: {
//         options: {
//           optimizationLevel: 7 //Compression level
//         },
//         files: [{
//           expand: true, //Dynamic expansion
//           cwd: 'images/',
//           src: ['**/*.png'],
//           dest: 'images/',
//           ext: '.png'
//         }]
//       },
// jpg: {
//     options: {
//     progressive: true //Lossless or progressive conversion
//     },
//     files: [{
//       expand: true,
//       cwd: 'images/',
//       src: ['**/*.jpg'],
//       dest: 'images/',
//       ext: '.jpg'
//     }]
//   },
// gif: {
//     options: {
//     interlaced: true //Interlace gif for progressive rendering.
//     },
//     files: [{
//       expand: true,
//       cwd: 'images/',
//       src: ['**/*.gif'],
//       dest: 'images/',
//       ext: '.gif'
//     }]
//   },
// }