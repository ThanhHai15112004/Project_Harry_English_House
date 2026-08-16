import { useState, useEffect } from 'react';
import { DataService } from '../services';

export * from './useLenis';
export * from './useDocumentTitle';

export const useTeacherData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(DataService.getTeacherInfo());
  }, []);
  return data;
};

export const useCoursesData = (category = 'all') => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(DataService.getCourses(category));
  }, [category]);
  return data;
};

export const useCourseDetail = (id) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (id) {
      setData(DataService.getCourseById(id));
    }
  }, [id]);
  return data;
};

export const useRoadmapData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(DataService.getRoadmap());
  }, []);
  return data;
};

export const usePricingData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(DataService.getPricing());
  }, []);
  return data;
};

export const useTestimonialsData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(DataService.getTestimonials());
  }, []);
  return data;
};

export const useCertificatesData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(DataService.getCertificates());
  }, []);
  return data;
};

export const useMediaData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(DataService.getMedia());
  }, []);
  return data;
};

export const useMethodologyData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(DataService.getMethodology());
  }, []);
  return data;
};

export const useClassesData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(DataService.getClasses());
  }, []);
  return data;
};
