const mockData = [
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-19T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-19T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-19T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-20T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-20T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-05-20T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3187237556010000"',
    id: '111vmlbl7p8gmc0fbf5u107p8u_20200709T070000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMDA3MDlUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T15:47:59.000Z',
    updated: '2020-07-01T15:52:58.005Z',
    summary: 'React Native Tokyo',
    description:
      "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
    location: 'Tokyo, Japan',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-07-09T09:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-07-09T10:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '111vmlbl7p8gmc0fbf5u107p8u',
    originalStartTime: {
      dateTime: '2020-07-09T09:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '111vmlbl7p8gmc0fbf5u107p8u@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/ceo-behe-ssp',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/ceo-behe-ssp',
          label: 'meet.google.com/ceo-behe-ssp',
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/ceo-behe-ssp?pin=2641490783465',
          pin: '2641490783465',
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081617770',
          label: '+49 40 8081617770',
          pin: '889553795',
        },
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet',
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png',
      },
      conferenceId: 'ceo-behe-ssp',
    },
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3187221506816000"',
    id: '48m09le389vijbqfs2mcr6i87q_20200728T070000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMDA3MjhUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T13:39:01.000Z',
    updated: '2020-07-01T13:39:13.408Z',
    summary: 'Node Gang',
    description:
      "We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",
    location: 'Sydney NSW, Australia',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-07-28T09:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-07-28T10:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '48m09le389vijbqfs2mcr6i87q',
    originalStartTime: {
      dateTime: '2020-07-28T09:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '48m09le389vijbqfs2mcr6i87q@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/wdc-wutt-tji',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/wdc-wutt-tji',
          label: 'meet.google.com/wdc-wutt-tji',
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/wdc-wutt-tji?pin=3796108774207',
          pin: '3796108774207',
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081618974',
          label: '+49 40 8081618974',
          pin: '170634768',
        },
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet',
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png',
      },
      conferenceId: 'wdc-wutt-tji',
    },
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3187232532588000"',
    id: '20c51je3q99mnolr1rp06dt9jd_20200728T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMDA3MjhUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T14:17:12.000Z',
    updated: '2020-07-01T15:11:06.294Z',
    summary: 'Use jQuery, bring in interactivity easily ',
    description:
      'Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.',
    location: 'Mumbai, Maharashtra, India',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-07-28T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-07-28T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '20c51je3q99mnolr1rp06dt9jd',
    originalStartTime: {
      dateTime: '2020-07-28T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '20c51je3q99mnolr1rp06dt9jd@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/nns-htdr-ijk',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/nns-htdr-ijk',
          label: 'meet.google.com/nns-htdr-ijk',
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/nns-htdr-ijk?pin=9302146320475',
          pin: '9302146320475',
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081618430',
          label: '+49 40 8081618430',
          pin: '810644618',
        },
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet',
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png',
      },
      conferenceId: 'nns-htdr-ijk',
    },
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3187232583216000"',
    id: '3m5n6mcl1aqrdsg6k5vkr6to5p_20200728T163000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMDA3MjhUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T13:54:32.000Z',
    updated: '2020-07-01T15:11:31.608Z',
    summary: 'Build Your First App with JavaScript',
    description:
      "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
    location: 'Amsterdam, Netherlands',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-07-28T18:30:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-07-28T19:30:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3m5n6mcl1aqrdsg6k5vkr6to5p',
    originalStartTime: {
      dateTime: '2020-07-28T18:30:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3m5n6mcl1aqrdsg6k5vkr6to5p@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/vxc-jcvs-juv',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/vxc-jcvs-juv',
          label: 'meet.google.com/vxc-jcvs-juv',
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/vxc-jcvs-juv?pin=7178471106778',
          pin: '7178471106778',
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081619886',
          label: '+49 40 8081619886',
          pin: '257304091',
        },
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet',
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png',
      },
      conferenceId: 'vxc-jcvs-juv',
    },
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200622T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-22T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-22T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-22T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200623T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-23T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-23T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-23T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
];

export { mockData };
