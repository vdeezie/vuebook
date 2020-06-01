  
module.exports = {
  title: 'RantsofJoy',
  description: 'A collection of Joy Isi Bewaji Rants',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rants', ariaLabel: 'Language Menu',
        items: [
          { text: '2020', link: '/Rants/2020/' },
          { text: '2019', link: '/Rants/2019/' },
          { text: '2018', link: '/Rants/2018/' },
          { text: '2017', link: '/Rants/2017/' },
          { text: '2016', link: '/Rants/2016/' },
          { text: '2015', link: '/Rants/2015/' },
          { text: '2014', link: '/Rants/2014/' }
        ] },



      { text: 'Books', link: '/books/' },
      { text: 'Talks', link: 'https://google.com' }
    ],

    sidebar: {
      '/Rants/2020/': [
        '',     /* /foo/ */
        'Rant2032',  /* /foo/one.html */
        'Rant2044'
        
      ]
  }
  }
}
