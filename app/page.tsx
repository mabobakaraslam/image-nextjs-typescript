// File: page.tsx located in app/ directory
import Image from "next/image";
import heroImage from "@/src/assets/images/hero.png"

export default function page() {
  return (
    <div style={{display: "flex", margin: "20px", gap: "5px"}}>

      {/* Method 1 */}
      <div> {/* Outer container */}
        {/* Image container */}
        <div
          style={{
            width: "107px",
            height: "142px",
            border: "1px solid black",
          }}
        >
          <img src="/images/lighthouse.png" alt="A sample logo"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>

      {/* Method 2 */}
      <div> {/* Outer container */}
 
        {/* Image container will control actual display area */}
        <div
          style={{
            width: "300px",
            border: "1px solid black",
          }}
        >
          <Image
            src="/images/kingfisher.png"
            alt="Hero"
            width={107 /* just specify ratio */}
            height={142 /* just specify ratio */}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>


      <div> {/* Outer container */}

        {/* Image container will control actual display area */}
        <div
          style={{
            width: "300px",
            border: "1px solid black",
          }}
        >
          <Image
            src={heroImage}
            alt="Hero"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
