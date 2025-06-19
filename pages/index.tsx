import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Page
        title="💾-Notes-Taking-Guide"
        description={
          <>
            <p>
              Repository hand-coded by Kittelsaa Nyampundu (
              <a
                href="https://github.com/Kittelsaa/taking-notes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
              ).
              <br />
              This site does not use cookies, ads or third party scripts.
            </p>
          </>
        }
      >
        <PostList posts={posts} />
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles.slice(0, 13),
    },
  };
};

export default Home;
