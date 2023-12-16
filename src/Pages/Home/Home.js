import React from 'react';
 import Layout from "../../Commponents/Layouts/Layout";
 import "../../Styles/HomeStyle.css";
import Section1 from './Section1';
import  Section2  from './Section2';

function Home() {
  return (
  <>
   <Layout>
  {/* home section banner hero */}
 <Section1 />
 {/* home section about */}
 <Section2 />
   </Layout>
  
  
  </>
  )
}

export default Home;
