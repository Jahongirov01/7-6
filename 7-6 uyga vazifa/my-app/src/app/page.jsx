
  import Link from "next/link";

  export default function Home() {
    return (
      <>
        <header className="Container mx-auto">
          <nav className="flex max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-2">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <img src="image.svg" alt="logo" />
            <Link href="/archive">Archive</Link>
            <Link href="/pro">Pro Version</Link>
            <Link href="/download">Download</Link>
          </nav>
        </header>

        <main className="max-w-screen-xl flex flex-wrap  mx-auto p-2 mt-8 gap-6 ">
        <img src="image (1).avif" alt="" width={484} height={228} className="images" />
        <img src="image.avif" alt="" width={484} height={228} />
        </main>
    <div className="my_section">
        <span class=" my    text-blue-600">Technology</span>
        <p></p>
        <h1 className=" bg   ">Architectural Engineering Wonders of the <br />
         modern era for your Inspiration</h1>
    </div>
    <div className="my_sectionn">
        <span class=" my    text-blue-600">Lifestyle</span>
        <p></p>
        <h1 className=" bg   ">5 Effective Brain Recharging Activities No <br />
         One is Talking About
        </h1>
        <div className="img">
            <img src="1.avif" alt="" width={284} height={200} />
            <img src="2.avif" alt="" width={284} height={200} />
        </div>
        <div className="images">
            <img src="3.avif" alt="" width={284} height={200} />
            <img src="4.avif" alt="" width={284} height={200} />
        </div>
    </div>
    
    
    

      </>
    );
  }