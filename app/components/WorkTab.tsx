import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import Tailors from "./Tailors";
// import Btn from "../Btn";

export default function WorkTab() {
  return (
    <Tabs defaultValue="ui" className="w-full">
        <TabsList className="bg-white gap-0 px-2 py-6 text-left">
            <TabsTrigger value="ui" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full text-2xl md:text-3xl px-8 py-6 cursor-pointer uppercase">UI/UX Design</TabsTrigger>
            <TabsTrigger value="web" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full text-2xl md:text-3xl px-8 py-6 cursor-pointer uppercase">Web Development</TabsTrigger>
            <TabsTrigger value="brand" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full text-2xl md:text-3xl px-8 py-6 cursor-pointer uppercase">Brand Design</TabsTrigger>
            <TabsTrigger value="ill" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full text-2xl md:text-3xl px-8 py-6 cursor-pointer uppercase">Illustration</TabsTrigger>
        </TabsList>

        <TabsContent value="ui">
          <div>
            {/* <Tailors/> */}
        </div>
        </TabsContent>

        <TabsContent value="web">Change your password here.</TabsContent>
        <TabsContent value="brand">Change your password here.</TabsContent>
        <TabsContent value="ill">Change your password here.</TabsContent>
    </Tabs>
  )
}
