import Link from 'next/link'
export default function Footer() {
  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "space-around"
    }}>
      {/* TODO lägg in nått mer här kanske? */}
      <Link href="https://github.com/H0nken/webshop_school_project"><a>src</a></Link>

    </div >

  )

}