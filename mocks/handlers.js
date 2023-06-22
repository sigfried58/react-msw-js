import {rest} from 'msw';

export const handlers = [
  rest.get(
    'https://api.dictionaryapi.dev/api/v2/entries/en/hello',
    (req, res, ctx) => {
      const data = [
        {name: 'MSW', url: 'https://mswjs.io/'},
        {name: 'Tailwind CSS', url: 'https://tailwindcss.com/'},
      ];

      return res(ctx.status(200), ctx.json(data));
    },
  ),
];
