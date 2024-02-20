import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black items-center w-screen justify-center flex h-screen">
      <div className="mask3 h-[800px] w-[800px]">
        <img src="/7.jpg" className="h-[800px] w-[800px]" alt="pic" />
      </div>
    </main>
  );
}
