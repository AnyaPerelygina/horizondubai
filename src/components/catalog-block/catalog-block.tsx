import CatalogList from "@components/catalog-list/catalog-list"
import Container from "@ui/container/container";
import Title from "@ui/title/title";

import styles from './catalog-block.module.scss';

const CatalogBlock = () => {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <Title text={''} level={1} />
        <CatalogList />
      </Container>
    </section>
  )
}

export default CatalogBlock;
