import Image from "next/image";
import { Data, uniqueService } from "@/data/constant";
import family from "@/public/icons/family.png";
import { DevBundlerService } from "next/dist/server/lib/dev-bundler-service";


export default function Home() {
  return (
    <main className="container mx-auto bg-gray-300">
      <div className="flex flex-col justify-centeritems-center space-y-12">
          <header className="flex flex-col justify-center text-center mt-6 space-y-3">
            <h1 className="font-semibold text-2xl">All Provided Features</h1>
            <div className="flex flex-col justify-center items-center text-xs font-medium">
              <p>We are committed to continious innovation</p>
              <p>in online banking payments</p>
            </div>
          </header>
          <ul className="grid grid-cols-5 gap-4">
            {
              Data.map(data => (
                <li key={data.title} className="flex flex-col rounded-md shadow-md space-y-3 justify-center items-center p-4 text-center bg-white">
                  <Image src={data.number} alt="number 1" width={30} height={30} />
                  <h2 className="font-semibold">{data.title}</h2>
                  <Image src={data.icon} alt="icon" width={60} height={60} />
                  <p className="text-sm">{data.messagge}</p>
                </li>
              ))
            }
          </ul>
          <div className="flex justify-between gap-12">
              <Image src={family} alt="family" width={300} height={300} />
              <div className="flex flex-col justify-center space-y-4 w-1/2">
                <h2 className="text-xl font-semibold text-center">Unique Services</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {
                    uniqueService.map(service => (
                      <li key={service.title} className="flex space-x-4 rounded-md p-4">
                        <span className="h-5 w-5 flex items-center p-1 text-white bg-green-400 rounded-full">&times;</span>
                        <div className="space-y-1">
                          <h3 className="text-sm font-semibold">{service.title}</h3>
                          <p className="text-sm">{service.message}</p>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
          </div>
      </div>
    </main>
  );
}
