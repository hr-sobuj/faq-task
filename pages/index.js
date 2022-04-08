import Head from "next/head";
import Accordion from "../components/Accordion/Accordion";

const FAQPage = () => {
  return (
    <>
      <Head>
        <title>FAQ Page - Pentatonic</title>
      </Head>

      <div className="wrapper_main">
        <h1 className="faq_title">FAQs</h1>
        <Accordion title="Enim in consequat quis anim sunt aliqua mollit aliquip fugiat.?">
          Enim in consequat quis anim sunt aliqua mollit aliquip fugiat. Et officia voluptate eiusmod minim duis mollit consequat Lorem ut tempor exercitation exercitation aliqua eiusmod. Velit occaecat sint voluptate fugiat eu amet aute fugiat minim excepteur nulla. Sint dolor sunt consectetur fugiat et commodo. Ut ad anim proident sunt occaecat adipisicing elit in non culpa magna magna aliqua occaecat.
        </Accordion>
        <Accordion title="Enim in consequat quis anim sunt aliqua mollit aliquip fugiat.?">
          Enim in consequat quis anim sunt aliqua mollit aliquip fugiat. Et officia voluptate eiusmod minim duis mollit consequat Lorem ut tempor exercitation exercitation aliqua eiusmod. Velit occaecat sint voluptate fugiat eu amet aute fugiat minim excepteur nulla. Sint dolor sunt consectetur fugiat et commodo. Ut ad anim proident sunt occaecat adipisicing elit in non culpa magna magna aliqua occaecat.
        </Accordion>
        <Accordion title="Enim in consequat quis anim sunt aliqua mollit aliquip fugiat.?">
          Enim in consequat quis anim sunt aliqua mollit aliquip fugiat. Et officia voluptate eiusmod minim duis mollit consequat Lorem ut tempor exercitation exercitation aliqua eiusmod. Velit occaecat sint voluptate fugiat eu amet aute fugiat minim excepteur nulla. Sint dolor sunt consectetur fugiat et commodo. Ut ad anim proident sunt occaecat adipisicing elit in non culpa magna magna aliqua occaecat.
        </Accordion>
      </div>
    </>
  );
};

export default FAQPage;
