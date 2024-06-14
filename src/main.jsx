import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import SignUp from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserDashboard from './Components/Dashboard/UserDashboard/UserDashboard';
import AddClass from './Components/Dashboard/UserDashboard/Pages/AddClass';
import MyClasses from './Components/Dashboard/UserDashboard/Pages/MyClasses';
import BecomeTeacherForm from './Components/BecomeTeacher/BecomeTeacherForm';
import AllClasses from './Components/AllClases/AllClasses';
import AllClassesDetails from './Components/AllClases/AllClassesDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import TeacherRequest from './Components/Dashboard/Admindashboard/TeacherRequest';
import Payment from './Components/Payment/Payment';
import AllUsers from './Components/Dashboard/Admindashboard/AllUsers';
import AllClass from './Components/Dashboard/Admindashboard/AllClass';
import Cart from './Components/Cart/Cart';
import MyEnrolledClass from './Components/Dashboard/UserDashboard/Pages/MyEnrolledClass';
import MyClassesDetails from './Components/Dashboard/UserDashboard/Pages/MyClassesDetails';
import MyEnrolledClassDetails from './Components/Dashboard/UserDashboard/Pages/MyEnrolledClassDetails';
import Paymenthistory from './Components/Dashboard/UserDashboard/Pages/Paymenthistory';
import AdminDashboardPage from './Components/Dashboard/Admindashboard/AdminDashboardPage';
import StudentDashboard from './Components/Dashboard/UserDashboard/StudentDashboard';
import TeacherDashboard from './Components/Dashboard/UserDashboard/TeacherDashboard';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Blogs from './Components/Blogs/blogs';
import Profile from './Components/Dashboard/UserDashboard/Pages/Profile';
import PopularClassDetails from './Components/PopularClasses/PopularClassDetails';
import UpdateClass from './Components/Dashboard/UserDashboard/Pages/UpdateClass';
import HelpDesk from './Components/HelpDesk/HelpDesk';
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/allClasses',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/allClassesDetails/:id',
        element: <PrivateRoute><AllClassesDetails></AllClassesDetails></PrivateRoute>,
        loader : ({params}) => fetch(`https://skill-dynamo-server.vercel.app/allClasses/${params.id}`)
      },
      {
        path: '/popularClassDetails/:id',
        element: <PrivateRoute><PopularClassDetails></PopularClassDetails></PrivateRoute>,
        loader : ({params}) => fetch(`https://skill-dynamo-server.vercel.app/popularCourse/${params.id}`)
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader : () => fetch('https://skill-dynamo-server.vercel.app/blogsCount')
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>
      },
      {
        path: '/becomeTeacherForm',
        element: <PrivateRoute><BecomeTeacherForm></BecomeTeacherForm></PrivateRoute>
      },
      {
        path: '/helpDesk',
        element: <PrivateRoute><HelpDesk></HelpDesk></PrivateRoute>
      },
    ]
  },

  {
    path: 'userDashboard',
    element: <UserDashboard></UserDashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'addClass',
        element: <PrivateRoute><AddClass></AddClass></PrivateRoute>
      },
      {
        path: 'myClass',
        element: <PrivateRoute><MyClasses></MyClasses></PrivateRoute>

      },
      {
        path: 'myClassesDetails/:id',
        element: <PrivateRoute><MyClassesDetails></MyClassesDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://skill-dynamo-server.vercel.app/allClasses/${params.id}`)
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'myEnrolledClass',
        element: <MyEnrolledClass></MyEnrolledClass>
      },
      {
        path: 'myEnrolledClassDetails/:id',
        element: <MyEnrolledClassDetails></MyEnrolledClassDetails>,
        loader: ({ params }) => fetch(`https://skill-dynamo-server.vercel.app/enrolledClass/${params.id}`)
      },
      {
        path: 'paymentHistory',
        element: <Paymenthistory></Paymenthistory>,
      },
      {
        path: 'studentDashboard',
        element: <StudentDashboard></StudentDashboard>,
      },
      {
        path: 'teacherDashboard',
        element: <TeacherDashboard></TeacherDashboard>,
      },
      {
        path: 'updateClass',
        element: <UpdateClass></UpdateClass>,
        loader: ({ params }) => fetch(`https://skill-dynamo-server.vercel.app/allClasses/${params.id}`)
      },



      // for admin
      {
        path: 'teacherRequest',
        element: <TeacherRequest></TeacherRequest>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'allClass',
        element: <AllClass></AllClass>
      },
      {
        path: 'adminDashboardPage',
        element: <AdminDashboardPage></AdminDashboardPage>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
    </QueryClientProvider>
    
  </React.StrictMode>,
)
