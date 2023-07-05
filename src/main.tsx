// import ReactDOM from 'react-dom/client';
// import {App} from './App.jsx';
// import {AppProviders} from './context/AppProviders.jsx';
// import './index.css';

// const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the rootelement');
// const root = ReactDOM.createRoot(rootElement);

// // Setup MSW mock server in development
// if (import.meta.env.DEV) {
//   // Certify MSW's Service Worker is available before start React app.
//   import('../mocks/browser.ts')
//     .then(({worker}) => {
//       worker.start();
//     }) // Run <App /> when Service Worker is ready to intercept requests.
//     .then(() => {
//       root.render(
//         <AppProviders>
//           <App />
//         </AppProviders>,
//       );
//     });
//   // Never setup MSW mock server in production
// } else if (import.meta.env.PROD) {
//   root.render(
//     <AppProviders>
//       <App />
//     </AppProviders>,
//   );
// }

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the rootelement');
const root = ReactDOM.createRoot(rootElement);

// Setup MSW mock server in development
if (import.meta.env.DEV) {
  // Certify MSW's Service Worker is available before start React app.
  import('../mocks/browser.ts')
    .then(({worker}) => {
      worker.start();
    }) // Run <App /> when Service Worker is ready to intercept requests.
    .then(() => {
      root.render(<App />);
    });
  // Never setup MSW mock server in production
} else if (import.meta.env.PROD) {
  root.render(<App />);
}
