export const contentfulResponse = {
  sys: {
    type: 'Array',
  },
  total: 2,
  skip: 0,
  limit: 100,
  items: [
    {
      fields: {
        title: 'This is the title field for Project 1',
        description: 'This is the description field Project 1',
        article: '# Project 1\n\nThis is the article field.',
        images: [
          {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'project1small',
            },
          },
          {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'project1medium',
            },
          },
          {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'project1large',
            },
          },
          {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'project1extralarge',
            },
          },
        ],
        thumbnail: {
          sys: {
            type: 'Link',
            linkType: 'Asset',
            id: 'project1thumbnail',
          },
        },
        date: '2017-12-01T00:00+02:00',
      },
    },
    {
      fields: {
        title: 'This is the title field for Project 2',
        description: 'This is the description field Project 2',
        article: '# Project 2\n\nThis is the article field.',
        images: [
          {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'project2small',
            },
          },
          {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'project2medium',
            },
          },
          {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'project2large',
            },
          },
          {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'project2extralarge',
            },
          },
        ],
        thumbnail: {
          sys: {
            type: 'Link',
            linkType: 'Asset',
            id: 'project2thumbnail',
          },
        },
        date: '2017-12-01T00:00+02:00',
      },
    },
  ],
  includes: {
    Asset: [
      {
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '1tymefars1bj',
            },
          },
          id: 'project1large',
          type: 'Asset',
          createdAt: '2018-06-04T14:22:33.149Z',
          updatedAt: '2018-06-07T18:30:32.670Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          locale: 'en-US',
        },
        fields: {
          title: 'Presentation showing how this project looks on mobile, tablet and desktop screens',
          file: {
            url: '/large-l.png',
            details: {
              size: 60735,
              image: {
                width: 678,
                height: 452,
              },
            },
            fileName: 'large-l.png',
            contentType: 'image/png',
          },
        },
      },
      {
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '1tymefars1bj',
            },
          },
          id: 'project1small',
          type: 'Asset',
          createdAt: '2018-06-04T14:04:42.658Z',
          updatedAt: '2018-06-07T18:29:10.380Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 4,
          locale: 'en-US',
        },
        fields: {
          title: 'Presentation showing how this project looks on mobile, tablet and desktop screens',
          file: {
            url: '/small-s.png',
            details: {
              size: 12728,
              image: {
                width: 240,
                height: 160,
              },
            },
            fileName: 'small-s.png',
            contentType: 'image/png',
          },
        },
      },
      {
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '1tymefars1bj',
            },
          },
          id: 'project1extralarge',
          type: 'Asset',
          createdAt: '2018-06-04T14:22:56.555Z',
          updatedAt: '2018-06-07T18:30:55.676Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          locale: 'en-US',
        },
        fields: {
          title: 'Presentation showing how this project looks on mobile, tablet and desktop screens',
          file: {
            url: '/extra-large-xl.png',
            details: {
              size: 92965,
              image: {
                width: 914,
                height: 610,
              },
            },
            fileName: 'extra-large-xl.png',
            contentType: 'image/png',
          },
        },
      },
      {
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '1tymefars1bj',
            },
          },
          id: 'project1medium',
          type: 'Asset',
          createdAt: '2018-06-04T14:21:09.848Z',
          updatedAt: '2018-06-07T18:30:05.193Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          locale: 'en-US',
        },
        fields: {
          title: 'Presentation showing how this project looks on mobile, tablet and desktop screens',
          file: {
            url: '/medium-m.png',
            details: {
              size: 22495,
              image: {
                width: 345,
                height: 230,
              },
            },
            fileName: 'medium-m.png',
            contentType: 'image/png',
          },
        },
      },
      {
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '1tymefars1bj',
            },
          },
          id: 'project1thumbnail',
          type: 'Asset',
          createdAt: '2018-06-04T14:21:09.848Z',
          updatedAt: '2018-06-07T18:30:05.193Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          locale: 'en-US',
        },
        fields: {
          title: 'Presentation showing how this project looks on mobile, tablet and desktop screens',
          file: {
            url: '/medium-m.png',
            details: {
              size: 22495,
              image: {
                width: 345,
                height: 230,
              },
            },
            fileName: 'medium-m.png',
            contentType: 'image/png',
          },
        },
      },
      {
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '1tymefars1bj',
            },
          },
          id: 'project2large',
          type: 'Asset',
          createdAt: '2018-06-04T14:22:33.149Z',
          updatedAt: '2018-06-07T18:30:32.670Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          locale: 'en-US',
        },
        fields: {
          title: 'Presentation showing how this project looks on mobile, tablet and desktop screens',
          file: {
            url: '/large-l.png',
            details: {
              size: 60735,
              image: {
                width: 678,
                height: 452,
              },
            },
            fileName: 'large-l.png',
            contentType: 'image/png',
          },
        },
      },
      {
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '1tymefars1bj',
            },
          },
          id: 'project2small',
          type: 'Asset',
          createdAt: '2018-06-04T14:04:42.658Z',
          updatedAt: '2018-06-07T18:29:10.380Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 4,
          locale: 'en-US',
        },
        fields: {
          title: 'Presentation showing how this project looks on mobile, tablet and desktop screens',
          file: {
            url: '/small-s.png',
            details: {
              size: 12728,
              image: {
                width: 240,
                height: 160,
              },
            },
            fileName: 'small-s.png',
            contentType: 'image/png',
          },
        },
      },
      {
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '1tymefars1bj',
            },
          },
          id: 'project2extralarge',
          type: 'Asset',
          createdAt: '2018-06-04T14:22:56.555Z',
          updatedAt: '2018-06-07T18:30:55.676Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          locale: 'en-US',
        },
        fields: {
          title: 'Presentation showing how this project looks on mobile, tablet and desktop screens',
          file: {
            url: '/extra-large-xl.png',
            details: {
              size: 92965,
              image: {
                width: 914,
                height: 610,
              },
            },
            fileName: 'extra-large-xl.png',
            contentType: 'image/png',
          },
        },
      },
      {
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '1tymefars1bj',
            },
          },
          id: 'project2medium',
          type: 'Asset',
          createdAt: '2018-06-04T14:21:09.848Z',
          updatedAt: '2018-06-07T18:30:05.193Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          locale: 'en-US',
        },
        fields: {
          title: 'Presentation showing how this project looks on mobile, tablet and desktop screens',
          file: {
            url: '/medium-m.png',
            details: {
              size: 22495,
              image: {
                width: 345,
                height: 230,
              },
            },
            fileName: 'medium-m.png',
            contentType: 'image/png',
          },
        },
      },
      {
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '1tymefars1bj',
            },
          },
          id: 'project2thumbnail',
          type: 'Asset',
          createdAt: '2018-06-04T14:21:09.848Z',
          updatedAt: '2018-06-07T18:30:05.193Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          locale: 'en-US',
        },
        fields: {
          title: 'Presentation showing how this project looks on mobile, tablet and desktop screens',
          file: {
            url: '/medium-m.png',
            details: {
              size: 22495,
              image: {
                width: 345,
                height: 230,
              },
            },
            fileName: 'medium-m.png',
            contentType: 'image/png',
          },
        },
      },
    ],
  },
};
