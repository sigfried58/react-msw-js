// import { rest } from 'msw';

// const apiUrl = import.meta.env.VITE_APP_API_URL
// const authUrl = import.meta.env.VITE_APP_AUTH_URL

// let sleep
// if (import.meta.env.CI) {
//   sleep = () => Promise.resolve()
// } else if (import.meta.env.NODE_ENV === 'test') {
//   sleep = () => Promise.resolve()
// } else {
//   sleep = (
//     t = Math.random() * ls('__bookshelf_variable_request_time__', 400) +
//       ls('__bookshelf_min_request_time__', 400),
//   ) => new Promise(resolve => setTimeout(resolve, t))
// }

// function ls(key, defaultVal) {
//   const lsVal = window.localStorage.getItem(key)
//   let val
//   if (lsVal) {
//     val = Number(lsVal)
//   }
//   return Number.isFinite(val) ? val : defaultVal
// }

// export const handlers = [
//   rest.post(`${authUrl}/login`, async (req, res, ctx) => {
//     const { username } = req.body
//     const user = { "user": { "id": "5859629", "username": username, "token": "NTg1OTYyOQ==" } }
//     return res(ctx.json({ user }))
//   }),
//   rest.get(`${apiUrl}/bootstrap`, async (req, res, ctx) => {
//     const user = { "user": { "id": "5859629", "username": "19", "token": "NTg1OTYyOQ==" } }
//     const token = getToken(req)
//     // return res(ctx.status(500), ctx.json({ error: { message: 'credencial invalida' } }))
//     return res(ctx.json({ user: { ...user, token } }))
//   }),
// ].map(handler => {
//   const originalResolver = handler.resolver
//   handler.resolver = async function resolver(req, res, ctx) {
//     try {
//       if (shouldFail(req)) {
//         throw new Error('Request failure (for testing purposes).')
//       }
//       const result = await originalResolver(req, res, ctx)
//       return result
//     } catch (error) {
//       const status = error.status || 500
//       return res(
//         ctx.status(status),
//         ctx.json({ status, message: error.message || 'Unknown Error' }),
//       )
//     } finally {
//       await sleep()
//     }
//   }
//   return handler
// });

// function shouldFail(req) {
//   if (JSON.stringify(req.body)?.includes('FAIL')) return true
//   if (req.url.searchParams.toString()?.includes('FAIL')) return true
//   if (process.env.NODE_ENV === 'test') return false
//   const failureRate = Number(
//     window.localStorage.getItem('__bookshelf_failure_rate__') || 0,
//   )
//   if (Math.random() < failureRate) return true
//   if (requestMatchesFailConfig(req)) return true

//   return false
// }

// function requestMatchesFailConfig(req) {
//   function configMatches({ requestMethod, urlMatch }) {
//     return (
//       (requestMethod === 'ALL' || req.method === requestMethod) &&
//       match(urlMatch, req.url.pathname).matches
//     )
//   }
//   try {
//     const failConfig = JSON.parse(
//       window.localStorage.getItem('__bookshelf_request_fail_config__') || '[]',
//     )
//     if (failConfig.some(configMatches)) return true
//   } catch (error) {
//     window.localStorage.removeItem('__bookshelf_request_fail_config__')
//   }
//   return false
// }

// const getToken = req => req.headers.get('Authorization')?.replace('Bearer ', '')

// async function getUser(req) {
//   const token = getToken(req)
//   if (!token) {
//     const error = new Error('A token must be provided')
//     error.status = 401
//     throw error
//   }
//   let userId
//   try {
//     userId = atob(token)
//   } catch (e) {
//     const error = new Error('Invalid token. Please login again.')
//     error.status = 401
//     throw error
//   }
//   const user = await usersDB.read(userId)
//   return user
// }

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
