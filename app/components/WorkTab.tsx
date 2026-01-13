import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WorkCard from "./WorkCard"
// import Btn from "../Btn";

export default function WorkTab() {
  return (
    <Tabs defaultValue="ui" className="w-full">
        <TabsList className="flex-wrap md:flex-wrap lg:flex-row bg-white gap-3 px-2 py-6 text-left mb-16">
            <TabsTrigger value="ui" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full rounded-full text-lg md:text-3xl px-8 py-8 border-[#646464] cursor-pointer uppercase">UI/UX Design</TabsTrigger>
            <TabsTrigger value="web" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full rounded-full text-lg md:text-3xl px-8 py-8 border-[#646464] cursor-pointer uppercase">Web Development</TabsTrigger>
            <TabsTrigger value="brand" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full rounded-full text-lg md:text-3xl px-8 py-8 border-[#646464] cursor-pointer uppercase">Brand Design</TabsTrigger>
            <TabsTrigger value="ill" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full rounded-full  text-lg md:text-3xl px-8 py-8 border-[#646464] cursor-pointer uppercase">Illustration</TabsTrigger>
        </TabsList>

        <TabsContent value="ui">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5">
                <WorkCard link={'https://www.behance.net/gallery/224472665/iGuard'} header="iGuard" text="A crypto wallet designed to offer users an intuitive, secure and seamless experience in managing cryptocurrency assets." image="/img/ig.png"/>
                <WorkCard link={'https://www.behance.net/gallery/158520391/Ankra-Case-Study'} header="Ankra" text="A website that allows customers to find tailors within their vicinity, book appointments with them, choose the design they desire from the site or anywhere else and get it delivered to their doorstep." image="/img/ankra.png"/>
                <WorkCard link={'https://www.behance.net/gallery/176343673/Teamify'} header="Teamify" text="A web-based dashboard which serves as a centralized platform that enables team leaders, managers, and stakeholders to efficiently monitor, analyze, and optimize team performance, tasks, and collaboration in real-time" image="/img/teamify.png"/>
                <WorkCard link={'https://play.google.com/store/apps/details?id=net.ngscholars.clator&hl=en_US&gl=US'} header="Clator" text="A Grade Point Calculator app for all universities, polytechnics, and colleges that use the 4.0 and 5.0 CGPA scale systems." image="/img/clator.jpg"/>
                <WorkCard link={'https://play.google.com/store/apps/details?id=com.airtimetocash.app&hl=ru'} header="Airtime to Cash" text="An app that provides seamless airtime to cash conversion, allowing users to easily transfer mobile airtime to their Nigerian bank account." image="/img/a2c.jpg"/>
                <WorkCard link={'https://www.behance.net/gallery/158520391/Ankra-Case-Study'} header="Ankra" text="A website that allows customers to find tailors within their vicinity, book appointments with them, choose the design they desire from the site or anywhere else and get it delivered to their doorstep." image="/img/ankra.png"/>
            </div>
        </TabsContent>

        <TabsContent value="web">Change your password here.</TabsContent>
        <TabsContent value="brand">Change your password here.</TabsContent>
        <TabsContent value="ill">Change your password here.</TabsContent>
    </Tabs>
  )
}
