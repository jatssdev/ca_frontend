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
import Users from './components/admin/Users'
import AdminDocuments from './components/admin/Documents'
import Chart from './components/admin/Chart'
import DashBoard from './components/admin/DashBoard'
import Swal from 'sweetalert2'
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from './components/user/Dashboard'
import { BallTriangle } from 'react-loader-spinner';
import { Lines } from 'react-preloaders'
export let Alert = (success, msg) => {
  return Swal.fire({
    title: success ? "Success" : "Failed",
    text: msg,
    icon: success ? "success" : "error"
  });
}
function App() {
  let [loading, setLoading] = useState(false)

  let user = useSelector((x) => x.auth)
  let docs = useSelector((x) => x.docs)
  let admin = useSelector((x) => x.admin)


  useEffect(() => {

    if (admin.loading || user.loading || docs.loading) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [user, admin, docs])
  useEffect(() => {
    AOS.init();

  }, []);

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
              path: '', element: <DashBoard />
            },
            {
              path: 'add', element: <AddNewUser />
            },
            {
              path: 'users', element: <Users />
            },
            {
              path: 'documents', element: <AdminDocuments />
            },
            {
              path: 'chart', element: <Chart />
            },
          ],
        },
        {
          path: 'client',
          element: <ClientLayout />,
          children: [
            {
              path: '',
              element: <Dashboard />
            },
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
              path: '',
              element: <Dashboard />
            },
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
      <Lines />
      {
        loading && <div className="h-screen w-screen flex items-center justify-center fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      }
    </>
  )
}

export default App
