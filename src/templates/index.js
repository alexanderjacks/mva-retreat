import Helmet from 'react-helmet';
import React from 'react';
import userConfig from '../../config';
import Layout from './layout';
import Card from '../components/Card';
import P from '../components/P';
import H2 from '../components/H2';
import Container from '../components/Container';
import Pagination from '../components/Pagination';
import Summary from '../components/Summary';

import Retreat from '../components/Retreat';
import Sponsors from '../components/Sponsors';


const IndexPage = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  return (
    <Layout>
      <Container>
        <Helmet
          title={`${userConfig.title} | ${userConfig.author}`}
          htmlAttributes={{ lang: 'en' }}
        >
          <meta
            name="description"
            content={`${userConfig.title} | ${userConfig.description}`}
          />
        </Helmet>
        <div className="cards-to-1-column-on-mobile">
        {group.map(({ node }) => (
          <Card key={node.fields.slug}>
            <Summary
              title={node.frontmatter.title}
              image={node.frontmatter.featuredImage}
              slug={node.fields.slug}
            />
          </Card>
        ))}
        </div>
        <div class="welcome-paragraphs">
          <P>
            How do we solve the greatest issues facing the minority veteran community?
          </P>
          <P>
            This is a question that many are grappling with as Veterans of Color, LGBTQ, Womxn, and (Non) Religious Minority veterans continue to be disproportionately impacted by nearly every issue facing the veteran community today.
          </P>
          <P>
            We believe that in order to confront the greatest issues affecting our communities, we must empower emerging leaders to create community driven solutions. In doing this, we create belonging and community investment that we can turn toward addressing the equity gaps that exist for minority and underrepresented veterans.
          </P>
          <P>
            This year, MVA will host our inaugural Emerging Leaders Retreat from Aug. 21-23, 2019 in Seattle, WA. Our team has set the ambitious goal of educating 25 leaders from around the country. These leaders represent a community eager for leadership and opportunity, that want to continue to serve in a new capacity. This is the next generation of leaders, ready to develop their proficiencies to face complex challenges head on.
          </P>
          <div class="centermax top-clearance-xl">
            <H2>
              These are minority vet leaders.
            </H2>
          </div>
        </div>
        
        <Retreat/>
        <Sponsors/>

        <Pagination
          isFirst={index === 1}
          isLast={index === pageCount}
          nextUrl={nextUrl}
          previousUrl={previousUrl}
        />

      </Container>
    </Layout>
  );
};
export default IndexPage;
