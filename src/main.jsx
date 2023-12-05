import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import AppliedJobs from './components/AppliedJobs';
import JobCategory from './components/JobCategory';
import Chart from './components/Chart';
import Blog from './components/Blog';
import FeaturesJob from './components/FeaturesJob';
import JobDetails from './components/JobDetails';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Header />
            <JobCategory />
            <FeaturesJob />
          </>
        ),
      },
      {
        path: '/job-details/:jobId',
        element: <JobDetails />,
      },
      {
        path: '/applied jobs',
        element: <AppliedJobs />,
      },
      {
        path: '/statistics',
        element: <Chart />,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
