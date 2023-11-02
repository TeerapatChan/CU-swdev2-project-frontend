
import ProfileCard from "@/components/ProfileCard";

export default function dentistProfile({params}:{params:{id:string}}){
    
    return (
      <div className='bg-[url("/img/background.png")] bg-cover flex justify-center items-center h-[92vh] w-sereen '>
        <ProfileCard params={params}></ProfileCard>
      </div>
    );
}