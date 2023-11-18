import Link from "next/link";

export default function MenuItem({name,refLink}:{name:string,refLink:string}) {

    return (
      //   <div className='flex h-full w-1/8 text-base px-4 items-center justify-center mt-auto mb-auto border-2 border-white hover:border-sky-600'>
      //     <Link href={refLink}>{name}</Link>
      //   </div>
      <div className='flex h-full w-fit text-sm items-center justify-center mt-auto mb-auto hover:font-bold px-5'>
        <Link href={refLink}>{name}</Link>
      </div>
    );
}