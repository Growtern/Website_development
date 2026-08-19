import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Get all Job Guaranteed Courses
export const getAllJobCourses = async (token) => {
  const response = await axios.get(
    `${API_URL}/api/admin/job-courses`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Get single Job Guaranteed Course
export const getJobCourseById = async (id, token) => {
  const response = await axios.get(
    `${API_URL}/api/admin/job-courses/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Create Job Guaranteed Course
export const createJobCourse = async (courseData, token) => {
  const response = await axios.post(
    `${API_URL}/api/admin/job-courses`,
    courseData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Update Job Guaranteed Course
export const updateJobCourse = async (
  id,
  courseData,
  token
) => {
  const response = await axios.put(
    `${API_URL}/api/admin/job-courses/${id}`,
    courseData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Delete Job Guaranteed Course
export const deleteJobCourse = async (id, token) => {
  const response = await axios.delete(
    `${API_URL}/api/admin/job-courses/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};