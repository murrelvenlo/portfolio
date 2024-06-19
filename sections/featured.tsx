import Heading from "@/components/heading/heading";
import { featuredData } from "@/data";
import FeaturedCard from "@/components/cards/featured/featured-card";
import ExpandableFeatured from "@/components/expandables/expandable-featured";

const MainFeatured = featuredData[0];

export default function FeaturedSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      {/* Heading */}
      <Heading number="01" title1="Projecten" title2=" " />
      {/* Main featured Card */}
      <FeaturedCard
        active
        title={MainFeatured.title}
        tag={MainFeatured.tag}
        video={MainFeatured.video}
        desc={MainFeatured.desc!}
        client={MainFeatured.client!}
      />
      <div className="mt-24">
        <ExpandableFeatured />
      </div>
    </div>
  );
}
