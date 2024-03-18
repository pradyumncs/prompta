import CustomLink from "@/components/custom-link"
import { auth } from "auth"
import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react';
import { Bold, Italic, Underline } from "lucide-react"
import SuperQuality from "@/components/basichome/rightimage";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import Image from "next/image";

import Imagebutton from "@/components/basichome/hoverimage";
export default async function Index() {
  const session = await auth()

  return (
    <div className="flex flex-col gap-6">
         <div className="flex justify-center py-7 ">
      <h1 className="text-5xl font-semibold ">Introducing Sugar AI </h1>
      </div>
      <div className="flex justify-center text-2xl text-red-500">
      The most advanced AI Girl Generator
</div>
<div className="flex justify-center">
  <Button className="text-white font-bold py-7 px-5 shadow-md w-64 hover:scale-110 transition duration-300 ease-in-out" >Get Started For Free ✨</Button>
  
</div>

<div className="flex justify-center py-7 ">
<video width="920" height="440"  preload="none" autoPlay muted loop>
  <source src="/video/main2.mp4" type="video/mp4" />
</video>
</div>


<div className="flex justify-center py-10 ">  
<ToggleGroup type="single" className="px-4 py-2 " defaultValue="a">
  <ToggleGroupItem value="a">Top ☝️</ToggleGroupItem>
  <ToggleGroupItem value="b">Newest 🆕</ToggleGroupItem>
  <ToggleGroupItem value="c">Video 📷</ToggleGroupItem>
  <ToggleGroupItem value="d">Following ✅</ToggleGroupItem>
</ToggleGroup>

</div>

<Imagebutton/>





<div className="flex justify-center py-7 ">

</div>

      <SuperQuality/>


      
    </div>


  )
}
