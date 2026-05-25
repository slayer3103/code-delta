import { Metadata } from "next"
import { Header } from "@/modules/home/header"
import { Footer } from "@/modules/home/footer"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
    title: {
        template: "%s | Code delta",
        default: "Code delta - AI assistant for developers"
    },
    description: "Build,ship,iterate",
    openGraph: {
        images: "/opengraph-image.png"
    },
    twitter: {
        images: "/twitter-image.png"
    },
    creator: "Your Name",
    icons: {
        icon: "/favicon.ico"
    }
}
export default function HomeLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <div className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center dark:bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            <main className="z-20 relative w-full pt-0 ">{children}</main>
            <Footer />
        </>
    );
}