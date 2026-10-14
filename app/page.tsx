// File: page.tsx located in app/ directory
import Image from "next/image";
import heroImage from "@/src/assets/images/hero.png"

export default function page() {
  return (
    <div>
      <h1 className="red-heading stylish-heading" style={{ textAlign: "center", margin: "50px", padding: "20px" }}>Hello World</h1>

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