import { GoLocation } from "react-icons/go";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import {
  BsLink45Deg,
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsTwitter,
} from "react-icons/bs";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className=" w-full bg-[#0D1C1E] text-[#D0D0CF] py-2 ">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex w-full justify-between   flex-col sm:flex-col  md:flex-row lg:flex-row gap-4">
          <div className="md:w-[40%]  mb-5 ">
            <div className="">
              <span className="font-bold text-start my-2 text-[18px]">
                <h3 className="text-white">
                  MOVIE. <span className="text-orange-300">HOME</span>
                </h3>
              </span>
              <span className="leading-[20px] tracking-normal max-w-[400px] text-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis cupiditate, esse doloremque accusantium fuga laborum
                vel totam! Architecto, laborum dolorem? Quam numquam molestias
                nam minima nulla. Reprehenderit nulla architecto reiciendis?
              </span>
            </div>
          </div>
          <div className="flex justify-between md:w-[60%] flex-col md:flex-row  lg:flex-row  sm:flex-col gap-4">
            <div className=" text-start">
              <span className="font-[600] text-[18px] font-Poppins py-1">
                information
              </span>
              <span className="flex items-center  py-1">
                <GoLocation className="text-[25px]  bg-white rounded-full text-black text-center px-[6px] mr-1" />
                <span>satelite town lagos nigeria</span>
              </span>
              <span className="flex items-center py-1">
                <IoIosCall className="text-[24px] bg-white rounded-full text-black text-center mr-1 px-[6px]" />
                <a href="tel:+2349068557284">+2349068557284</a>
              </span>
              <span className="flex items-center py-1">
                <AiOutlineMail className="text-[24px]  bg-white rounded-full text-black text-center mr-1 px-[6px]" />
                <a href="mailTo:goodyc474@gmail.com">goodyc474@gmail.com</a>
              </span>
            </div>
            <div className="">
              <span className="text-[18px] font-[600] py-1">
                Important Links
              </span>
              <div className=" flex flex-col justify-center ">
                <span className="flex items-center py-1 ">
                  <BsLink45Deg />
                  <span>Home</span>
                </span>
              </div>
            </div>
            <div className="">
              <span className="font-[600] text-[18px] py-1">
                connet with Goodness
              </span>
              <div className="flex justify-between pt-3 max-w-[180px]">
                <span>
                  <a href="https://www.linkedin.com/in/nwachukwu-goodness-161910219">
                    <BsLinkedin className=" bg-white rounded-full text-black text-center  p-2 text-[33px]" />
                  </a>
                </span>
                <span>
                  <a href="https://www.instagram.com/goodylove475">
                    <BsInstagram className=" bg-white rounded-full text-black text-center  p-2 text-[33px] " />
                  </a>
                </span>
                <span>
                  <a href="https://www.github.com/goodylove">
                    <BsGithub className=" bg-white rounded-full text-black text-center p-2 text-[33px] " />
                  </a>
                </span>

                <span>
                  <a href="https://my-portfolio-one-snowy-78.vercel.app">
                    <FiExternalLink className=" bg-white rounded-full text-black text-center p-2 text-[33px]" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr className="text-[20px]  border-1" />
      <div className="flex justify-center w-full my-3 ">
        <div className="flex justify-around w-full py-1 items-center gap-3 flex-col md:flex-row">
          <span>
            Website built by <i>GOODNESS</i>
          </span>
          <span>
            &copy; MOVIE. <span className="text-orange-300">HOME</span>
            &nbsp;
            {currentYear}
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
