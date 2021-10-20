import Link from "next/link"

export default function Navbar() {

  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "space-around"
    }}>
      {/* TODO byt dessa till ikoner */}
      <Link href="/"><a>Home</a></Link>
      <Link href="/checkout"><a>Cart</a></Link>

    </div >

  )
}