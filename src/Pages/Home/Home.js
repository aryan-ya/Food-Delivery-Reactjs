import React from 'react';
 import Layout from "../../Commponents/Layouts/Layout";
 import "../../Styles/HomeStyle.css";
import Section1 from './Section1';
import  Section2  from './Section2';
import Section3 from './Section3';

function Home() {
  return (
  <>
   <Layout>
  {/* home section banner hero */}
 <Section1 />
 {/* home section about */}
 <Section2 />

 {/* home section menu */}
 <Section3 />
   </Layout>
  
  
  </>
  )
}

export default Home;
