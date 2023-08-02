import Image from "next/image";
import LoadingPic from "@/app/assets/loader.gif";

export default function Loading() {
  return (
    <div className="flex justify-center w-full h-full">
      <Image src={LoadingPic} alt="Laoding..." />
    </div>
  );
}
