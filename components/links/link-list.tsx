import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsGithub } from "react-icons/bs";

import LinkItem from "./link-item";
import classes from "./link-list.module.css";

const LinkList = () => {
  const SOCIALS = [
    { id: 1, name: "facebook" },
    { id: 2, name: "github" },
    { id: 3, name: "instagram" },
    { id: 4, name: "linkedin" },
  ];

  return (
    <>
      <div className={classes.links}>
        {SOCIALS.map((social) => (
          <div key={social.id} className={classes.links__link}>
            <LinkItem name={social.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default LinkList;
