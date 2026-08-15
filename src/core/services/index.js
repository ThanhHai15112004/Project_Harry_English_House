import {
  teacher,
  courses,
  roadmap,
  pricing,
  certificates,
  testimonials,
  media,
} from '@/db';

export const DataService = {
  getTeacherInfo: () => teacher,
  getCourses: (category = 'all') => {
    if (category === 'all') return courses;
    return courses.filter((c) => c.category === category);
  },
  getCourseById: (id) => courses.find((c) => c.id === id),
  getRoadmap: () => roadmap,
  getPricing: () => pricing,
  getCertificates: () => certificates,
  getTestimonials: () => testimonials,
  getMedia: () => media,
};
