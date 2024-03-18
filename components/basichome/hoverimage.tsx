"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { BiSolidMagicWand } from "react-icons/bi";
import { IconContext } from "react-icons";
const Imagebutton = () => {
  return (
  
   
<div className="flex flex-row gap-5 sm:flex-row md:flex-row justify-center ">
<div className="image-container">
        <Image
          src="/home/img (1).jpg"
          alt="Image 1 description"
          width={400}
          height={10}
          className="image"  // Adjust as needed
        />
        <Button  size="icon" // Assuming Button component renders a clickable element
          className="image-button"
          // Optional: Adjust position and size using CSS (see below)
        >
            <IconContext.Provider value={{ size: "2em"  }}>
  <div>
    <BiSolidMagicWand />
  </div>
</IconContext.Provider>
           
        </Button>
       
            
      
      </div>

      <div className="image-container">
        <Image
          src="/home/img (2).jpg"
          alt="Image 2 description"
          width={400}
          height={10}
        />
        <Button className="image-button">Click Me!</Button>
      </div>

      <div className="image-container">
        <Image
          src="/home/img (3).jpg"
          alt="Image 3 description"
          width={400}
          height={10}
        />
        <Button className="image-button">Click Me!</Button>
      </div>
</div>

   
  );
};

export default Imagebutton;