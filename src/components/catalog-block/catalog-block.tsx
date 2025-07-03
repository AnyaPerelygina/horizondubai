import { useEffect, useState } from "react";

import CatalogList from "@components/catalog-list/catalog-list";
import Pagination from "@components/pagination/pagination";
import Container from "@ui/container/container";
import Title from "@ui/title/title";

import styles from './catalog-block.module.scss';

import mockApartments from "@data/apartments";

const CatalogBlock = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let maxItems = 12;
  if (windowWidth < 768) maxItems = 10;

  const totalPages = Math.ceil(mockApartments.length / maxItems);
  const startIndex = (currentPage - 1) * maxItems;
  const apartmentsToShow = mockApartments.slice(startIndex, startIndex + maxItems);

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <Title text={''} level={1} />
        <CatalogList apartments={apartmentsToShow} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Container>
    </section>
  );
};

export default CatalogBlock;
