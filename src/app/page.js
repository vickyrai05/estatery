import Heropage from "../app/component/heropage/page";
import HomeBenefit from '../app/component/home_benefit/page';
import FeatureProperty from '../app/component/feature_property/page';
import Properties from '../app/component/properties/page';
import Cities from '../app/component/cities_slider/page';
import Blog from '../app/listing/blog/page';
import Detail from '../app/listing/deatail_page/page';

export default function Home() {
  return (
    <>
      <Heropage />
      <HomeBenefit />
      <FeatureProperty />
      <Cities />
      <Properties /> 

    </>
  );
}
