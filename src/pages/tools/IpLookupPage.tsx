
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import IpLookup from '@/components/tools/IpLookup';

const IpLookupPage = () => {
  return (
    <PageWrapper
      title="What's My IP Address"
      description="Find your public IP address and detailed location information including country, city, ISP, and more."
      keywords="ip address, what is my ip, ip lookup, location, geolocation, public ip"
      toolCategory="Network Tools"
    >
      <IpLookup />
    </PageWrapper>
  );
};

export default IpLookupPage;
