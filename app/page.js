import Image from "next/image";
import styles from "./page.module.css";
import classes from './page.module.css'

import Link from "next/link";

export default function Home() {
  return (
    <main className={classes.main}>
      <h1 className={classes.h1}>Under a Plant and Soil E-portal, a wide range of topics related to plants, soil, agriculture, and environmental conservation can ne explored. Potential topics we could explore within this  portal can be : </h1>
      <div className={classes.description}>
      <p >
        <h3>Plant Identification</h3>
        Provide tools and resources for users to identify different plant species, including trees, shrubs, flowers, and crops. This could include interactive guides, image databases, and botanical information.
        <Link href="/plantidentification">more</Link>
      </p>
      </div>
      <div className={classes.description}>
      <p >
      <h3>Soil Health and Management</h3>
      Offer information and guidance on maintaining soil health, including topics such as soil testing, nutrient management, organic matter, soil erosion control, and soil conservation practices.
      </p>
      </div>
      <div className={classes.description}>
      <p >
      <h3>Crop Management</h3>
      Provide resources for farmers and gardeners on crop selection, planting techniques, crop rotation, pest and disease management, irrigation methods, and harvest practices.
      </p>
      </div>
      <div className={classes.description}>
      <p >
      <h3>Gardening Tips and Techniques</h3>
      Offer advice and tutorials for home gardeners on topics such as container gardening, raised beds, composting, companion planting, and seasonal gardening tasks.
      </p>
      </div>
      <div className={classes.description}>
      <p >
      <h3>Environmental Conservation</h3>
      Raise awareness about the importance of plants and soil in environmental conservation efforts. Discuss topics such as reforestation, habitat restoration, carbon sequestration, and sustainable land management practices.
      </p>
      </div>
      <div className={classes.description}>
      <p >
      <h3>Research and Innovation</h3>
      Highlight recent advancements and research findings in plant and soil science, including topics such as genetic engineering, biotechnology, precision agriculture, and sustainable farming practices.
      </p>
      </div>
      <div className={classes.description}>
      <p >
      <h3>Educational Resources</h3>
      Provide educational materials for students, teachers, and researchers, including lesson plans, curriculum resources, scientific publications, and online courses related to plant and soil science.
      </p>
      </div>
      <div className={classes.description}>
      <p >
      <h3>Community Engagement</h3>
      Facilitate community engagement through forums, discussion groups, and social media platforms where users can share knowledge, ask questions, and connect with other enthusiasts, farmers, and experts in the field.
      </p>
      </div>
      <div className={classes.description}>
      <p >
      <h3>Events and Workshops</h3>
      Promote upcoming events, workshops, field days, and conferences related to plant and soil science, agriculture, gardening, and environmental conservation.
      </p>
      </div>
      <div className={classes.description}>
      <p >
      <h3>News and Updates</h3>
      Curate and share news articles, blog posts, and multimedia content related to plant and soil science, agricultural innovations, environmental issues, and global food security.
      </p>
      </div>
      <div className={classes.description}>
      <p >
      By covering these topics, a Plant and Soil E-portal can serve as a comprehensive resource hub for individuals interested in plants, agriculture, gardening, and environmental sustainability. It can provide valuable information, practical advice, and opportunities for learning, collaboration, and engagement within the community.
      </p>
      </div>
    </main>
  );
}
