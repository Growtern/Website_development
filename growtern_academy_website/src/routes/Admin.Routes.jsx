import React from 'react'
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../Admin_/dashboard/DashboardLayout";
import DashboardHome from "../Admin_/dashboard/pages/DashboardHome";

import JobGuaranteedCourses from "../Admin_/modules/JobCourses/JobGuaranteedCourses";
import AddJobCourse from "../Admin_/modules/JobCourses/AddJobCourse";
import InternshipCourses from "../Admin_/modules/InternshipCourses/InternshipCourses";
import OfferBannerManagement from "../Admin_/modules/OfferBanners/OfferBannerManagement";
import EditJobCourse from "../Admin_/modules/JobCourses/EditJobCourse";
import ProtectedRoute from "./ProtectedRoute";
import AddAdmin from "../Admin_/auth/AddAdmin";

import AdminLogin from "../Admin_/auth/AdminLogin";
import AddOffer from "../Admin_/modules/OfferBanners/AddOffer";

import EditOffer from "../Admin_/modules/OfferBanners/EditOffer";

const AdminRoutes = () => {
  return (
    <Routes>

        {/* Login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <DashboardHome />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

      {/* Add Admin */}
      <Route
        path="/admin/add-admin"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AddAdmin />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

        {/* Job Courses */}
        <Route
          path="/admin/job-courses"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <JobGuaranteedCourses />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

      {/* Add Job Course */}
      <Route
        path="/admin/job-courses/add"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AddJobCourse />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* Edit Job Course */}
      <Route
        path="/admin/job-courses/:id/edit"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <EditJobCourse />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

        {/* Internship Courses */}
        <Route
          path="/admin/internships"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <InternshipCourses />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Offer Banners */}
        <Route
          path="/admin/offers"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <OfferBannerManagement />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Add Offer  */}
        <Route
          path="/admin/offers/add"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <AddOffer />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/*Edit Offer  */}
        <Route
          path="/admin/offers/edit/:id"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <EditOffer />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

    </Routes>
  )
}

export default AdminRoutes