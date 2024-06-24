import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminLayout from './components/layouts/AdminLayout'
import MainLayout from './components/layouts/MainLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ClientLayout from './components/layouts/ClientLayout'
import EmployeeLayout from './components/layouts/EmployeeLayout'
import UserLogin from './components/UserLogin'
import { useSelector } from 'react-redux'
import Documents from './components/user/Documents'
import path from 'path'
import UploadDocument from './components/user/UploadDocument'
import AddNewUser from './components/admin/AddNewUser'
import DocumentPreview from './components/user/DocumentPreview'
import AdminLogin from './components/admin/AdminLogin'

function App() {
  let user = useSelector((x) => x.auth)
  let docs = useSelector((x) => x.docs)
  useEffect(() => {
    console.log(docs)
  }, [docs])

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <UserLogin />
    },

    {
      path: '/preview/:id',
      element: <DocumentPreview />
    },

    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: 'admin',
          element: <AdminLayout />,
          children: [
            {
              path: 'add', element: <AddNewUser />
            }
          ],
        },
        {
          path: 'client',
          element: <ClientLayout />,
          children: [
            {
              path: 'documents',
              element: <Documents />
            },
            {
              path: 'upload/document',
              element: <UploadDocument />
            }

          ],
        },
        {
          path: 'employee',
          element: <EmployeeLayout />,
          children: [
            {
              path: 'documents',
              element: <Documents />
            },
            {
              path: 'upload/document',
              element: <UploadDocument />
            }

          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
