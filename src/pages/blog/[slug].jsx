import AutherSidebar from "@/components/blog/single-blog/auther-sidebar";
import SingleblogContent from "@/components/blog/single-blog/singleblog-content";
import SingleblogHeader from "@/components/blog/single-blog/singleblog-header";
import OuterLayout from "@/components/layouts/outer-layout";
import React from "react";

const SingleBlog = ({ post }) => {
 
  return (
    <OuterLayout>
      <SingleblogHeader img={post?.featuredImage?.node?.sourceUrl ||"https://iili.io/HO5KTjj.md.png"} />
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-start  md:px-[120px] px-2">
        <AutherSidebar
          decription={post?.author?.node?.description}
          img={post?.author?.node?.avatar?.url}
          name={post?.author?.node?.name}
        />
        <SingleblogContent
          content={post?.content}
          title={post?.title}
     
          auther={post?.author?.node?.name}
          date={post?.date}
        />
      </div>
    </OuterLayout>
  );
};

export default SingleBlog;

export async function getServerSideProps(context) {


  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=86400'
  )
  const { slug } = context.query;
  const res = await fetch(process.env.WPGRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
       {
            post(id: "${slug}", idType: SLUG) {
              content
              date
              title
              author {
                node {
                  name
                  avatar {
                    url
                  }
                }
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
            `,
    }),
  });

  const json = await res.json();

  const post = json?.data?.post;

  return {
    props: {
      // nodes
      // page,
      post,
      // hasNextPage: pageInfo.hasNextPage,
      // json,
    },
  };
}
