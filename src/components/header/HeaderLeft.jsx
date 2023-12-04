import { Link } from "react-router-dom";
import { MdPets } from "react-icons/md";

const HeaderLeft = () => {
  return (
    <>
      <Link to="/" id="logo-text">
        Pets shop
        <span>
          <MdPets />
        </span>
      </Link>
      <Link to="/" id="logo-img-link">
        <img src="/images/logoImage.jpeg" alt="Logo" />
      </Link>
    </>
  );
};

export default HeaderLeft;
