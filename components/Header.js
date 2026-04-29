import User from "./User";
import Link from "next/link"
import {useRouter} from "next/router"

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700flex space-x-4">
        <div className="flex space-x-4 items-center">
          <Link href="https://about.google/" className="link">
            About
          </Link>
          <Link href="https://store.google.com/" className="link">
            Store
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          <Link href="https://mail.google.com" className="link">
            Gmail
          </Link>

            <a onClick={()=>router.push(`/search?term=${router.query.term || "google"}&searchType=image`)} className="link">Images</a>
            <User/>
        </div>
    </header>
  )
}
