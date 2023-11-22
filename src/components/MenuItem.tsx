import Link from "next/link";

export default function MenuItem({name,refLink,isCurrentPath}:{name:string,refLink:string,isCurrentPath:boolean}) {
    
    return (
        <div>
          { isCurrentPath ? 
          <div className='flex h-full w-fit text-sm items-center justify-center mt-auto mb-auto font-bold px-5 text-sky-600'>
            {name}
          </div>:
          <div className='flex h-full w-fit text-sm items-center justify-center mt-auto mb-auto hover:font-bold px-5'>
            <Link href={refLink}>{name}</Link>
          </div>
            }
        </div>
    );
}