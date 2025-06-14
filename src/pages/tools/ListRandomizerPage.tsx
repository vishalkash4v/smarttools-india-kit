
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import ListRandomizer from '@/components/tools/ListRandomizer';

const ListRandomizerPage = () => {
  return (
    <PageWrapper
      title="List Randomizer - Free Online Tool"
      description="Randomize any list of items instantly. Perfect for making random selections, shuffling names, or organizing data randomly."
      keywords="list randomizer, shuffle list, random order, list shuffler, randomize items"
    >
      <div className="container py-8">
        <ListRandomizer />
      </div>
    </PageWrapper>
  );
};

export default ListRandomizerPage;
