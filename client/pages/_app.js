import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';

const A = ({ Component, pageProps, currentUser }) => (
  <>
    <h1>Hello</h1>
    <Component {...pageProps} />
  </>
)

A.getInitialProps = async({ ctx, Component }) => {
  const client = buildClient(ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, currentUser: data.currentUser };
}

export default A;
