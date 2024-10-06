import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/globals.css";

import ProfileCardTemplate from "./components/03-card-templates/02-profile-card-template/page.js";
import BlogPostCardTemplate from "./components/03-card-templates/03-blog-post-card-template/page.js";

export default function Home() {
  return (
    <>
      <ProfileCardTemplate />
      <BlogPostCardTemplate />
    </>
  );
}
