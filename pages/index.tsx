import { NextPage } from 'next';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/style/style.scss';
import { BannerFluid } from '../src/components';
import GlobalStyles from '../src/components/GlobalStyle';

interface Props {
  userAgent?: string;
}

const Page: NextPage<Props> = ({ userAgent }) => {
  return (
    <GlobalStyles>
      <Container>
        <Row>
          <Col>Your user agent: {userAgent}</Col>
          <Col>
            <BannerFluid>hello</BannerFluid>
          </Col>
        </Row>
      </Container>
    </GlobalStyles>
  );
};

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Page;
