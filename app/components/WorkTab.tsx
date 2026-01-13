import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Card from "./Card"
// import Btn from "../Btn";

export default function WorkTab() {
  return (
    <Tabs defaultValue="ui" className="w-full">
        <TabsList className="flex-wrap md:flex-wrap lg:flex-row bg-white gap-3 px-2 py-6 text-left">
            <TabsTrigger value="ui" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full rounded-full text-lg md:text-3xl px-8 py-8 border-[#646464] cursor-pointer uppercase">UI/UX Design</TabsTrigger>
            <TabsTrigger value="web" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full rounded-full text-lg md:text-3xl px-8 py-8 border-[#646464] cursor-pointer uppercase">Web Development</TabsTrigger>
            <TabsTrigger value="brand" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full rounded-full text-lg md:text-3xl px-8 py-8 border-[#646464] cursor-pointer uppercase">Brand Design</TabsTrigger>
            <TabsTrigger value="ill" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full rounded-full  text-lg md:text-3xl px-8 py-8 border-[#646464] cursor-pointer uppercase">Illustration</TabsTrigger>
        </TabsList>

        <TabsContent value="ui">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5">
                <Card header="Ounje Ibile" text="Brand Design" image="/img/ounje.png" />
                <Card header="Ankra" text="Web Development" image="/img/ankra.png"/>
                <Card header="iGuard" text="UI/UX Design" image="/img/ig.png"/>
                <Card header="Illustration" text="Illustration" image="/img/kungirl.jpg"/>
            </div>
        </TabsContent>

        <TabsContent value="web">Change your password here.</TabsContent>
        <TabsContent value="brand">Change your password here.</TabsContent>
        <TabsContent value="ill">Change your password here.</TabsContent>
    </Tabs>
  )
}
