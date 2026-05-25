
import { Button } from "@/components/ui/button";
import UserButton from "@/modules/auth/components/user-button";

export default async function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button className="primary">
        Get Started 
      </Button>
      <UserButton/>
    </div>
  );
}
