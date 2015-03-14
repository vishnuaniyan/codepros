module.exports = {
  changelog: {
    sample: {
      options: {
        dest: 'release-notes.txt',
        template: '{{date}}\n\n{{> features}}{{> fixes}}'
      }
    }
  },
}