import { getFullYear, getFooterCopy } from '../utils';

const Footer = () => {
  return (
    <>
      {/* <p>{getFootercopy(false)}</p> */}
      <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>;
    </>
  );
};
export default Footer;
