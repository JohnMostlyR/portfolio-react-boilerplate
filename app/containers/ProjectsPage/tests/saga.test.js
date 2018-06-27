/**
 * Tests for ProjectsPage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { contentfulResponse } from './contentfulResponse';
import { parsedContentfulData } from './parsedContentfulData';

import { LOAD_CONTENT } from '../constants';
import { contentLoaded, contentLoadingError } from '../actions';

import contentfulData, { getContent, parseContent } from '../saga';

const locale = 'en';

/* eslint-disable redux-saga/yield-effects */
describe('getContent Saga', () => {
  let getContentGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getContentGenerator = getContent();

    const selectDescriptor = getContentGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getContentGenerator.next(locale).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the contentLoaded action if it requests the data successfully', () => {
    const response = contentfulResponse;
    const putDescriptor = getContentGenerator.next(response).value;
    expect(putDescriptor).toEqual(
      put(contentLoaded(parsedContentfulData, locale)),
    );
  });

  it('should call the contentLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getContentGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(contentLoadingError(response)));
  });
});

describe('contentfulData Saga', () => {
  const contentfulDataSaga = contentfulData();

  it('should start task to watch for LOAD_CONTENT action', () => {
    const takeLatestDescriptor = contentfulDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_CONTENT, getContent));
  });
});

describe('parseContent', () => {
  it('should return an empty Array when no data is provided', () => {
    const parsedContent = parseContent();
    expect(parsedContent).toBeInstanceOf(Array);
  });

  it('should sort items from newest to oldest', () => {
    let rawData = {
      sys: {
        type: 'Array',
      },
      items: [
        {
          fields: {
            title: 'This is the title field for Project 1',
            description: 'This is the description field Project 1',
            article: '# Project 1\n\nThis is the article field.',
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
              title:
                'Presentation showing how this project looks on mobile, tablet and desktop screens',
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
              title:
                'Presentation showing how this project looks on mobile, tablet and desktop screens',
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

    let parsedData = [
      {
        article: '# Project 1\n\nThis is the article field.',
        date: '2017-12-01T00:00+02:00',
        description: 'This is the description field Project 1',
        images: [],
        thumbnail: {
          file: {
            contentType: 'image/png',
            details: {
              image: {
                height: 230,
                width: 345,
              },
              size: 22495,
            },
            fileName: 'medium-m.png',
            url: '/medium-m.png',
          },
          title:
            'Presentation showing how this project looks on mobile, tablet and desktop screens',
        },
        title: 'This is the title field for Project 1',
      },
      {
        article: '# Project 2\n\nThis is the article field.',
        date: '2017-12-01T00:00+02:00',
        description: 'This is the description field Project 2',
        images: [],
        thumbnail: {
          file: {
            contentType: 'image/png',
            details: {
              image: {
                height: 230,
                width: 345,
              },
              size: 22495,
            },
            fileName: 'medium-m.png',
            url: '/medium-m.png',
          },
          title:
            'Presentation showing how this project looks on mobile, tablet and desktop screens',
        },
        title: 'This is the title field for Project 2',
      },
    ];

    expect(parseContent(rawData)).toEqual(parsedData);

    rawData = {
      sys: {
        type: 'Array',
      },
      items: [
        {
          fields: {
            title: 'This is the title field for Project 1',
            description: 'This is the description field Project 1',
            article: '# Project 1\n\nThis is the article field.',
            thumbnail: {
              sys: {
                type: 'Link',
                linkType: 'Asset',
                id: 'project1thumbnail',
              },
            },
            date: '2018-12-01T00:00+02:00',
          },
        },
        {
          fields: {
            title: 'This is the title field for Project 2',
            description: 'This is the description field Project 2',
            article: '# Project 2\n\nThis is the article field.',
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
              title:
                'Presentation showing how this project looks on mobile, tablet and desktop screens',
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
              title:
                'Presentation showing how this project looks on mobile, tablet and desktop screens',
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

    parsedData = [
      {
        article: '# Project 1\n\nThis is the article field.',
        date: '2018-12-01T00:00+02:00',
        description: 'This is the description field Project 1',
        images: [],
        thumbnail: {
          file: {
            contentType: 'image/png',
            details: {
              image: {
                height: 230,
                width: 345,
              },
              size: 22495,
            },
            fileName: 'medium-m.png',
            url: '/medium-m.png',
          },
          title:
            'Presentation showing how this project looks on mobile, tablet and desktop screens',
        },
        title: 'This is the title field for Project 1',
      },
      {
        article: '# Project 2\n\nThis is the article field.',
        date: '2017-12-01T00:00+02:00',
        description: 'This is the description field Project 2',
        images: [],
        thumbnail: {
          file: {
            contentType: 'image/png',
            details: {
              image: {
                height: 230,
                width: 345,
              },
              size: 22495,
            },
            fileName: 'medium-m.png',
            url: '/medium-m.png',
          },
          title:
            'Presentation showing how this project looks on mobile, tablet and desktop screens',
        },
        title: 'This is the title field for Project 2',
      },
    ];

    expect(parseContent(rawData)).toEqual(parsedData);

    rawData = {
      sys: {
        type: 'Array',
      },
      items: [
        {
          fields: {
            title: 'This is the title field for Project 1',
            description: 'This is the description field Project 1',
            article: '# Project 1\n\nThis is the article field.',
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
            thumbnail: {
              sys: {
                type: 'Link',
                linkType: 'Asset',
                id: 'project2thumbnail',
              },
            },
            date: '2018-12-01T00:00+02:00',
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
              title:
                'Presentation showing how this project looks on mobile, tablet and desktop screens',
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
              title:
                'Presentation showing how this project looks on mobile, tablet and desktop screens',
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

    parsedData = [
      {
        article: '# Project 2\n\nThis is the article field.',
        date: '2018-12-01T00:00+02:00',
        description: 'This is the description field Project 2',
        images: [],
        thumbnail: {
          file: {
            contentType: 'image/png',
            details: {
              image: {
                height: 230,
                width: 345,
              },
              size: 22495,
            },
            fileName: 'medium-m.png',
            url: '/medium-m.png',
          },
          title:
            'Presentation showing how this project looks on mobile, tablet and desktop screens',
        },
        title: 'This is the title field for Project 2',
      },
      {
        article: '# Project 1\n\nThis is the article field.',
        date: '2017-12-01T00:00+02:00',
        description: 'This is the description field Project 1',
        images: [],
        thumbnail: {
          file: {
            contentType: 'image/png',
            details: {
              image: {
                height: 230,
                width: 345,
              },
              size: 22495,
            },
            fileName: 'medium-m.png',
            url: '/medium-m.png',
          },
          title:
            'Presentation showing how this project looks on mobile, tablet and desktop screens',
        },
        title: 'This is the title field for Project 1',
      },
    ];

    expect(parseContent(rawData)).toEqual(parsedData);
  });

  it('should handle case where a thumbnail image is not found in ASSETS', () => {
    const rawData = {
      sys: {
        type: 'Array',
      },
      items: [
        {
          fields: {
            title: 'This is the title field for Project 1',
            description: 'This is the description field Project 1',
            article: '# Project 1\n\nThis is the article field.',
            date: '2017-12-01T00:00+02:00',
          },
        },
      ],
      includes: {
        Asset: [],
      },
    };

    const parsedData = [
      {
        article: '# Project 1\n\nThis is the article field.',
        date: '2017-12-01T00:00+02:00',
        description: 'This is the description field Project 1',
        images: [],
        thumbnail: {},
        title: 'This is the title field for Project 1',
      },
    ];

    expect(parseContent(rawData)).toEqual(parsedData);
  });

  it('should handle case where no images are provided', () => {
    const rawData = {
      sys: {
        type: 'Array',
      },
      items: [
        {
          fields: {
            title: 'This is the title field for Project 1',
            description: 'This is the description field Project 1',
            article: '# Project 1\n\nThis is the article field.',
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
              title:
                'Presentation showing how this project looks on mobile, tablet and desktop screens',
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

    const parsedData = [
      {
        article: '# Project 1\n\nThis is the article field.',
        date: '2017-12-01T00:00+02:00',
        description: 'This is the description field Project 1',
        images: [],
        thumbnail: {
          file: {
            contentType: 'image/png',
            details: {
              image: {
                height: 230,
                width: 345,
              },
              size: 22495,
            },
            fileName: 'medium-m.png',
            url: '/medium-m.png',
          },
          title:
            'Presentation showing how this project looks on mobile, tablet and desktop screens',
        },
        title: 'This is the title field for Project 1',
      },
    ];

    expect(parseContent(rawData)).toEqual(parsedData);
  });
});
