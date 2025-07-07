
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PhotoAnnotationTool from '@/components/tools/PhotoAnnotationTool';

const AddNameDatePhotoPage = () => {
  return (
    <>
      <Helmet>
        <title>Add Name & Date on Photo - FYN Tools India</title>
        <meta name="description" content="Add name and date on passport photographs for online application forms." />
        <meta name="keywords" content="add name photo, add date photo, passport photo, application form" />
      </Helmet>
      <PhotoAnnotationTool />
    </>
  );
};

export default AddNameDatePhotoPage;
