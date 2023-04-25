import Layout from "@/components/Layout";
import Link from "next/link";
import { FaExclamationTriangle } from 'react-icons/fa'

export default function NotFoundPage() {
  return (
    <Layout
      title="Page Not Found"
      className="text-center mt-[100px] mb-[200px]"
    >
      <div className="text-center mt-[100px] mb-[200px]">
        <h1 className="text-[60px] font-bold flex justify-center items-center"><FaExclamationTriangle className="mr-4" />
        404
        </h1>
        <h4>
            Sorry, there is nothing here
        </h4>
        <Link className="text-blue-500" href="/">Go back home</Link>
      </div>
    </Layout>
  );
}
